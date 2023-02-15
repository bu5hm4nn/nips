const fs = require('fs');
const messages = require('./messages.js')

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error('Usage: node app.js input_file output_file');
  process.exit(1);
}

function stringToBinary( string )
{
  if( !string ) return undefined;
  return Buffer.from( string, 'hex' );
}

function binaryToString( binary )
{
  if( !binary ) return undefined;
  return Buffer.from( binary ).toString( 'hex' );
}

function stringArrayToBinaryArray( stringArray )
{
  if( !stringArray ) return undefined;

  var binaryArray = [];

  for( let i=0; i < stringArray.length; i++ )
  {
    binaryArray[i] = stringToBinary( stringArray[i] );
  }

  return binaryArray;
}

function binaryArrayToStringArray( binaryArray )
{
  if( !binaryArray ) return undefined;

  var stringArray = [];

  for( let i=0; i < binaryArray.length; i++ )
  {
    stringArray[i] = binaryToString( binaryArray[i] );
  }

  return stringArray;
}

function getDefined( value )
{
  return value ?? undefined;
}

const [inputFile, outputFile] = args;

fs.readFile(inputFile, (err, data) => {
  if (err) {
    console.error(`Error reading input file: ${err.message}`);
    process.exit(1);
  }

  let inputFormat;
  let outputFormat;

  // parse protobuf-schema object
  let protoBuf = null;
  let jsonPacket = null;

  // Try to parse the input as JSON
  try {
    json = JSON.parse(data);
    if( json.length < 2 ) {
      console.error( `Top level array too short: \n${data}` );
      console.exit(2);
    }

    console.log( `Type: ${json[0]}, SubID: ${json[1]}` );
    inputFormat = 'json';
    outputFormat = 'protobuf';
  } catch (e) {
    // If it fails, assume the input is ProtocolBuffer
    inputFormat = 'protobuf';
    outputFormat = 'json';
  }

  if( inputFormat == 'json' ) {
    switch( json[0] )
    {
      case 'EVENT':
        var msg = {
          protobufVersion: messages.nostrProtobufVersion.Version1,
          EVENT: null
        };
        const je = json[2];
        var evt = {
          id: stringToBinary( je.id ),
          pubkey: stringToBinary( je.pubkey ),
          created_at: je.created_at,
          kind: je.kind,
          tags: { etags: [], ptags: [] },
          content: je.content,
          sig: stringToBinary( je.sig ),
          ots: stringToBinary( je.ots )
        };
        for( const tag of je.tags )
        {
          switch( tag[0] )
          {
            case 'e':
              var etag = { id: stringToBinary( tag[1] ) };
              if( tag[2] )
                etag.relayUrl = tag[2];
              if( tag[3] )
                etag.marker = tag[3];
              evt.tags.etags.push(etag);
              break;
            case 'p':
              var ptag = { key: stringToBinary( tag[1] ) };
              if( tag[2] )
                ptag.relayUrl = tag[2];
              if( tag[3] )
                ptag.petname = tag[3];
              evt.tags.ptags.push(ptag);
              break;
            default:
              console.error( `Unsupported tag ${tag[0]} is ignored` );
              break;
          }
        }
        var eventCmd = {
          subscription_id: json[1],
          event: evt
        };
        msg.EVENT = eventCmd;
        console.log(msg);
        protoBuf = messages.nostr.encode(msg);
        break;
      case 'REQ':
        var msg = {
          protobufVersion: messages.nostrProtobufVersion.Version1,
          REQ: null
        };
        const jf = json[2];
        var filters = {
          ids: stringArrayToBinaryArray( jf.ids ),
          authors: stringArrayToBinaryArray( jf.authors ),
          kinds: jf.kinds,
          es: stringArrayToBinaryArray( jf["#e"] ),
          ps: stringArrayToBinaryArray( jf["#p"] ),
          since: jf.since,
          until: jf.until,
          limit: jf.limit
        };
        var req = {
          subscription_id: json[1],
          filters: filters,
        };
        msg.REQ = req;
        console.log(msg);
        protoBuf = messages.nostr.encode(msg);
        break;
      case 'CLOSE':

        break;
      case 'NOTICE':

        break;
      default:
        console.error(`Unsupported message type: ${json[0]}`);
        console.exit(3);
        break;
    }
  } else {
    // If it fails, assume the input is ProtocolBuffer
    inputFormat = 'protobuf';
    outputFormat = 'json';

    obj = messages.nostr.decode(data);
    if( obj.EVENT ) {
      var evt = obj.EVENT.event;
      var pkt = [
        "EVENT",
        obj.EVENT.subscription_id,
        {
          id: binaryToString( evt.id ),
          authors: binaryToString( evt.pubkey ),
          created_at: evt.created_at,
          kind: evt.kind,
          tags: [],
          content: evt.content,
          sig: binaryToString( evt.sig ),
          ots: binaryToString( evt.ots )
        }
      ];
      for( const etag of evt.tags.etags )
      {
        var tag = [
          "e",
          binaryToString( etag.id )
        ];
        if( etag.relayUrl )
          tag.push( etag.relayUrl );
        if( etag.marker )
          tag.push( etag.marker );
        pkt[2].tags.push(tag);
      }
      for( const ptag of evt.tags.ptags )
      {
        var tag = [
          "p",
          binaryToString( ptag.key )
        ];
        if( ptag.relayUrl )
          tag.push( ptag.relayUrl );
        if( ptag.petname )
          tag.push( ptag.petname );
        pkt[2].tags.push(tag);
      }
      console.log(pkt);
      jsonPacket = pkt;
    }
    else if( obj.REQ ) {
      var req = obj.REQ
      var pkt = [
        "REQ",
        req.subscription_id,
        {
          ids: binaryArrayToStringArray( req.filters.ids ),
          authors: binaryArrayToStringArray( req.filters.authors ),
          kinds: req.filters.kinds,
          "#e": binaryArrayToStringArray( req.filters.es ),
          "#p": binaryArrayToStringArray( req.filters.ps ),
          since: req.filters.since,
          until: req.filters.until,
          limit: req.filters.limit
        }
      ];
      console.log(pkt);
      jsonPacket = pkt;
    }
    else if ( obj.CLOSE ) {

    }
    else if ( obj.NOTICE ) {

    } else {
      console.error(`Unsupported message type`);
      console.exit(4);
    }
  }

  if( inputFormat == 'json' ) {
    fs.writeFile(outputFile, protoBuf, (err) => {
      if (err) {
        console.error(`Error writing output file: ${err.message}`);
        process.exit(1);
      }
      console.log(`Converted ${inputFormat} to ${outputFormat}`);
    });
  } else {
    var jsonString = JSON.stringify( jsonPacket );
    fs.writeFile(outputFile, jsonString, (err) => {
      if (err) {
        console.error(`Error writing output file: ${err.message}`);
        process.exit(1);
      }
      console.log(`Converted ${inputFormat} to ${outputFormat}`);
    });
  }
});

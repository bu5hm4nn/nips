// This file is auto generated by the protocol-buffers compiler

/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-redeclare */
/* eslint-disable camelcase */

// Remember to `npm install --save protocol-buffers-encodings`
var encodings = require('protocol-buffers-encodings')
var varint = encodings.varint
var skip = encodings.skip

exports.nostrProtobufVersion = {
  Version1: 1
}

var EventTag = exports.EventTag = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var PubkeyTag = exports.PubkeyTag = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var Tag = exports.Tag = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var Tags = exports.Tags = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var Event = exports.Event = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var EventCmd = exports.EventCmd = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var Filters = exports.Filters = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var RequestCmd = exports.RequestCmd = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var CloseCmd = exports.CloseCmd = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var NoticeCmd = exports.NoticeCmd = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var nostr = exports.nostr = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

defineEventTag()
definePubkeyTag()
defineTag()
defineTags()
defineEvent()
defineEventCmd()
defineFilters()
defineRequestCmd()
defineCloseCmd()
defineNoticeCmd()
definenostr()

function defineEventTag () {
  EventTag.encodingLength = encodingLength
  EventTag.encode = encode
  EventTag.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.id)) {
      var len = encodings.bytes.encodingLength(obj.id)
      length += 1 + len
    }
    if (defined(obj.relayUrl)) {
      var len = encodings.string.encodingLength(obj.relayUrl)
      length += 1 + len
    }
    if (defined(obj.marker)) {
      var len = encodings.string.encodingLength(obj.marker)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.id)) {
      buf[offset++] = 10
      encodings.bytes.encode(obj.id, buf, offset)
      offset += encodings.bytes.encode.bytes
    }
    if (defined(obj.relayUrl)) {
      buf[offset++] = 18
      encodings.string.encode(obj.relayUrl, buf, offset)
      offset += encodings.string.encode.bytes
    }
    if (defined(obj.marker)) {
      buf[offset++] = 26
      encodings.string.encode(obj.marker, buf, offset)
      offset += encodings.string.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      id: null,
      relayUrl: "",
      marker: ""
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.id = encodings.bytes.decode(buf, offset)
        offset += encodings.bytes.decode.bytes
        break
        case 2:
        obj.relayUrl = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        case 3:
        obj.marker = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function definePubkeyTag () {
  PubkeyTag.encodingLength = encodingLength
  PubkeyTag.encode = encode
  PubkeyTag.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.key)) {
      var len = encodings.bytes.encodingLength(obj.key)
      length += 1 + len
    }
    if (defined(obj.relayUrl)) {
      var len = encodings.string.encodingLength(obj.relayUrl)
      length += 1 + len
    }
    if (defined(obj.petname)) {
      var len = encodings.string.encodingLength(obj.petname)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.key)) {
      buf[offset++] = 10
      encodings.bytes.encode(obj.key, buf, offset)
      offset += encodings.bytes.encode.bytes
    }
    if (defined(obj.relayUrl)) {
      buf[offset++] = 18
      encodings.string.encode(obj.relayUrl, buf, offset)
      offset += encodings.string.encode.bytes
    }
    if (defined(obj.petname)) {
      buf[offset++] = 26
      encodings.string.encode(obj.petname, buf, offset)
      offset += encodings.string.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      key: null,
      relayUrl: "",
      petname: ""
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.key = encodings.bytes.decode(buf, offset)
        offset += encodings.bytes.decode.bytes
        break
        case 2:
        obj.relayUrl = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        case 3:
        obj.petname = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineTag () {
  Tag.encodingLength = encodingLength
  Tag.encode = encode
  Tag.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.data)) {
      for (var i = 0; i < obj.data.length; i++) {
        if (!defined(obj.data[i])) continue
        var len = encodings.string.encodingLength(obj.data[i])
        length += 1 + len
      }
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.data)) {
      for (var i = 0; i < obj.data.length; i++) {
        if (!defined(obj.data[i])) continue
        buf[offset++] = 10
        encodings.string.encode(obj.data[i], buf, offset)
        offset += encodings.string.encode.bytes
      }
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      data: []
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.data.push(encodings.string.decode(buf, offset))
        offset += encodings.string.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineTags () {
  Tags.encodingLength = encodingLength
  Tags.encode = encode
  Tags.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.etags)) {
      for (var i = 0; i < obj.etags.length; i++) {
        if (!defined(obj.etags[i])) continue
        var len = EventTag.encodingLength(obj.etags[i])
        length += varint.encodingLength(len)
        length += 1 + len
      }
    }
    if (defined(obj.ptags)) {
      for (var i = 0; i < obj.ptags.length; i++) {
        if (!defined(obj.ptags[i])) continue
        var len = PubkeyTag.encodingLength(obj.ptags[i])
        length += varint.encodingLength(len)
        length += 1 + len
      }
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.etags)) {
      for (var i = 0; i < obj.etags.length; i++) {
        if (!defined(obj.etags[i])) continue
        buf[offset++] = 10
        varint.encode(EventTag.encodingLength(obj.etags[i]), buf, offset)
        offset += varint.encode.bytes
        EventTag.encode(obj.etags[i], buf, offset)
        offset += EventTag.encode.bytes
      }
    }
    if (defined(obj.ptags)) {
      for (var i = 0; i < obj.ptags.length; i++) {
        if (!defined(obj.ptags[i])) continue
        buf[offset++] = 18
        varint.encode(PubkeyTag.encodingLength(obj.ptags[i]), buf, offset)
        offset += varint.encode.bytes
        PubkeyTag.encode(obj.ptags[i], buf, offset)
        offset += PubkeyTag.encode.bytes
      }
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      etags: [],
      ptags: []
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.etags.push(EventTag.decode(buf, offset, offset + len))
        offset += EventTag.decode.bytes
        break
        case 2:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.ptags.push(PubkeyTag.decode(buf, offset, offset + len))
        offset += PubkeyTag.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineEvent () {
  Event.encodingLength = encodingLength
  Event.encode = encode
  Event.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.id)) {
      var len = encodings.bytes.encodingLength(obj.id)
      length += 1 + len
    }
    if (defined(obj.pubkey)) {
      var len = encodings.bytes.encodingLength(obj.pubkey)
      length += 1 + len
    }
    if (defined(obj.created_at)) {
      var len = encodings.int64.encodingLength(obj.created_at)
      length += 1 + len
    }
    if (defined(obj.kind)) {
      var len = encodings.int64.encodingLength(obj.kind)
      length += 1 + len
    }
    if (defined(obj.tags)) {
      var len = Tags.encodingLength(obj.tags)
      length += varint.encodingLength(len)
      length += 1 + len
    }
    if (defined(obj.content)) {
      var len = encodings.string.encodingLength(obj.content)
      length += 1 + len
    }
    if (defined(obj.sig)) {
      var len = encodings.bytes.encodingLength(obj.sig)
      length += 1 + len
    }
    if (defined(obj.ots)) {
      var len = encodings.bytes.encodingLength(obj.ots)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.id)) {
      buf[offset++] = 10
      encodings.bytes.encode(obj.id, buf, offset)
      offset += encodings.bytes.encode.bytes
    }
    if (defined(obj.pubkey)) {
      buf[offset++] = 18
      encodings.bytes.encode(obj.pubkey, buf, offset)
      offset += encodings.bytes.encode.bytes
    }
    if (defined(obj.created_at)) {
      buf[offset++] = 24
      encodings.int64.encode(obj.created_at, buf, offset)
      offset += encodings.int64.encode.bytes
    }
    if (defined(obj.kind)) {
      buf[offset++] = 32
      encodings.int64.encode(obj.kind, buf, offset)
      offset += encodings.int64.encode.bytes
    }
    if (defined(obj.tags)) {
      buf[offset++] = 42
      varint.encode(Tags.encodingLength(obj.tags), buf, offset)
      offset += varint.encode.bytes
      Tags.encode(obj.tags, buf, offset)
      offset += Tags.encode.bytes
    }
    if (defined(obj.content)) {
      buf[offset++] = 50
      encodings.string.encode(obj.content, buf, offset)
      offset += encodings.string.encode.bytes
    }
    if (defined(obj.sig)) {
      buf[offset++] = 58
      encodings.bytes.encode(obj.sig, buf, offset)
      offset += encodings.bytes.encode.bytes
    }
    if (defined(obj.ots)) {
      buf[offset++] = 66
      encodings.bytes.encode(obj.ots, buf, offset)
      offset += encodings.bytes.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      id: null,
      pubkey: null,
      created_at: 0,
      kind: 0,
      tags: null,
      content: "",
      sig: null,
      ots: null
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.id = encodings.bytes.decode(buf, offset)
        offset += encodings.bytes.decode.bytes
        break
        case 2:
        obj.pubkey = encodings.bytes.decode(buf, offset)
        offset += encodings.bytes.decode.bytes
        break
        case 3:
        obj.created_at = encodings.int64.decode(buf, offset)
        offset += encodings.int64.decode.bytes
        break
        case 4:
        obj.kind = encodings.int64.decode(buf, offset)
        offset += encodings.int64.decode.bytes
        break
        case 5:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.tags = Tags.decode(buf, offset, offset + len)
        offset += Tags.decode.bytes
        break
        case 6:
        obj.content = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        case 7:
        obj.sig = encodings.bytes.decode(buf, offset)
        offset += encodings.bytes.decode.bytes
        break
        case 8:
        obj.ots = encodings.bytes.decode(buf, offset)
        offset += encodings.bytes.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineEventCmd () {
  EventCmd.encodingLength = encodingLength
  EventCmd.encode = encode
  EventCmd.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.subscription_id)) {
      var len = encodings.string.encodingLength(obj.subscription_id)
      length += 1 + len
    }
    if (defined(obj.event)) {
      var len = Event.encodingLength(obj.event)
      length += varint.encodingLength(len)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.subscription_id)) {
      buf[offset++] = 10
      encodings.string.encode(obj.subscription_id, buf, offset)
      offset += encodings.string.encode.bytes
    }
    if (defined(obj.event)) {
      buf[offset++] = 18
      varint.encode(Event.encodingLength(obj.event), buf, offset)
      offset += varint.encode.bytes
      Event.encode(obj.event, buf, offset)
      offset += Event.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      subscription_id: "",
      event: null
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.subscription_id = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        case 2:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.event = Event.decode(buf, offset, offset + len)
        offset += Event.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineFilters () {
  Filters.encodingLength = encodingLength
  Filters.encode = encode
  Filters.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.ids)) {
      for (var i = 0; i < obj.ids.length; i++) {
        if (!defined(obj.ids[i])) continue
        var len = encodings.bytes.encodingLength(obj.ids[i])
        length += 1 + len
      }
    }
    if (defined(obj.authors)) {
      for (var i = 0; i < obj.authors.length; i++) {
        if (!defined(obj.authors[i])) continue
        var len = encodings.bytes.encodingLength(obj.authors[i])
        length += 1 + len
      }
    }
    if (defined(obj.kinds)) {
      for (var i = 0; i < obj.kinds.length; i++) {
        if (!defined(obj.kinds[i])) continue
        var len = encodings.int64.encodingLength(obj.kinds[i])
        length += 1 + len
      }
    }
    if (defined(obj.es)) {
      for (var i = 0; i < obj.es.length; i++) {
        if (!defined(obj.es[i])) continue
        var len = Tag.encodingLength(obj.es[i])
        length += varint.encodingLength(len)
        length += 1 + len
      }
    }
    if (defined(obj.ps)) {
      for (var i = 0; i < obj.ps.length; i++) {
        if (!defined(obj.ps[i])) continue
        var len = Tag.encodingLength(obj.ps[i])
        length += varint.encodingLength(len)
        length += 1 + len
      }
    }
    if (defined(obj.since)) {
      var len = encodings.int64.encodingLength(obj.since)
      length += 1 + len
    }
    if (defined(obj.until)) {
      var len = encodings.int64.encodingLength(obj.until)
      length += 1 + len
    }
    if (defined(obj.limit)) {
      var len = encodings.int64.encodingLength(obj.limit)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.ids)) {
      for (var i = 0; i < obj.ids.length; i++) {
        if (!defined(obj.ids[i])) continue
        buf[offset++] = 10
        encodings.bytes.encode(obj.ids[i], buf, offset)
        offset += encodings.bytes.encode.bytes
      }
    }
    if (defined(obj.authors)) {
      for (var i = 0; i < obj.authors.length; i++) {
        if (!defined(obj.authors[i])) continue
        buf[offset++] = 18
        encodings.bytes.encode(obj.authors[i], buf, offset)
        offset += encodings.bytes.encode.bytes
      }
    }
    if (defined(obj.kinds)) {
      for (var i = 0; i < obj.kinds.length; i++) {
        if (!defined(obj.kinds[i])) continue
        buf[offset++] = 24
        encodings.int64.encode(obj.kinds[i], buf, offset)
        offset += encodings.int64.encode.bytes
      }
    }
    if (defined(obj.es)) {
      for (var i = 0; i < obj.es.length; i++) {
        if (!defined(obj.es[i])) continue
        buf[offset++] = 34
        varint.encode(Tag.encodingLength(obj.es[i]), buf, offset)
        offset += varint.encode.bytes
        Tag.encode(obj.es[i], buf, offset)
        offset += Tag.encode.bytes
      }
    }
    if (defined(obj.ps)) {
      for (var i = 0; i < obj.ps.length; i++) {
        if (!defined(obj.ps[i])) continue
        buf[offset++] = 42
        varint.encode(Tag.encodingLength(obj.ps[i]), buf, offset)
        offset += varint.encode.bytes
        Tag.encode(obj.ps[i], buf, offset)
        offset += Tag.encode.bytes
      }
    }
    if (defined(obj.since)) {
      buf[offset++] = 48
      encodings.int64.encode(obj.since, buf, offset)
      offset += encodings.int64.encode.bytes
    }
    if (defined(obj.until)) {
      buf[offset++] = 56
      encodings.int64.encode(obj.until, buf, offset)
      offset += encodings.int64.encode.bytes
    }
    if (defined(obj.limit)) {
      buf[offset++] = 64
      encodings.int64.encode(obj.limit, buf, offset)
      offset += encodings.int64.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      ids: [],
      authors: [],
      kinds: [],
      es: [],
      ps: [],
      since: 0,
      until: 0,
      limit: 0
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.ids.push(encodings.bytes.decode(buf, offset))
        offset += encodings.bytes.decode.bytes
        break
        case 2:
        obj.authors.push(encodings.bytes.decode(buf, offset))
        offset += encodings.bytes.decode.bytes
        break
        case 3:
        obj.kinds.push(encodings.int64.decode(buf, offset))
        offset += encodings.int64.decode.bytes
        break
        case 4:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.es.push(Tag.decode(buf, offset, offset + len))
        offset += Tag.decode.bytes
        break
        case 5:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.ps.push(Tag.decode(buf, offset, offset + len))
        offset += Tag.decode.bytes
        break
        case 6:
        obj.since = encodings.int64.decode(buf, offset)
        offset += encodings.int64.decode.bytes
        break
        case 7:
        obj.until = encodings.int64.decode(buf, offset)
        offset += encodings.int64.decode.bytes
        break
        case 8:
        obj.limit = encodings.int64.decode(buf, offset)
        offset += encodings.int64.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineRequestCmd () {
  RequestCmd.encodingLength = encodingLength
  RequestCmd.encode = encode
  RequestCmd.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.subscription_id)) {
      var len = encodings.string.encodingLength(obj.subscription_id)
      length += 1 + len
    }
    if (defined(obj.filters)) {
      var len = Filters.encodingLength(obj.filters)
      length += varint.encodingLength(len)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.subscription_id)) {
      buf[offset++] = 10
      encodings.string.encode(obj.subscription_id, buf, offset)
      offset += encodings.string.encode.bytes
    }
    if (defined(obj.filters)) {
      buf[offset++] = 18
      varint.encode(Filters.encodingLength(obj.filters), buf, offset)
      offset += varint.encode.bytes
      Filters.encode(obj.filters, buf, offset)
      offset += Filters.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      subscription_id: "",
      filters: null
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.subscription_id = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        case 2:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.filters = Filters.decode(buf, offset, offset + len)
        offset += Filters.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineCloseCmd () {
  CloseCmd.encodingLength = encodingLength
  CloseCmd.encode = encode
  CloseCmd.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.subscription_id)) {
      var len = encodings.string.encodingLength(obj.subscription_id)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.subscription_id)) {
      buf[offset++] = 10
      encodings.string.encode(obj.subscription_id, buf, offset)
      offset += encodings.string.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      subscription_id: ""
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.subscription_id = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineNoticeCmd () {
  NoticeCmd.encodingLength = encodingLength
  NoticeCmd.encode = encode
  NoticeCmd.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.message)) {
      var len = encodings.string.encodingLength(obj.message)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.message)) {
      buf[offset++] = 10
      encodings.string.encode(obj.message, buf, offset)
      offset += encodings.string.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      message: ""
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.message = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function definenostr () {
  nostr.encodingLength = encodingLength
  nostr.encode = encode
  nostr.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.protobufVersion)) {
      var len = encodings.enum.encodingLength(obj.protobufVersion)
      length += 1 + len
    }
    if (defined(obj.EVENT)) {
      var len = EventCmd.encodingLength(obj.EVENT)
      length += varint.encodingLength(len)
      length += 1 + len
    }
    if (defined(obj.REQ)) {
      var len = RequestCmd.encodingLength(obj.REQ)
      length += varint.encodingLength(len)
      length += 1 + len
    }
    if (defined(obj.CLOSE)) {
      var len = CloseCmd.encodingLength(obj.CLOSE)
      length += varint.encodingLength(len)
      length += 1 + len
    }
    if (defined(obj.NOTICE)) {
      var len = NoticeCmd.encodingLength(obj.NOTICE)
      length += varint.encodingLength(len)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.protobufVersion)) {
      buf[offset++] = 8
      encodings.enum.encode(obj.protobufVersion, buf, offset)
      offset += encodings.enum.encode.bytes
    }
    if (defined(obj.EVENT)) {
      buf[offset++] = 18
      varint.encode(EventCmd.encodingLength(obj.EVENT), buf, offset)
      offset += varint.encode.bytes
      EventCmd.encode(obj.EVENT, buf, offset)
      offset += EventCmd.encode.bytes
    }
    if (defined(obj.REQ)) {
      buf[offset++] = 26
      varint.encode(RequestCmd.encodingLength(obj.REQ), buf, offset)
      offset += varint.encode.bytes
      RequestCmd.encode(obj.REQ, buf, offset)
      offset += RequestCmd.encode.bytes
    }
    if (defined(obj.CLOSE)) {
      buf[offset++] = 34
      varint.encode(CloseCmd.encodingLength(obj.CLOSE), buf, offset)
      offset += varint.encode.bytes
      CloseCmd.encode(obj.CLOSE, buf, offset)
      offset += CloseCmd.encode.bytes
    }
    if (defined(obj.NOTICE)) {
      buf[offset++] = 42
      varint.encode(NoticeCmd.encodingLength(obj.NOTICE), buf, offset)
      offset += varint.encode.bytes
      NoticeCmd.encode(obj.NOTICE, buf, offset)
      offset += NoticeCmd.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      protobufVersion: 1,
      EVENT: null,
      REQ: null,
      CLOSE: null,
      NOTICE: null
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.protobufVersion = encodings.enum.decode(buf, offset)
        offset += encodings.enum.decode.bytes
        break
        case 2:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.EVENT = EventCmd.decode(buf, offset, offset + len)
        offset += EventCmd.decode.bytes
        break
        case 3:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.REQ = RequestCmd.decode(buf, offset, offset + len)
        offset += RequestCmd.decode.bytes
        break
        case 4:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.CLOSE = CloseCmd.decode(buf, offset, offset + len)
        offset += CloseCmd.decode.bytes
        break
        case 5:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.NOTICE = NoticeCmd.decode(buf, offset, offset + len)
        offset += NoticeCmd.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defined (val) {
  return val !== null && val !== undefined && (typeof val !== 'number' || !isNaN(val))
}

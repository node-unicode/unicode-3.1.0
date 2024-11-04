module.exports=require('../decode-property-map.js')(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))
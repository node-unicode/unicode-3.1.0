module.exports=require('../decode-property-map.js')(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))
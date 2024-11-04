module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))
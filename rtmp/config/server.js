const NodeMediaServer = require('node-media-server')
const config = require('.').rtmp_server
const service = require('../services')
 
server = new NodeMediaServer(config)
 
server.on('prePublish', async (id, StreamPath, args) => {
    let stream_key = getStreamKeyFromStreamPath(StreamPath)
    // do validation
})
 
const getStreamKeyFromStreamPath = (path) => {
    let parts = path.split('/')
    return parts[parts.length - 1]
}

module.exports = server
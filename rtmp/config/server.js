const NodeMediaServer = require('node-media-server')
const config = require('.').rtmp_server
 
server = new NodeMediaServer(config)
 
server.on('prePublish', async (id, StreamPath, args) => {
    let session = server.getSession(id)
})

module.exports = server
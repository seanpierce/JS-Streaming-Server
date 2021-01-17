const NodeMediaServer = require('node-media-server')
const config = require('.').rtmp_server
const creds = require('./creds')
 
server = new NodeMediaServer(config)
 
server.on('prePublish', async (id, StreamPath, args) => {
    let session = server.getSession(id)
    
    let password = args.password
    if (password !== creds) return session.reject()
})

module.exports = server
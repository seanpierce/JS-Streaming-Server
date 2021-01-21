const NodeMediaServer = require('node-media-server')
const config = require('.').rtmp_server
 
server = new NodeMediaServer(config)
 
server.on('prePublish', async (id, StreamPath, args) => {
    let session = server.getSession(id)
    
    let password = args.password
    if (password !== config.creds) return session.reject()
})

module.exports = server

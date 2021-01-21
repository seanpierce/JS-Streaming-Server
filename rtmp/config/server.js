const NodeMediaServer = require('node-media-server')
const config = require('.')
 
server = new NodeMediaServer(config.rtmp_server)
 
server.on('prePublish', async (id, StreamPath, args) => {
    let session = server.getSession(id)
    
    let password = args.password

    if (password !== config.password) return session.reject()
})

module.exports = server

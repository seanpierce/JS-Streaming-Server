const scripts = require('../scripts')

let env = scripts.getArg('--env')
let prod = env ? env.toLowerCase() === 'prod' : false

scripts.configLog(prod)

let password = scripts.setPassword(prod, scripts.getArg('--p'))

const config = {
    rtmp_server: {
        rtmp: {
            port: 1935,
            chunk_size: 1200,
            gop_cache: true,
            ping: 60,
            ping_timeout: 30
        },
        http: {
            port: 8888,
            // if prod, link to absolute path on server
            mediaroot: prod ? '/home/seanpierce/www/stream/rtmp/server/media' : './rtmp/server/media',
            allow_origin: '*'
        },
        trans: {
            // if prod, link to server installation of ffmpeg
            ffmpeg: prod ? '/usr/bin/ffmpeg' : '/usr/local/bin/ffmpeg',
            tasks: [
                {
                    app: 'live',
                    hls: true,
                    hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
                    dash: true,
                    dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
                }
            ]
        }
    },
    password: password ? password : 'hackme'
}


 
module.exports = config;

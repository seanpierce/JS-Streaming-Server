# JS Streaming Server

A twitch-style streaming server and client developed with Node. Configured to send RTMP streams using `node media server` to a client running `video.js`, all wrapped within a CLI.

## Dependencies

* node > 14
* yarn or npm
* ffmpeg > 4

## Installation

```shell
git clone [this repo]
cd [this repo]/rtmp
yarn [or npm]
```

## Usage

With the dependencies and the project installed, navigate to the root of this project and run rtmp module (rtmp/index.js) by executing `node ./rtmp [args]`.

### Args

* `--env` specifies the environment. When set to "prod", this flag will alter configuration values in the `rtmp/config/index.js` file. The default value is "test".
* `--p` specifies the stream password. If no password is specified then the default value 'hackme' is used. Note that when running in production, it is required that a password is set.

## Configuration

Configuration values can be set in the `rtmp/config/index.js` file. The current project expects a local environment to be MacOS and a produciton environment to be Ubuntu 18. Dependency instal locations or media root locations may differ between environments. Ensure that these values are accurate to your environments.

For production, ensure that ports **1935** and **8888** are open and accessible if you are using a firewall. If other ports are specified or changed in the `rtmp/config/index.js` file, then ensure that those ports are allowed as well.

Using **Nginx**, the server and client can be configured in a way to easily allow SSL using a proxy. One the config Nginx config is set up, use certbot to generate an SSL cert, and select the option to 'redirect'.

```linux
server {

        root [path to project];
        index index.html;

        server_name [your domain or IP];

        location / {
                try_files $uri $uri/ =404;
        }

        location /stream {
            proxy_pass         [my domain]:8888/[app name]/[stream key];
            proxy_redirect     off;
            proxy_set_header   Host             $host;
            proxy_set_header   X-Real-IP        $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
        }
}
```
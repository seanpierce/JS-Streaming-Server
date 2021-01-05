<template>
    <div>
        <div>
            <video ref="videoPlayer" class="video-js"></video>
        </div>
    </div>
</template>

<script>
import videojs from 'video.js'

export default {
    data() {
        return {
            stream: false,
            videoJsOptions: null,
            player: null
        }
    },

    methods: {

        setPlayer() {
            this.stream = true

            this.videoJsOptions = {
                autoplay: false,
                controls: true,
                sources: [{
                    src: "http://localhost:8888/live/1234/index.m3u8",
                    type: "application/x-mpegURL"
                }],
                fluid: true
            }

            this.player = videojs(this.$refs.videoPlayer, this.videoJsOptions, function onPlayerReady() {
                console.log('onPlayerReady', this);
            })
        }
    },

    mounted() {

        this.setPlayer()
    },

    beforeDestroy() {

        if (this.player) {
            this.player.dispose()
        }
    }
}

</script>
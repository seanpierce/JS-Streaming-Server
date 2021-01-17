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
            player: null
        }
    },

    methods: {

        setPlayer() {
                let options = {
                autoplay: false,
                controls: true,
                sources: [{
                    src: "http://localhost:8888/live/stream/index.m3u8",
                    type: "application/x-mpegURL"
                }],
                fluid: true,
                poster: require('@/assets/images/thumbnail.png')
            }

            this.player = videojs(this.$refs.videoPlayer, options, function onPlayerReady() {
                console.log('onPlayerReady', this)
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
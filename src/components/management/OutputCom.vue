<template>
    <div class="title-mid"> Output Information</div>
    <div v-for="output in outputPreset" v-bind:key="output">
        <div class="info-wrap">
            <div class="info-wrap-title"> ＃ Basic Info</div>
            <div class="info-container">
                <span class="info-title">output ID : </span>
                <input type="text" v-model="output.outputId" disabled>
            </div>
            <div class="info-container">
                <span class="info-title">output path : </span>
                <input type="text" v-model="output.outputFolder" disabled>
            </div>
            <div class="info-container">
                <span class="info-title">output file name : </span>
                <input type="text" v-model="output.outputFileName" disabled>
            </div>
            <div class="info-container">
                <span class="info-title">container : </span>
                <input type="text" v-model="output.container" disabled>
            </div>
            <div class="info-container">
                <span class="info-title">output type : </span>
                <input type="text" v-model="output.outputType" disabled>
            </div>
        </div>
        <div class="info-wrap">
            <div class="info-wrap-title"> ＃ Video Info</div>
            <div class="info-container">
                <span class="info-title">codec : </span>
                <input type="text" v-model="output.video.videoCodec" disabled>
            </div>
            <div class="info-container">
                <span class="info-title">bit-rate : </span>
                <input type="text" v-model="output.video.videoBitrate" disabled>
            </div>
            <div class="info-container">
                <span class="info-title">frame-rate : </span>
                <input type="text" v-model="output.video.frameRate" disabled>
            </div>
            <div class="info-container">
                <span class="info-title">width : </span>
                <input type="text" v-model="output.video.width" disabled>
            </div>
            <div class="info-container">
                <span class="info-title">height : </span>
                <input type="text" v-model="output.video.height" disabled>
            </div>
            <div class="info-container">
                <span class="info-title">quality : </span>
                <input type="text" v-model="output.video.quality" disabled>
            </div>
        </div>
        <div class="info-wrap">
            <div class="info-wrap-title"> ＃ Audio Info</div>
            <div class="info-container">
                <span class="info-title">codec : </span>
                <input type="text" v-model="output.audio.audioCodec" disabled>
            </div>
            <div class="info-container">
                <span class="info-title">bit-rate : </span>
                <input type="text" v-model="output.audio.audioBitrate" disabled>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'outputCom',
    props : {
        outputPreset : Array,
    },
    created() {

    },
    methods : {
        requestJob(){
            axios.post('/transcoder/vod')
            .then(response => {
                console.log('data', response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("마지막 지낭~");
            });
        }
    }
}
</script>

<style scoped>
.info-wrap-title{
    font-size: 18px;
    text-align: left;
    font-weight: bold;
    padding: 5px 44px;
}
.info-container{
    padding: 5px 40px;
}
.info-wrap {
    margin-bottom: 10px;
}
</style>
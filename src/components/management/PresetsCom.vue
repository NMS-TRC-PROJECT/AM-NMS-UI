<template> 
    <div class="button-box">
        <button v-on:click="requestJob()">작업 요청하기</button>
    </div>
    <div class="wrap-box">
        <input-com :inputPreset="inputPreset"></input-com>
    </div>
    <div class="wrap-box">
        <output-com :outputPreset="outputPreset"></output-com>
    </div>
</template>

<script>
import axios from 'axios'
import InputCom from "./InputCom.vue"
import OutputCom from './OutputCom.vue'

export default {
    components : {
        InputCom,
        OutputCom,
    },
    data() {
        return {
            inputPreset: [],
            outputPreset: [],
        }
    },
    mounted(){
        this.load();
    },
    methods : {
        load() {
            axios.get("/nms/preset/list")
            .then(response => {
                console.log('data', response.data);
                this.inputPreset = response.data.inputList;
                this.outputPreset = response.data.outputList;
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(()=>{
                console.log("마지막 지나가유");
            });
        },
        requestJob(){
            axios.post('/transcoder/vod')
            .then(response => {
                console.log('data', response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                alert("작업 요청이 완료되었습니다.");
                location.href="/";
                console.log("마지막 지낭~");
            });
        }
    }
}
</script>

<style>
.wrap-box{
    padding: 20px;
    width: 80%;
    margin: auto;
}
.button-box{
    text-align: right;
    padding-right: 110px;
}
button{
    color: white;
    background-color: #A5D0BD;
    border : none;
    padding : 10px;
    width: 200px;
    border-radius: 10px;
}
button:hover{
    background-color: #CEE4DA;
    border : none;
    cursor: pointer;
    color: green;
}
</style>
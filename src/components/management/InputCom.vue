<template>
    <div class="title-mid">Input Information</div>
    <div v-for="input in inputPreset" v-bind:key="input">
        <div class="info-container">
            <span class="info-title">Input ID : </span>
            <input type="text" v-model="input.inputId" disabled>
        </div>
        <div class="info-container">
            <span class="info-title">Input path : </span>
            <input type="text" v-model="input.inputFolder" disabled>
        </div>
        <div class="info-container">
            <span class="info-title">Input file name : </span>
            <input type="text" v-model="input.inputFileName" disabled>
        </div>
    </div>
</template>

<script>
export default {
    name : 'inputCom',
    props : {
        inputPreset : Array,
    },
    created(){
    }
}
</script>

<style>
.title-mid {
    font-size: 20px;
    text-align: left;
    font-weight: bold;
    background-color: #CEE4DA;
    padding: 7px 10px;
    margin-bottom: 15px;
}
.info-title{
    font-size : 17px;
    vertical-align: bottom;
}
.info-container{
    padding: 5px 20px;
    text-align: left;
    width: 80%;
    margin: 5px auto;
}
input {
    border : none;
    border-bottom: 2px solid #CEE4DA;
    text-align: center;
    width: 380px;
    float: right;
    padding : 5px;
}
</style>
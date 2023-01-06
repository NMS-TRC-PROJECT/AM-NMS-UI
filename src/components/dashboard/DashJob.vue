<template>
    <div class="dash-container">
      <div class="dash-title">Job Status</div>
      <table class="job-table dh">
        <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Percentage</th>
            <th>Update Time</th>
            <th>Server ID</th>
        </tr>
        <tr v-for="job in jobLists" v-bind:key="job">
            <td>{{ job.transactionId }}</td>
            <td><i class='bx bxs-circle' style='color:#3cc44d'></i></td>
            <td>{{ job.percentage }}</td>
            <td>{{ yyyyMMdd(job.updateDate) }}</td>
            <td>{{ job.serverId}}</td>
        </tr>
       </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return{
            jobLists: [],
            // svrRepeat: null
        }
    },
    created(){
        // this.load(true);
        // this.svrRepeat = setInterval(() => {
        //     this.load(false)
        // }, 10000);
    },
    mounted(){
        this.load();
    },
    // beforeDestroy() {
    //     // clearInterval(this.svrRepeat);
    // },
    methods: {
        load() {
            axios.get("/nms/dash/job/list")
            .then(response => {
                console.log('data', response.data.jobList);
                this.jobLists = response.data.jobList;
            })
            .catch((error) => {
                console.error(error);
            });
        },
        yyyyMMdd(value){
             // 들어오는 value 값이 공백이면 그냥 공백으로 돌려줌
             if (value == '') return '';

            // 현재 Date / DateTime 데이터를 js date 타입화
            let js_date = new Date(value);

            let year = js_date.getFullYear();
            let month = js_date.getMonth() +1;
            let day = js_date.getDate();
            let hours = js_date.getHours();
            let minute = js_date.getMinutes();

            if (month < 10) {
                month = '0'+month;
            }
            if (day < 10){
                day = '0' + day;
            }

            if(minute < 10) {
                minute = '0' + minute;
            }

            return year + '-' + month + '-' + day + ' ' + hours + ":" +minute;
        },
    }
}
</script>

<style>
.job-table{
    width: 100%;
}
</style>
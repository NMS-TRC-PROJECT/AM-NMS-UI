<template>
  <div>
    <div class="title">Job List</div>
    <div class="job-table">
        <table>
            <tr>
                <th class="wide-th">Transaction Id</th>
                <th class="narrow-th">Service Type</th>
                <th class="middle-th">Update Time</th>
                <th class="narrow-th">Status</th>
                <th class="narrow-th">Cancel</th>
            </tr>
            <tr v-for="job in jobLists" v-bind:key="job">
                <td><span class="popover-title">{{ job.transactionId }}</span></td>
                <td>{{ job.serviceType }}</td>
                <td>{{ yyyyMMdd(job.updateDate) }}</td>
                <td v-if="job.status == 2" class="ing"><i class='bx bxs-circle' style='color:#3cc44d'></i></td>
                <td v-else-if="job.status == 0"><i class='bx bxs-circle' style='color:darkgreen'></i></td>
                <td v-else-if="job.status == -1" class="error"><i class='bx bxs-circle' style='color:red'></i></td>
                <td v-else-if="job.status == 3"><i class='bx bxs-circle' style='color:grey'></i></td>
                <td v-else><i class='bx bxs-circle' style='color:orange'></i></td>
                <td v-if="job.status == 2 || job.status == 1"><i class='bx bxs-tag-x' style='color:#8b978c; font-size: 25px;'  v-on:click="cancelJob(job.transactionId)"></i></td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name : 'transcoderCom',
    data() {
        return{
            jobLists: [],
        }
    },
    created(){

    },
    mounted(){
        this.load();
    },
    methods: {
        load() {
            axios.get("/nms/job/list")
            .then(response => {
                console.log('data', response.data.jobList);
                this.jobLists = response.data.jobList;
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(()=> {
                console.log("항상 마지막에 실행");
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
        cancelJob(id){
            axios.delete('/transcoder/vod/'+id)
            .then(response => {
                console.log('data', response.data);
                alert("작업 취소가 완료되었습니다.");
            })
            .catch(error => {
                console.error(error);
            })
        },
    }
}
</script>

<style>
.job-table table{
    width: 90%;
    margin: auto;
}
.job-table th{
    /* width: auto; */
    height: 30px;
    text-align: center;
    vertical-align: middle;
    font-size: 15px;
    font-weight:500;
    border-bottom: 3px double #e6e6e6;
}
.job-table td {
    font-size : 15px;
    height: 30px;
    text-align: center;
    vertical-align: middle;
    border-bottom: 1px solid #e6e6e6;
}
.wide-th {
    width: 320px;
}
.narrow-th {
    width: 90px;
}
.middle-th{
    width: 200px;
}
.error {
    background-color: #FFA6A6;
}
.ing {
    background-color: #B7EBBC;
}
.bxs-tag-x{
    cursor: pointer;
}
.icon{
    font-size: 30px;
    
}
</style>
<template>
    <div class="dash-container">
      <div class="dash-title">Server Status</div>
      <table class="server-table" v-if="serverList != 'nothing'">
        <tr>
            <th >ID</th>
            <th>Name</th>
            <th>IP</th>
            <th>Port</th>
            <th>Status</th>
            <th>Update Date</th>
        </tr>
        <tr v-for="server in serverList" v-bind:key="server">
            <td>{{server.serverId}}</td>
            <td>{{server.serverName}}</td>
            <td>{{server.serverIp}}</td>
            <td>{{server.serverPort}}</td>
            <td v-if="server.isActive == 1"><i class='bx bxs-circle' style='color:#3cc44d'></i></td>
            <td v-else-if="server.isActive == 0"><i class='bx bxs-circle' style='color:red'></i></td>
            <td>{{yyyyMMdd(server.updateDate)}}</td>
        </tr>
      </table>
      <div v-else>서버가 존재하지 않습니다.</div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            serverList : [],
        }
    },
    mounted(){
        this.load();
    },
    methods : {
        load() {
            axios.get('/nms/server/list')
            .then(response => {
                console.log('data', response.data.serverList.content);
                this.serverList = response.data.serverList.content;
                // if (response.data.serverList == 'nothing') {
                    
                // }
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                console.log("지나가유우");
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
            if(minute <10) {
                minute = '0'+minute;
            }

            return year + '-' + month + '-' + day + ' ' + hours + ":" +minute;
        },


    }
}
</script>

<style>
.dash-container {
    flex: 1;
    padding: 10px;
}
.server-table{
    width:100%;
}
</style>
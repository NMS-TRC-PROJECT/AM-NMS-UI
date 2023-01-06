<template>
  <div id="server">
    <div class="title">Server List</div>
    <div class="server-table">
        <table>
            <tr>
                <th>서버 아이디</th>
                <th>서버 이름</th>
                <th>서버 IP</th>
                <th>서버 Port</th>
                <th>서버 상태</th>
                <th>Updated Date</th>
            </tr>
            <tr v-for="server in serverLists" v-bind:key="server">
                <td>{{ server.serverId }}</td>
                <td>{{ server.serverName }}</td>
                <td>{{ server.serverIp }}</td>
                <td>{{ server.serverPort }}</td>
                <td v-if="server.isActive == 1"><i class='bx bxs-circle' style='color:#3cc44d'></i></td>
                <td v-else-if="server.isActive == 0"><i class='bx bxs-circle' style='color:red'></i></td>
                <td>{{ yyyyMMdd(server.updateDate) }}</td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name : 'serverCom',
    data(){
        return {
            serverLists: [],
        }
    },
    created(){
    },
    mounted() {
        this.load();
    },
    methods: {
        load(){
            axios.get("/nms/server/list")
            .then(response => {
                console.log('data', response.data.serverList.content);
                this.serverLists = response.data.serverList.content;
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
            if(minute <10) {
                minute = '0'+minute;
            }

            return year + '-' + month + '-' + day + ' ' + hours + ":" +minute;
        },

    },
};
</script>

<style>
.title {
    text-align: center;
    font-size: 30px;
    font-weight : bold;
    padding: 10px;
    border-bottom: 1px solid #e6e6e6;
}
.server-table table {
    width: 90%;
    margin: auto;
}
.server-table th {
    width: 50px;
    height: 30px;
    text-align: center;
    vertical-align: middle;
    font-size: 15px;
    font-weight:500;
    border-bottom: 3px double #e6e6e6;
}
.server-table td {
    font-size : 15px;
    height: 30px;
    text-align: center;
    vertical-align: middle;
    border-bottom: 1px solid #e6e6e6;
}
</style>
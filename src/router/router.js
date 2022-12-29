import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/HomeCom.vue";
import Server from "@/components/server/ServerCom.vue";
import Transcoder from "@/components/transcoder/TranscoderCom.vue";

const router = createRouter({
    history : createWebHistory(),
    routes : [ // path별 component를 추가한다
        { 
            path: "/", 
            name : "home", 
            component : Home
        },
        {
            path: "/server",
            name : "server",
            component : Server
        },
        {
            path: "/transcoder",
            name : "transcoder",
            component : Transcoder
        },
    ],
});

export default router;
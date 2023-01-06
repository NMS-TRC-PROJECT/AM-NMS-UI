import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/HomeCom.vue";
import Server from "@/components/server/ServerCom.vue";
import Transcoder from "@/components/transcoder/TranscoderCom.vue";
import Management from "@/components/management/ManagementCom.vue";
import Preset from "@/components/management/PresetsCom.vue";
import Test from "@/components/management/TestCom.vue";

const router = createRouter({
    history : createWebHistory(),
    routes : [ // path별 component를 추가한다
        { 
            path: "/", 
            name : "home", 
            component : Home,
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
        {
            path: "/management",
            name : "management",
            component : Management,
            children : [
                {
                    path: "preset",
                    component: Preset,
                },
                {
                    path: "test",
                    component: Test,
                }
            ],
        },
    ],
});

export default router;
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
// import axios from 'axios'

// router 사용하겠다고 추가해줬음! (.use(router))
createApp(App).use(router).mount('#app')

/* Axios 전역 설정*/
// createApp.prototype.$axios = axios;
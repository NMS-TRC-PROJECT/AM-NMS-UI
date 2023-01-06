<template>
  <div class="container">
    <div class="flex-container">
      <dash-job></dash-job>
      <dash-server></dash-server>
    </div>
    <dash-log></dash-log>
  </div>
</template>

<script>
import DashServer from '@/components/dashboard/DashServer.vue'
import DashLog from '@/components/dashboard/DashLog.vue'
import DashJob from '@/components/dashboard/DashJob.vue'

export default {
  name: 'HomeCom',
  components:{
    DashServer,
    DashLog,
    DashJob,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.flex-container {
  display: flex;
}
</style>
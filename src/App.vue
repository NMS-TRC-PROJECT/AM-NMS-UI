<template>
  <div id="app">
    <Header></Header>
    <NavBar></NavBar>
    <div class="wrap">
      <!-- <div v-if="$route.params.matched('/management')">
        <SubMenu></SubMenu>
      </div> -->
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from './components/layouts/HeaderLayout.vue'
import NavBar from './components/layouts/NavBarLayout.vue'
// import Footer from './components/layouts/FooterLayout.vue'
// import SubMenu from './components/layouts/MenuLayout.vue'

export default {
  name: 'App',
  components: {
    Header,
    NavBar,
    // Footer,
    // SubMenu,
  }
}
</script>

<style lang="scss">
.wrap {
  display: flex;
  padding : 20px;
  // height: auto;
  // min-height: 100%;
}
.content {
  width: 100%;
  margin:auto;
}
</style>

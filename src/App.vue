<template>
  <div id="app">
    <Header></Header>
    <NavBar></NavBar>
    <div class="wrap">
      <SubMenu></SubMenu>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/layouts/HeaderLayout.vue'
import NavBar from './components/layouts/NavBarLayout.vue'
import SubMenu from './components/layouts/MenuLayout.vue'
// import Content from './components/layouts/ContentLayout.vue'

export default {
  name: 'App',
  components: {
    Header,
    NavBar,
    SubMenu,
    // Content,
  }
}
</script>

<style lang="scss">
.wrap {
  display: flex;
  padding : 20px;
}
.content {
  width: 80%;
  margin:auto;
}
</style>

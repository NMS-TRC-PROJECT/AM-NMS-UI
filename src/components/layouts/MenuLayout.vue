<template>
  <div class="title">Menu</div>
  <div class="subMenu">
    <router-link to="/management/preset"><div class="menu-line">Presets</div></router-link>
    <router-link to="/management/test"><div class="menu-line">Test</div></router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div{
    flex: 1;
    padding: 10px;
    text-align: left;
}
.title{
  font-size: 23px;
  padding-left: 20px;
}
</style>
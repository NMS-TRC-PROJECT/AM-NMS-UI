<template>
    <div class="wrap">
        <div class="management-menu">
            <Menu></Menu>
        </div>
        <div class="management-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Menu from "@/components/layouts/MenuLayout.vue";

export default {
    name: 'managementCom',
    components: {
        Menu,
    },

    
}
</script>

<style scoped>
.management-menu {
   width: 30%;
}
.management-content{
    width: 100%;
}
</style>
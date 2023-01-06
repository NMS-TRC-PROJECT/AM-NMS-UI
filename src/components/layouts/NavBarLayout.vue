<template>
    <div class="navbar">
        <router-link to="/" id="dashboard" class="menu">
            <span>Dashboard</span>
        </router-link>
        <router-link to="/server" id="server" class="menu">
            <span>Server</span>
        </router-link>
        <router-link to="/transcoder" id="transcoder" class="menu">
            <span>Transcoder</span>
        </router-link>
        <router-link to="/management/preset" id="management" class="menu">
            <span>Management</span>
        </router-link>
    </div>
</template>

<script>
export default {
    method: {
        // getActiveClass: function(menuId) {
        //     if([this.])
        // }
    }
}
</script>

<style scoped>
.navbar{
    text-align: left;
    position: sticky;
    padding: 5px 10px;
    border-bottom: 1px solid #e6e6e6;
}
.menu {
    padding: 5px;
    color: black;
    margin-right: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.menu:hover{
    background-color: #e6e6e6;
    color: white;
}
</style>
<template>
    <div class="navbar">
        <router-link to="/" class="menu">
            <span>Dashboard</span>
        </router-link>
        <router-link to="/server" class="menu">
            <span>Server</span>
        </router-link>
        <router-link to="/transcoder" class="menu">
            <span>Transcoder</span>
        </router-link>
    </div>
</template>

<script>
export default {

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
<style scoped lang="scss">
    @import './navbar.scss';
</style>

<template>
<div class="container">
    <div class="nav">
    <div class="test">
        <router-link to="/profilePage">ProfilePage</router-link>
    <router-link to="/postpage">Postimet</router-link>
    </div>
    </div>
    <router-view/>
</div>
</template>


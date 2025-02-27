<script setup>
import Navbar from '@/layout/AppNavbar.vue';
</script>
<template>
    <div>
        <Navbar />
        <router-view />
    </div>
</template>
<style lang="scss">
body {
  margin: 0px;
}
</style>

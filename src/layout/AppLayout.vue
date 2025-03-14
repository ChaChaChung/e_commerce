<script setup>
import Navbar from '@/layout/AppNavbar.vue';
import Footer from '@/layout/AppFooter.vue';
</script>
<template>
    <div>
        <Navbar />
        <router-view />
        <Footer />
    </div>
</template>
<style lang="scss">
body {
  margin: 0px;
}
</style>

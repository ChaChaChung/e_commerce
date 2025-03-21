<template>
  <div class="home">
    <HomeSite/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeSite from '@/components/HomeSite.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeSite,
  },
});
</script>

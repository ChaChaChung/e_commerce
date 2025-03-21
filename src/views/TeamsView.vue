<template>
  <div class="home">
    <TeamList/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TeamList from '@/components/TeamList.vue';

export default defineComponent({
  name: 'TeamsView',
  components: {
    TeamList,
  },
});
</script>

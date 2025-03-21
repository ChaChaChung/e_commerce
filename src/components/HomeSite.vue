<template>
  <div class="mt-3 mb-3">
    <Loading loader="dots" color="#002061" :active="isLoading" />
    <div class="offset-1 row">
      <div class="col-12 col-sm-2 mt-2" v-for="item in eventsData" :key="item.idEvent">
        <div>
          {{ item.awayTeamZh }}
          <img :src="require(`@/assets/kbo_logos/${item.awayTeamLogo}`)" alt="logo" height="50"/>
          vs
          {{ item.homeTeamZh }}
          <img :src="require(`@/assets/kbo_logos/${item.homeTeamLogo}`)" alt="logo" height="50"/>
        </div>
        <div>
          {{ item.venueZh }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { getLeagueEventsData } from '../api/test';

const eventsData = ref(null);
const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;
  try {
    const todaysDate = new Date();
    const initDate = todaysDate.toISOString().slice(0, 10).replace(/-/g, '');
    console.log('🚀 ~ onMounted ~ initDate:', initDate);

    const testResponse = await getLeagueEventsData('20250322');
    eventsData.value = testResponse;
    console.log('testData.value: ', eventsData.value);
  } catch (error) {
    console.error('API Error:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>

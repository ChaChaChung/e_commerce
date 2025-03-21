<template>
  <div class="row mt-3 mb-3" style="padding: 0 50px;">
    <Loading loader="dots" color="#002061" :active="isLoading" />
    <div class="col-12 col-sm-6 mt-2" v-for="item in testData" :key="item.team_id">
      <a-card
        :bordered="false"
      >
        <div
          class="d-flex"
          style="justify-content: space-between; align-items: center"
        >
          <div>{{ item.team_name }} ({{ item.team_name_kr }})</div>
          <img :src="require(`@/assets/kbo_logos/${item.team_logo}`)" alt="logo" height="50"/>
        </div>
        <div
          style="text-align: left; justify-content: space-between;"
        >
          <div>主場：{{ item.team_stadium }}</div>
          <div>城市：{{ item.team_location }}</div>
          <div>創立年分：{{ item.team_established }}</div>
          <div>官方網頁：
            <a :href="`https://${item.team_site}`" target="_blank" style="color: #000; text-decoration: unset;">
              {{ item.team_site }}
            </a>
          </div>
          <button @click="getEvents(item.team_id)">取得</button>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { getTestData, getEventsData } from '../api/test';

const testData = ref(null);
const eventsData = ref(null);
const isLoading = ref(false);

const getEvents = (teamId) => {
  isLoading.value = true;
  try {
    const testResponse = getEventsData(teamId);
    eventsData.value = testResponse;
    console.log('eventsData.value: ', eventsData.value);
  } catch (error) {
    console.error('API Error:', error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  isLoading.value = true;
  try {
    const testResponse = await getTestData();
    testData.value = testResponse;
    console.log('testData.value: ', testData.value);
  } catch (error) {
    console.error('API Error:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="mt-3 mb-3">
    <Loading loader="dots" color="#002061" :active="isLoading" />
    <button @click="changeDate(-1)">〈</button>
    <span>
      {{ initDate }}
    </span>
    <button @click="changeDate(1)">〉</button>
    <div class="d-flex justify-content-center card-container">
      <div class="team mt-2" v-for="item in eventsData" :key="item.idEvent">
        <a-card
          :bordered="false"
          :bodyStyle="bodyStyle"
        >
          <div class="d-flex">
            <div class="team">
              <img :src="require(`@/assets/kbo_logos/${item.awayTeamLogo}`)" alt="logo" width="25"/>
              {{ item.awayTeamZh }}
            </div>
            vs
            <div class="team">
              <img :src="require(`@/assets/kbo_logos/${item.homeTeamLogo}`)" alt="logo" width="25"/>
              {{ item.homeTeamZh }}
            </div>
          </div>
          <div>
            @{{ item.venueZh }}
          </div>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { getLeagueEventsData, getLeagueLastEventsData } from '../api/test';

const bodyStyle = ref({
  justifyContent: 'center',
  display: 'grid',
  width: '200px',
});
const eventsData = ref(null);
const isLoading = ref(false);

const todaysDate = new Date();
const initDate = ref(todaysDate.toISOString().slice(0, 10));

const changeDate = async (count) => {
  const newDate = new Date(initDate.value);
  newDate.setDate(newDate.getDate() + count);
  initDate.value = newDate.toISOString().slice(0, 10);

  // 等待 API 返回結果
  isLoading.value = true;
  try {
    if (new Date(initDate.value) < todaysDate) {
      eventsData.value = await getLeagueLastEventsData(initDate.value.replace(/-/g, ''));
    } else {
      eventsData.value = await getLeagueEventsData(initDate.value.replace(/-/g, ''));
    }
  } catch (error) {
    console.error('API Error:', error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  isLoading.value = true;
  try {
    // const testResponse = await getLeagueEventsData(initDate.value.replace(/-/g, ''));
    const testResponse = await getLeagueEventsData('20250325');
    eventsData.value = testResponse;
    console.log('testData.value: ', eventsData.value);
  } catch (error) {
    console.error('API Error:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped lang="scss">
.team {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-container {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* 自動填充並調整卡片大小 */
  padding: 10px;
}

.ant-card-body {
  justify-content: center;
  display: grid;
  width: 100%; /* 保證卡片寬度自適應 */
}

@media (max-width: 768px) {
  .card-container {
    grid-template-columns: 1fr; /* 在小螢幕上每行顯示一張卡片 */
  }
  .ant-card-body {
    width: 100%; /* 確保在小螢幕上卡片不會超出寬度 */
  }
}

@media (max-width: 480px) {
  .team img {
    width: 20px; /* 在超小螢幕上縮小圖片 */
  }
  .team {
    font-size: 12px; /* 調整文字大小 */
  }
}
</style>

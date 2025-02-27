<template>
  <div>
    產品列表
  </div>
  <div v-if="testData">
    <p>姓名：{{ testData.name }}</p>
    <p>年齡：{{ testData.age }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import getTestData from '../api/test';

const testData = ref(null);

onMounted(async () => {
  try {
    const testResponse = await getTestData();
    testData.value = testResponse;
    console.log('testData.value: ', testData.value);
  } catch (error) {
    console.error('API Error:', error);
  }
});
</script>

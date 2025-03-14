<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const $route = useRoute();

const model = ref([
  { name: '首頁', path: '/' },
  { name: '隊伍', path: '/teams' },
  // { name: '我的訂單', path: '/order' },
  // { name: '聯絡我們', path: '/about' },
]);
</script>

<template>
  <nav class="nav-bar">
    <div class="d-flex flex-row align-items-center">
      <img rel="icon" alt="logo" src="@/assets/logo_h.png" height="50px" />
      <ul>
        <li v-for="item in model" :key="item.path">
          <router-link :to="item.path" :class="{ active: $route.path === item.path }">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav-bar {
  background-color: #ffffff;
  padding: 12px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid #ddd;
}

.nav-bar ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-bar li {
  margin: 0 15px;
}

.nav-bar a {
  display: block;
  padding: 10px 15px;
  color: #333;
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  transition: background 0.3s, color 0.3s;
}

.nav-bar a:hover {
  background-color: #e9ecef;
  color: #40648a;
}

.nav-bar a.active {
  background-color: #002061;
  color: #ffffff;
  font-weight: bold;
}
</style>

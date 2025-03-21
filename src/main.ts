import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import Antd from 'ant-design-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(Antd)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .mount('#app');

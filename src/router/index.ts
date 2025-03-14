import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import HomeView from '../views/HomeView.vue';
import TeamsView from '../views/TeamsView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue'),
      },
      {
        path: '/teams',
        name: 'teams',
        component: TeamsView,
      },
    ],
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

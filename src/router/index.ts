import { createRouter, createWebHistory } from 'vue-router';
import { RouteNames } from '../enums/RouteNames';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/home',
      name: RouteNames.home,
      component: HomeView
    }
  ]
});

export default router;

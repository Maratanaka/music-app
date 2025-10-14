import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '@/views/TabsPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: TabsPage,
    children: [
      { path: 'home', component: () => import('@/views/HomeView.vue') },
      { path: 'radio', component: () => import('@/views/RadioView.vue') },
      { path: 'library', component: () => import('@/views/LibraryView.vue') },
      { path: 'search', component: () => import('@/views/SearchView.vue') },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

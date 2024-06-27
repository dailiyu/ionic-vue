import { Home } from '@/views/HomePage.vue';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '@/components/Tabs.vue';
import Home from '@/views/Home.vue';
import Settings from '@/views/Settings.vue';
import Profile from '@/views/Profile.vue';

const routes = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: Home
      },
      {
        path: 'settings',
        component: Settings
      },
      {
        path: 'profile',
        component: Profile
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import CallbackDiscordView from '../views/CallbackDiscordView.vue';
import HomeView from '../views/HomeView.vue';
import BotoneraView from '../views/BotoneraView.vue';
import YouTubeView from '../views/BuscadorYoutube.vue';
import PrivateLayout from '../layouts/PrivateLayout.vue';
import BaseLayout from '../layouts/BaseLayout.vue';
import { useAuthStore } from '../stores/authStore';

const routes = [
  {
    path: '/',
    component: PrivateLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'Home', component: HomeView },
      { path: 'botonera', name: 'Botonera', component: BotoneraView },
      { path: 'youtube', name: 'YouTube', component: YouTubeView },
    ],
  },
  {
    path: '/',
    component: BaseLayout,
    children: [
      { path: '/login', name: 'Login', component: LoginView },
      { path: '/callback', name: 'Auth', component: CallbackDiscordView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Guard global
router.beforeEach((to, _, next) => {
  const auth = useAuthStore();
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;

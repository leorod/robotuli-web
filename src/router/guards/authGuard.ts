import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '../../stores/authStore';

export function authGuard(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const auth = useAuthStore();
  console.log("entro a la guarda")
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    console.log("entro a la guarda -> login")
    next('/login');
  } else {
    console.log("entro a la guarda -> path")
    next();
  }
}

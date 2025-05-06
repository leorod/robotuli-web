<template>
  <div class="container mt-5">
    <p>Procesando autenticación...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authStore';
import type { AuthService } from '../services/AuthService';

export default defineComponent({
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const authService = inject<AuthService>('authService');
    if (!authService) throw new Error('AuthService not provided');

    onMounted(async () => {
      const url = new URL(window.location.href);
      const code = url.searchParams.get('code');

      if (code) {
        try {
          const token = await authService.exchangeCodeForToken(code);
          const user = await authService.fetchDiscordUser(token);

          authStore.login(token, user);
          router.push('/');
        } catch (error) {
          console.error('Error durante login:', error);
          router.push('/login');
        }
      } else {
        router.push('/login');
      }
    });
  },
});
</script>

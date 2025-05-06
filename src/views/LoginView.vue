<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center bg-light">
    <div class="card shadow p-4" style="max-width: 400px; width: 100%;">
      <div class="text-center mb-4">
        <img src="https://cdn.worldvectorlogo.com/logos/discord-logo-color-wordmark-1.svg" alt="Discord Logo" class="img-fluid" style="height: 60px;">
      </div>
      <h2 class="text-center text-primary mb-4">¡Bienvenido!</h2>
      <p class="text-center text-muted mb-4">Inicia sesión con tu cuenta de Discord para continuar.</p>
      <button class="btn btn-primary w-100" @click="login">
        <i class="bi bi-discord"></i> Iniciar sesión con Discord
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import type { AuthService } from '../services/AuthService';

export default defineComponent({
  setup() {
    const authService = inject<AuthService>('authService');
    if (!authService) throw new Error('AuthService not provided');

    const login = () => {
      window.location.href = authService.getOAuthUrl();
    };

    return { login };
  },
});
</script>

<style scoped>
.card {
  border-radius: 1rem;
}
</style>

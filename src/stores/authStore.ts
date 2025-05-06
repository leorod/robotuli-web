import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('discord_token') as string | null,
    user: JSON.parse(localStorage.getItem('discord_user') || 'null'),
  }),
  getters: {
    isLoggedIn(state): boolean {
      return !!state.token;
    },
  },
  actions: {
    login(token: string, user: any) {
      this.token = token;
      this.user = user;
      localStorage.setItem('discord_token', token);
      localStorage.setItem('discord_user', JSON.stringify(user));
    },
    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem('discord_token');
      localStorage.removeItem('discord_user');
    },
  },
});

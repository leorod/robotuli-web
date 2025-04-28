<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-3">
    <div class="container-fluid">
      <!-- Logo -->
<a class="navbar-brand d-flex align-items-center" href="#">
  <svg width="140" height="40" viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="60" height="60" rx="15" fill="#5865F2" />
    <circle cx="30" cy="30" r="5" fill="white" />
    <circle cx="50" cy="30" r="5" fill="white" />
    <rect x="25" y="50" width="30" height="5" rx="2.5" fill="white" />
    <path d="M20 5 L25 15" stroke="#5865F2" stroke-width="3" />
    <path d="M60 5 L55 15" stroke="#5865F2" stroke-width="3" />
    <text x="85" y="50" font-family="Arial, sans-serif" font-size="32" fill="#FFFFFF">Robotuli</text>
  </svg>
</a>


      <!-- Botón hamburguesa -->
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Contenido de la Navbar -->
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav align-items-center">
          <li v-for="item in menuItems" :key="item.name" class="nav-item mx-2">
            <a
              class="nav-link menu-option"
              :href="item.path"
              @click.prevent="navigate(item.path)"
            >
              {{ item.label }}
            </a>
          </li>

          <!-- Avatar decorativo -->
          <li v-if="user" class="nav-item ms-4">
            <img
              :src="avatarUrl"
              alt="Avatar"
              class="rounded-circle border border-light user-avatar"
              width="50"
              height="50"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authStore';

export default defineComponent({
  props: {
    menuItems: {
      type: Array as () => Array<{ name: string; label: string; path: string }>,
      required: true,
    },
  },
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const user = computed(() => authStore.user);

    const avatarUrl = computed(() => {
      if (!user.value) return '';
      return `https://cdn.discordapp.com/avatars/${user.value.id}/${user.value.avatar}.png`;
    });

    const navigate = (path: string) => {
      if (path === '/logout') {
        authStore.logout();
        router.push('/login');
      } else {
        router.push(path);
      }
    };

    return { user, avatarUrl, navigate };
  },
});
</script>

<style scoped>
/* Hover mejorado para opciones */
.menu-option {
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s, color 0.3s;
}

.menu-option:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

/* Avatar estilizado */
.user-avatar {
  object-fit: cover;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
}

.user-avatar:hover {
  transform: scale(1.05);
}

/* Ajustes Mobile */
@media (max-width: 991px) {
  .navbar-nav {
    background-color: #0d6efd;
    border-radius: 0.5rem;
    padding: 1rem;
    text-align: center;
  }

  .nav-item {
    margin-bottom: 1rem;
  }

  .user-avatar {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}
</style>

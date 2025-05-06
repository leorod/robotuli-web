<template>
    <div class="min-vh-100 bg-dark text-light">
      <AppNavbar :menuItems="menuItems" />
      <div class="container mt-4">
        <router-view />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import AppNavbar from '../components/Navbar.vue';
  
  export default defineComponent({
    components: { AppNavbar },
    setup() {
      const menuItems = [
        { name: 'Botonera', label: 'Botonera', path: '/botonera' },
        { name: 'YouTube', label: 'YouTube', path: '/youtube' },
        { name: 'Logout', label: 'Cerrar sesión', path: '/logout' },
      ];
      return { menuItems };
    },
  });
  </script>
  
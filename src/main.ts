import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { AuthService } from './services/AuthService';

// CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// JS de Bootstrap
import 'bootstrap';

const app = createApp(App);

const authService = new AuthService();
app.provide('authService', authService);

app.use(createPinia());
app.use(router);

app.mount('#app');

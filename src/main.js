// External dependencies

import { createApp } from 'vue';
import { registerSW } from 'virtual:pwa-register';

// Local dependencies
import App from './App.vue'
import router from './router';

createApp(App).use(router).mount('#app')

// Service Worker registration
registerSW();

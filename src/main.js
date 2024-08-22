import { createApp } from 'vue'
import  store from './store';
import App from './App.vue'

import router from './router';  // Import the router
import './assets/styles/index.scss';  // Import global styles 
// Create the Vue app instance and attach it to the DOM element with id 'app'

createApp(App)
  .use(store)
  .use(router)  // Tell Vue to use the router
  .mount('#app');
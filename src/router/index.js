import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@pages/HomePage.vue';  // Adjust this path to your HomePage.vue file
import MyTabs from '@pages/MyTabs.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/mytabs',
    name: 'MyTabs',
    component: MyTabs,
  }
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),  // Use HTML5 history mode
  routes,
});

export default router;

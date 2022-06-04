import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"

import App from './App.vue'
import Home from './views/Home.vue'
import Docs from './views/Docs.vue'
import Lost from './views/Lost.vue'

const router = createRouter({
  history: createWebHistory(), 
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/docs',
      name: 'Docs',
      component: Docs
    },
  ]
})

createApp(App).use(router).mount('#app')
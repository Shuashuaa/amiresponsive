import { createRouter, createWebHistory } from 'vue-router'
import MainComp from '../components/MainComp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainComp
    }
  ]
})

export default router

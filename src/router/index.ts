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

router.beforeEach((to, from, next) => {
  if(to.path !== '/'){
    if(to.path == '/'){
      next('/')
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import { DETAILS, HOME, POKE } from '../services/routes'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: HOME,
      component: HomeView
    },
    {
      path: '/component',
      name: 'component',
      component: () => import('../views/ComponentView.vue')
    },
    {
      path: '/apicomponent',
      name: 'apicomponent',
      component: () => import('../views/ApiComponent.vue')
    },
    {
      path: '/poke/:pokemonsName',
      name: POKE,
      component: () => import('../views/CardVue.vue')
    },
  
   
  ]
})

export default router

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
      path: '/apicomponent',
      name: 'apicomponent',
      component: () => import('../views/ApiComponent.vue')
    },
    // {
    //   path: '/poke/:pokemonsName',
    //   name: POKE,
    //   component: () => import('../views/CardVue.vue')
    // },
    // {
    //   path: '/prueba',
    //   name: "prueba",
    //   component: () => import('../views/Prueba.vue')
    // },
    {
      path: '/poke/:pokemonsName',
      name: POKE,
      component: () => import('../views/CardFnB.vue')
    },
  
   
  ]
})

export default router

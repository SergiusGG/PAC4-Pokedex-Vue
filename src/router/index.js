import { createRouter, createWebHistory } from "vue-router";
import { HOME, POKE, POKEHOME } from "../services/routes";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: HOME,
      component: HomeView,
    },
    {
      path: "/apicomponent",
      name: "apicomponent",
      component: () => import("../views/ApiComponent.vue"),
    },
    {
      path: "/poke/:pokemonsName",
      name: POKE,
      component: () => import("../views/CardFnB.vue"),
    },
    {
      path: "/pokeHome/:pokemonsName",
      name: POKEHOME,
      component: () => import("../views/HomeCardFnB.vue"),
    },
  ],
});

export default router;

import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/views/ProductsView.vue"),
    },
    {
      path: "/products/:id",
      name: "products",
      component: () => import("@/views/ProductsDetailView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/ErrorView.vue"),
    },
  ],
});

export default router;

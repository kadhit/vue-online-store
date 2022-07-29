import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("../views/HomeView.vue");
const ShopView = () => import("../views/ShopView.vue");

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/shop", name: "Shop", component: ShopView },
  { path: "/product/:id", name: "Product" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;

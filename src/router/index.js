/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("../views/HomeView.vue");
const ShopView = () => import("../views/ShopView.vue");
const ContactView = () => import("../views/ContactView.vue");
const NotFoundComponent = () => import("../components/NotFoundComponent.vue");

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/shop", name: "Shop", component: ShopView },
  { path: "/contact-us", name: "Contact Us", component: ContactView },
  { path: "/:pathMatch(.*)*", name: "Not Found", component: NotFoundComponent },
  { path: "/product/:id", name: "Product" },
];

const router = createRouter({
  history: createWebHistory("/vue-online-store/"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ el: to.hash, behavior: "smooth", top: 65 });
        }, 1000);
      });
    }
    return { top: 0 };
  },
});

export default router;

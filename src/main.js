import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import { routes } from "./router/routes";

import "./assets/index.css";

const router = createRouter({
  history: createWebHashHistory,
  routes,
});

createApp(App).mount("#app");

import { createRouter, createWebHistory } from "vue-router";

import home from "../pages/home.vue";
import shop from "../pages/shop.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/shop",
      name: "shop",
      component: shop,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../pages/not-found.vue"),
    },
  ],
});

export default router;

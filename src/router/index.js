import { createRouter, createWebHashHistory } from "vue-router";
import gameplay from "../views/gameplay.vue";

const routes = [
  {
    path: "/",
    name: "gameplay",
    component: gameplay,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

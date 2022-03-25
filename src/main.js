import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./_theme/main.css";

createApp(App).use(router).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/custom.scss";
import "./assets/css/media.scss";
import "./assets/js/custom.js";
import axios from "axios";
import router from "./router";
import store from "./store";
axios.defaults.baseURL = "https://backend.qiyas.co/api";

const app = createApp(App).use(store).use(router);
app.mount("#app");

// "homepage": "https://github.com/Taha-Abdelmonim/e-commerce/",

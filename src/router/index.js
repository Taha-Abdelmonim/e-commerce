import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";
import HomeView from "@/views/HomeView.vue";
import Book from "@/views/Book.vue";
import Cart from "@/views/Cart.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Account from "@/views/Account.vue";
import NotFound from "@/components/NotFound.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/book/:id",
    name: "Book",
    component: Book,
    props: true,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/account/:id",
    name: "Account",
    component: Account,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  // console.log(from);
  // console.log(to);
  if (to.name === "Register") {
    next();
    // store.state.Register.user.status ? next({ name: "Login" }) :
  } else {
    next();
  }
});
export default router;

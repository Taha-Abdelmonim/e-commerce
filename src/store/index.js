import { createStore } from "vuex";
// import axios from "axios";
import Global from "./modules/Global";
import Books from "./modules/Books";
import Cart from "./modules/Cart";
import Register from "./modules/Register";
import Login from "./modules/Login";
import Rates from "./modules/Rates";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Books,
    Cart,
    Register,
    Login,
    Rates,
    Global,
  },
});

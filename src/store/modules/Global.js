import router from "../../router/index";
export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {
    redirectTo(state, payload) {
      router.push({ name: payload });
    },
  },
  actions: {},
};

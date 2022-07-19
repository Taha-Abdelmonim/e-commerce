import axios from "axios";
export default {
  namespaced: true,
  state: {
    rates: false,
  },
  mutations: {
    getRates(state, payload) {
      state.rates = payload;
    },
  },
  actions: {
    async GET_RATES({ commit }) {
      await axios.get(`/rates`).then((res) => {
        // console.log(res);
        commit("getRates", res.data.rates);
      });
    },
  },
};

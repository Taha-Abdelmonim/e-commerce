import axios from "axios";
export default {
  namespaced: true,
  state: {
    imageSliders: [],
    cartIDLS: [],
    cartLS: [],
    dataCart: [],
    lengthDLS: 0,
    totalPriceBook: 0,
  },
  mutations: {
    //  get Slider in book page
    getImgSliders(state, payload) {
      state.imageSliders = payload;
    },
    // get length data from localStorage
    lengthDLSFun(state) {
      if (localStorage.getItem("cartId")) {
        state.lengthDLS = JSON.parse(localStorage.getItem("cartId")).length;
      }
    },
    // Set Book Id to LocalStorage and Qty
    setCartIdToLS(state, payload) {
      let cartsID = JSON.parse(localStorage.getItem("cartId")),
        duplicate = null;
      if (cartsID) {
        [duplicate] = cartsID.filter((ele, i) => ele.id === payload.id);
        if (duplicate) {
          cartsID.map((ele, i) => {
            if (ele.id === duplicate.id) {
              cartsID[i] = { id: payload.id, qty: payload.qty };
            }
          });
        } else {
          cartsID.push({ id: payload.id, qty: payload.qty });
        }
      } else {
        cartsID = [{ id: payload.id, qty: payload.qty }];
      }
      localStorage.setItem("cartId", JSON.stringify(cartsID));
    },
    // get Total Price
    calcTotal(state) {
      state.totalPriceBook = 0;
      state.dataCart.map((eleDC, i) => {
        state.cartLS.map((eleLS) => {
          if (eleDC.id === eleLS.id) {
            state.totalPriceBook += eleLS.qty * eleDC.price;
          }
        });
      });
    },
    // decrease and increase Qty in book page and LS
    IDQty(state, payload) {
      let cartsID = JSON.parse(localStorage.getItem("cartId"));
      if (cartsID) {
        cartsID.map((ele, i) => {
          if (ele.id === payload.id) {
            let qty = ele.qty;
            if (payload.type == "decrease" && ele.qty > 1) {
              qty--;
            }
            if (payload.type == "increase" && ele.qty > 0 && ele.qty < 50) {
              qty++;
            }
            cartsID[i] = { id: payload.id, qty: qty };
            state.cartLS = cartsID;
            localStorage.setItem("cartId", JSON.stringify(cartsID));
          }
        });
      }
    },
    // remove Item from LocalStorage
    removeItemLS(state, id) {
      let cartsID = JSON.parse(localStorage.getItem("cartId"));
      if (cartsID) {
        cartsID = cartsID.filter((ele) => ele.id !== id);
      } else {
        console.log("Not Found Item");
      }
      localStorage.setItem("cartId", JSON.stringify(cartsID));
    },
    // remove LocalStorage
    removeLS(state) {
      localStorage.clear();
      state.dataCart = [];
      state.cartLS = [];
      state.cartIDLS = [];
      state.lengthDLS = 0;
    },
  },
  actions: {
    //  get Slider in book page
    async GET_IMG_SLIDERS({ commit }) {
      return await axios.get(`/sliders`).then((res) => {
        commit("getImgSliders", res.data.data);
      });
    },
    // get length data from localStorage
    LENGTH_DLS({ commit }) {
      commit("lengthDLSFun");
    },
    // Set Book Id to LocalStorage and Qty
    async SET_CART_ID_TO_LS({ commit, dispatch }, payload) {
      await commit("setCartIdToLS", { id: payload.id, qty: payload.qty });
      await dispatch("GET_CATEGORIES_FROM_LS");
      // await dispatch("CALC_TOTAL");
      await commit("lengthDLSFun");
    },
    // get Total Price
    CALC_TOTAL({ commit }) {
      return commit("calcTotal");
    },
    // Get id book select from LS and get Book selected form user from api
    async GET_CATEGORIES_FROM_LS({ commit, state, dispatch }) {
      let cartsID = await JSON.parse(localStorage.getItem("cartId"));
      // state.cartLS = cartsID;
      if (cartsID) {
        state.cartIDLS = [];
        await cartsID.map((ele) => {
          state.cartIDLS.push(ele.id);
        });
        state.cartIDLS = [...new Set(state.cartIDLS)];
        await axios
          .post(`/cart`, {
            items: state.cartIDLS,
          })
          .then((res) => {
            state.dataCart = [];
            state.dataCart = res.data.books;
            state.cartLS = [];
            cartsID.map((ele) => {
              state.cartLS.push({ id: ele.id, qty: ele.qty });
            });
            if (state.cartIDLS.length >= 0) {
              dispatch("Books/GET_INDEX_BOOK", { cartIDLS: state.cartIDLS }, { root: true });
            }
          });
      }
      await commit("calcTotal");
      await commit("lengthDLSFun");
    },

    // decrease and increase Qty in book page and LS
    ID_QTY({ commit, dispatch }, payload) {
      commit("IDQty", { id: payload.id, type: payload.type });
      dispatch("GET_CATEGORIES_FROM_LS");
      commit("calcTotal");
    },
    // remove Item from LocalStorage
    async REMOVE_ITEM_LS({ commit, dispatch }, id) {
      await commit("removeItemLS", id);
      await dispatch("GET_CATEGORIES_FROM_LS");
      commit("lengthDLSFun");
    },
    // remove LocalStorage
    async REMOVE_LS({ commit }) {
      await commit("removeLS");
      await commit("calcTotal");
    },
  },
};

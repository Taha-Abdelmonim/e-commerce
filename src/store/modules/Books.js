import axios from "axios";
export default {
  namespaced: true,
  state: {
    books: [],
    categories: [],
    book: [],
    userId: null,
    bookIndex: -1,
  },
  getters: {},
  mutations: {
    getUserID(state, id) {
      state.userId = id;
    },
    getIsActive(state, { ele, cartIDLS }) {
      let storeBooks = [];
      if (ele === "books") {
        state.books.map((ele) => {
          cartIDLS.map((el) => {
            if (el === ele.id) {
              ele.isActive = true;
              storeBooks.push(ele);
            }
          });
          if (!ele.isActive) {
            storeBooks.push(ele);
          }
        });
        state.books = storeBooks;
      } else {
        state.categories.map((ele) => {
          cartIDLS.map((el) => {
            if (el === ele.id) {
              ele.isActive = true;
              storeBooks.push(ele);
            }
          });
          if (!ele.isActive) {
            storeBooks.push(ele);
          }
        });
        state.categories = storeBooks;
      }
    },
    //  get books from api
    getBooks(state, payload) {
      payload.data.map((ele) => {
        payload.cartIDLS.map((el) => {
          if (el === ele.id) {
            ele.isActive = true;
            state.books.push(ele);
          }
        });
        if (!ele.isActive) {
          state.books.push(ele);
        }
      });
    },
    //  get Categories from api
    getCategories(state, payload) {
      state.categories = [];
      payload.data.map((ele) => {
        payload.cartIDLS.map((el) => {
          if (el === ele.id) {
            ele.isActive = true;
            state.categories.push(ele);
          }
        });
        if (!ele.isActive) {
          state.categories.push(ele);
        }
      });
    },
    //  get book from api
    getBook(state, payload) {
      state.book = payload.data;
      state.userId = payload.id;
      if (payload.cartLS) {
        payload.cartLS.map((ele, i) => {
          if (parseInt(ele.id) === parseInt(payload.id)) {
            state.bookIndex = i;
          } else {
            state.bookIndex = -1;
          }
        });
      }
    },
    getIndexBook(state, cartLS) {
      if (cartLS) {
        for (let i = 0; i < cartLS.length; i++) {
          // console.log(parseInt(ele.id) === parseInt(state.userId));
          if (parseInt(cartLS[i]) === parseInt(state.userId)) {
            state.bookIndex = i;
          } else {
            state.bookIndex = -1;
          }
        }
      }
    },
  },
  actions: {
    // get books from api
    async GET_BOOKS({ commit, rootState }) {
      return await axios.get(`/books`).then((res) => {
        commit("getBooks", { data: res.data.books, cartIDLS: rootState.Cart.cartIDLS });
      });
    },
    // get Categories from api
    async GET_CATEGORIES({ commit, rootState }) {
      return await axios.get(`/books/category/2`).then((res) => {
        commit("getCategories", { data: res.data.books, cartIDLS: rootState.Cart.cartIDLS });
      });
    },
    // get book from api
    async GET_BOOK({ commit, rootState, dispatch }, payload) {
      // await dispatch("Cart/GET_CATEGORIES_FROM_LS", null, { root: true });

      if (rootState.Cart.cartLS.length > 0) {
        await axios.get(`/book/${payload}`).then((res) => {
          commit("getBook", { data: res.data.books, cartLS: rootState.Cart.cartLS, id: payload });
        });
      } else {
        await axios.get(`/book/${payload}`).then((res) => {
          commit("getBook", { data: res.data.books, id: payload });
        });
      }
    },
    GET_IS_ACTIVE({ commit, rootState }, { ele }) {
      commit("getIsActive", { ele, cartIDLS: rootState.Cart.cartIDLS });
    },
    async GET_INDEX_BOOK({ commit }, { cartIDLS }) {
      // console.log(cartIDLS);
      if (cartIDLS) {
        await commit("getIndexBook", cartIDLS);
      }
    },
  },
};

import axios from "axios";
export default {
  namespaced: true,
  state: {
    errorValidate: {},
  },
  mutations: {
    validateLogin(state, { email, password }) {
      state.errorValidate = {};
      let emailUser = email,
        regEmail = /\w+@\w+[.]\w+/gi,
        passwordUser = String(password),
        regPassword = /.{6,}/gi;
      if (!regEmail.test(emailUser)) {
        state.errorValidate.errorEmail = "ادخل بريد الكتروني صحيح";
      }
      if (!regPassword.test(passwordUser)) {
        state.errorValidate.errorPassword = "يجب ان لا تكون كلمة السر اصغر من 6 ارقام علا الاقل";
      }
      if (Object.keys(state.errorValidate).length > 0) {
        return false;
      } else {
        return true;
      }
    },
  },
  actions: {
    async VALIDATE_LOGIN({ commit, dispatch, state }, { email, password }) {
      await commit("validateLogin", { email, password });
      if (!Object.keys(state.errorValidate).length > 0) {
        dispatch("LOGIN", { email, password });
      }
    },
    async LOGIN({ commit, state }, { email, password }) {
      axios
        .post("/login", { email, password })
        .then(({ data }) => {
          if (data.status) {
            commit("Register/setUserData", data, { root: true });
            setTimeout(() => {
              commit("Global/redirectTo", "Home", { root: true });
            }, 1000);
          } else {
            state.errorValidate.errorPassEmail = data.message;
          }
        })
        .catch((err) => console.log(err));
    },
  },
};

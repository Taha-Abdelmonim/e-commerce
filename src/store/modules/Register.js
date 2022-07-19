import axios from "axios";
export default {
  namespaced: true,
  state: {
    errorValidate: {},
    user: null,
    message: null,
    userID: false,
  },
  mutations: {
    // Validate Values Input
    validateRegister(state, { name, phone, email, password, conPassword, selectValue }) {
      if (name || phone || email || password || conPassword || selectValue) {
        state.errorValidate = {};
        let phoneUser = phone,
          regPhone = /05\d{8}/,
          emailUser = email,
          regEmail = /\w+@\w+[.]\w+/gi,
          passwordUser = String(password),
          regPassword = /.{8,}/gi,
          conPasswordUser = String(conPassword);
        if (!regPhone.test(phoneUser) || phone.length > 10) {
          state.errorValidate.errorPhone = "من فضلك يجب ان يبدا رقم الهاتف ب 05 ويتكون من 8 ارقام";
        }
        if (!regEmail.test(emailUser)) {
          state.errorValidate.errorEmail = "ادخل بريد الكتروني صحيح";
        }
        if (!regPassword.test(passwordUser)) {
          state.errorValidate.errorPassword = "يجب ان لا تكون كلمة السر اصغر من 6 ارقام علا الاقل";
        }
        passwordUser === conPasswordUser ? "" : (state.errorValidate.errorPassConPass = "تاكيد كلمة السر غير متابقة لكلمة السر");
        if (Object.keys(state.errorValidate).length > 0) {
          return false;
        } else {
          return true;
        }
      } else {
        console.log("Not Valid");
      }
    },
    // Set User Data in LocalStorage On Load Page
    setUserDataOnReload(state) {
      const userData = localStorage.getItem("user-info");
      if (userData) {
        state.user = JSON.parse(userData);
        state.userID = state.user.user.id;
      }
    },
    // Set User Data in LocalStorage On Register
    setUserData(state, userData) {
      if (userData.status) {
        state.message = userData.message;
        state.user = userData;
        state.userID = state.user.user.id;
        localStorage.setItem("user-info", JSON.stringify(userData));
        axios.defaults.headers.common["Authorization"] = `Bearer ${userData.user.token}`;
        setTimeout(() => {
          state.message = null;
        }, 1000);
      }
    },
    // Clear All Data User On Logout
    clearUserData(state) {
      state.user = null;
      state.userID = false;
      localStorage.removeItem("user-info");
      axios.defaults.headers.common["Authorization"] = null;
    },
  },
  actions: {
    // Validate Values Input
    async VALIDATE_REGISTER({ commit, dispatch, state }, { name, phone, email, password, conPassword, selectValue }) {
      await commit("validateRegister", {
        name,
        phone,
        email,
        password,
        conPassword,
        selectValue,
      });
      if (!Object.keys(state.errorValidate).length > 0) {
        await dispatch("REGISTER", { name, phone, email, password, conPassword, selectValue });
      }
    },
    // Register User
    REGISTER({ commit, state }, userData) {
      return axios
        .post("/register", userData)
        .then(({ data }, res) => {
          if (data.status) {
            commit("setUserData", data);
            setTimeout(() => {
              commit("Global/redirectTo", "Home", { root: true });
            }, 1000);
          }
        })
        .catch((err) => (state.errorValidate.errorEmail = err.response.data.errors.email[0]));
    },
    // Logout User
    LOGOUT({ commit }) {
      commit("clearUserData");
      // commit("Global/redirectTo", "Login", { root: true });
    },
  },
};




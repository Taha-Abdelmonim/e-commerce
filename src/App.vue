<template>
  <div id="app">
    <nav class="header-top">
      <Header />
    </nav>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import Header from "./components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "AppComp",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.GET_CATEGORIES_FROM_LS();
    this.setUserDataOnReload();
    this.LENGTH_DLS();
    this.menuHeader();
  },
  // has-sticky
  methods: {
    ...mapMutations("Register", ["setUserDataOnReload"]),
    ...mapActions("Cart", ["LENGTH_DLS", "GET_CATEGORIES_FROM_LS", "CALC_TOTAL"]),
    menuHeader() {
      let header = document.querySelector(".header-top");
      let headerHeight = header.clientHeight;
      let menu = document.querySelectorAll(".mmenu-js");
      menu.forEach((ele) => {
        ele.style.top = `${headerHeight}px`;
      });
      let helperFun = (num) => {
        if (window.scrollY >= num) {
          if (document.body.classList.contains("has-sticky")) {
          } else {
            document.body.classList.add("has-sticky");
            menu.forEach((ele) => {
              ele.style.top = `${headerHeight - 26}px`;
            });
          }
        } else {
          document.body.classList.remove("has-sticky");
          menu.forEach((ele) => {
            ele.style.top = `${headerHeight}px`;
          });
        }
      };
      window.onscroll = () => {
        if (window.matchMedia("(max-width: 768px)").matches) {
          helperFun(50);
        } else {
          helperFun(300);
        }
      };
    },
  },
};
</script>

<style lang="scss">
/* <h1 style="font-family:'Segoe UI Regular';font-weight:normal;font-size:42px">AaBbCcDdEeFfGgHhŞşIıİi Example</h1>
<h1 style="font-family:'Segoe UI Italic';font-weight:normal;font-size:42px">AaBbCcDdEeFfGgHhŞşIıİi Example</h1>
<h1 style="font-family:'Segoe UI Bold';font-weight:normal;font-size:42px">AaBbCcDdEeFfGgHhŞşIıİi Example</h1>
<h1 style="font-family:'Segoe UI Bold Italic';font-weight:normal;font-size:42px">AaBbCcDdEeFfGgHhŞşIıİi Example</h1> */
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap");
* {
  font-family: "Cairo", sans-serif !important;
  font-weight: 500 !important;
}
.alert-error {
  color: #721c24 !important;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.slide-fade-enter-active {
  transition: all 0.6s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.success-login {
  text-align: center;
  font-weight: bold !important;
  background: #49d8d985;
  border-radius: 5px;
  padding: 15px;
  color: #383838;
}
</style>

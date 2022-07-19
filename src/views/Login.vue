<template>
  <div class="parent-login">
    <div class="page-content">
      <div class="holder">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-18 col-lg-12">
              <h2 class="text-center">تسجيل الدخول إلى حساب</h2>
              <div class="form-wrapper">
                <form action="#" @submit.prevent="VALIDATE_LOGIN({ email, password })">
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="البريد الإلكتروني" v-model="email" required />
                  </div>
                  <Transition name="bounce">
                    <div class="alert alert-error" role="alert" v-show="errorValidate.errorEmail">{{ errorValidate.errorEmail }}</div>
                  </Transition>
                  <div class="form-group">
                    <input type="password" class="form-control" placeholder="كلمه السر" v-model="password" required />
                  </div>
                  <Transition name="bounce">
                    <div class="alert alert-error" role="alert" v-if="errorValidate.errorPassword">
                      {{ errorValidate.errorPassword }}
                    </div>
                  </Transition>
                  <Transition name="bounce">
                    <div class="alert alert-error" role="alert" v-if="errorValidate.errorPassEmail">
                      {{ errorValidate.errorPassEmail }}
                    </div>
                  </Transition>
                  <div class="text-center">
                    <button class="btn">تسجيل الدخول</button>
                  </div>
                  <div class="text-center">
                    <router-link class="btn" to="/register">إنشاء حساب جديد</router-link>
                  </div>
                  <Transition name="slide-fade">
                    <p class="success-login" v-if="message" v-text="message"></p>
                  </Transition>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: null,
    };
  },
  computed: {
    ...mapState("Register", ["message"]),
    ...mapState("Login", ["errorValidate"]),
  },
  methods: {
    ...mapActions("Login", ["VALIDATE_LOGIN"]),
  },
};
</script>

<style lang="scss" scoped></style>

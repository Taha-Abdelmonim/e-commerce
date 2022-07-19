<template>
  <div class="parent-register">
    <div class="page-content">
      <div class="holder">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-18 col-lg-12">
              <h2 class="text-center">تسجيل حساب</h2>
              <div class="form-wrapper">
                <!-- <p>للوصول إلى قائمة الرغبات ودفتر العناوين وتفضيلات الاتصال الخاصة بك وللاستفادة من الخروج السريع ، قم بإنشاء حساب معنا الآن.</p> -->
                <form action="#" @submit.prevent="VALIDATE_REGISTER({ name, phone, email, password, conPassword, selectValue })">
                  <div>
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="الاسم كامل" v-model="name" required />
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="رقم الهاتف" v-model="phone" required />
                    </div>
                    <Transition name="bounce">
                      <div class="alert alert-error" role="alert" v-if="errorValidate.errorPhone">
                        {{ errorValidate.errorPhone }}
                      </div>
                    </Transition>
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
                    <div class="form-group">
                      <input type="password" class="form-control" placeholder="تأكيد كلمة السر" v-model="conPassword" required />
                    </div>
                    <Transition name="bounce">
                      <div class="alert alert-error" role="alert" v-if="errorValidate.errorPassConPass">{{ errorValidate.errorPassConPass }}</div>
                    </Transition>
                    <div class="form-group select-wrapper">
                      <select class="form-control" v-model="selectValue" id="books">
                        <option :value="option.id" v-for="option in optionsArray" :key="option.id">
                          {{ option.name }}
                        </option>
                      </select>
                      <label for="books" class="choose-book">اختار كتاب</label>
                    </div>
                    <div class="text-center">
                      <button class="btn">انشئ حساب</button>
                    </div>
                    <div class="text-center mt-2">
                      <router-link to="/login" class="btn">تسجيل الدخول</router-link>
                    </div>
                    <Transition name="slide-fade">
                      <p class="success-login" v-if="message" v-text="message"></p>
                    </Transition>
                  </div>
                </form>
                <!-- <div class="text-center">
                  <button class="btn" @click="CLEAR_USER_DATA">Click</button>
                </div> -->
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
  name: "Register",
  data() {
    return {
      name: "",
      phone: null,
      email: "",
      password: null,
      conPassword: null,
      selectValue: "",
      optionsArray: [
        { id: 1, name: "القدرة المعرفية" },
        { id: 2, name: "القدرة المعرفية" },
        { id: 3, name: "القدرة المعرفية" },
        { id: 4, name: "القدرة المعرفية" },
      ],
    };
  },
  computed: {
    ...mapState("Register", ["errorValidate", "message"]),
  },
  mounted() {
    this.showHideLabel();
  },
  methods: {
    // ...mapActions("Register", ["VALIDATE_REGISTER"]),
    ...mapActions("Register", ["VALIDATE_REGISTER", "CLEAR_USER_DATA"]),
    showHideLabel() {
      let selected = document.getElementById("books");
      selected.addEventListener("focus", (e) => {
        if (e.target.value) {
          selected.classList.add("active");
        } else {
          selected.classList.remove("active");
        }
      });
      selected.addEventListener("blur", (e) => {
        if (e.target.value) {
          selected.classList.add("active");
        } else {
          selected.classList.remove("active");
        }
      });
    },
  },
};
// 0512345678
</script>

<style lang="scss" scoped>
.choose-book {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s;
}
#books {
  z-index: 1;
  position: relative;
  background: transparent;
  margin-bottom: 10px;
  text-align: center;
  &:focus + label,
  &.active + label {
    opacity: 0;
  }
}
</style>

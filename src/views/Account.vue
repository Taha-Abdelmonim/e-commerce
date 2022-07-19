<template>
  <div class="container-fluid overcover" v-if="userID">
    <div class="container profile-box">
      <div class="top-cover">
        <div class="covwe-inn">
          <h1>بيانات المستغدم</h1>
          <div class="row no-margin">
            <div class="col-6 img-c">
              <img :src="user.user.image" alt="" />
            </div>
            <div class="col-10 tit-det">
              <input type="text" :value="user.user.name" />
              <input type="text" :value="user.user.email" />
              <input type="text" :value="user.user.phone" />
              <input type="text" :value="user.user.image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Account",
  computed: {
    ...mapState("Register", ["user", "userID"]),
  },
  mounted() {
    this.chickAccessThisPage();
  },
  methods: {
    ...mapMutations("Global", ["redirectTo"]),
    chickAccessThisPage() {
      if (!this.userID) {
        this.redirectTo("Login");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.overcover {
  padding: 15px;
  .profile-box {
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    padding: 0px;
    border-radius: 10px;
    .top-cover {
      border-left: 2px solid #ffffffa6;
      border-top: 2px solid #ffffffa6;
      border-radius: 10px;
      .covwe-inn {
        padding: 30px;
        h1 {
          margin-bottom: 0;
          text-align: center;
          color: #000;
          background-color: rgba(255, 255, 255, 0.02);
          -webkit-backdrop-filter: blur(9px);
          backdrop-filter: blur(9px);
          border-top: 1px solid rgba(255, 255, 255, 0.1333333333);
          border-left: 1px solid rgba(255, 255, 255, 0.1333333333);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1333333333);
          box-shadow: 0 0 15px rgb(0 0 0 / 13%);
          padding: 10px;
          border-radius: 8px;
          user-select: none;
        }
        .no-margin {
          margin: 0px;
          justify-content: space-between;
          align-items: center;
          .img-c {
            padding: 20px;
            order: 1;
            img {
              border-radius: 50%;
              background-color: #fff;
              padding: 5px;
              box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
              margin: auto;
              width: 260px;
              height: 260px;
              object-fit: cover;
            }
          }
          .tit-det {
            padding: 20px;
            padding-left: 10px;
            h2 {
              color: #fff;
              font-size: 2.2rem;
            }
            p {
              color: #fff;
              font-size: 0.9rem;
              text-indent: 20px;
            }
          }
        }
      }
    }
    input {
      box-shadow: 0 0 15px rgb(0 0 0 / 13%);
      padding: 10px;
      border-radius: 8px;
      color: #000;
      width: 100%;
      text-align: center;
      margin-bottom: 10px;
      transition: all 0.3s;
      border-color: #0000002e;
      border-top: none;
      border-left: none;
      &:focus {
        background: #f7f5f5;
      }
    }
  }
}
</style>

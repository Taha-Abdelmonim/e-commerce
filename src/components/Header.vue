<template>
  <!--header-->
  <header class="hdr-wrap">
    <!-- <div v-if="userID" v-text="userID"></div> -->
    <div class="hdr-content hdr-content-sticky">
      <div class="container">
        <div class="row">
          <div class="col-auto show-mobile">
            <!-- Menu Toggle -->
            <div class="menu-toggle" @click="() => (isActive = !isActive)">
              <span href="" class="mobilemenu-toggle"><i class="icon-menu"></i></span>
            </div>
            <!-- /Menu Toggle -->
          </div>
          <div class="col-auto hdr-logo">
            <router-link to="/" class="logo"><img src="../../public/logo.png" alt="Logo" /></router-link>
          </div>
          <!--navigation-->
          <div class="hdr-nav hide-mobile nav-holder justify-content-center px-4 nav-header">
            <!--mmenu ```-->
            <ul class="mmenu mmenu-js" :class="{ active: isActive }">
              <li class="mmenu-item--simple">
                <router-link :to="{ name: 'Home' }">الحقائب التعليمية</router-link>
              </li>
              <li class="mmenu-item--simple">
                <router-link to="/cart">عربة التسوق</router-link>
              </li>
              <li class="mmenu-item--mega" v-if="userID" @click="LOGOUT()">
                <router-link to="/login">تسجيل الخروج</router-link>
              </li>
              <li class="mmenu-item--mega" v-if="!userID">
                <router-link to="/login">تسجيل الدخول</router-link>
              </li>
              <li class="mmenu-item--mega" v-if="!userID">
                <router-link to="/register">تسجيل حساب جديد</router-link>
              </li>
            </ul>
            <!--/mmenu-->
          </div>
          <!--//navigation-->
          <div class="hdr-links-wrap col-auto ml-auto">
            <div class="hdr-inline-link">
              <!-- Header Search -->
              <div class="search_container_desktop">
                <div class="dropdn dropdn_search dropdn_fullwidth">
                  <a href="#" class="dropdn-link js-dropdn-link only-icon"><i class="icon-search"></i><span class="dropdn-link-txt">Search</span></a>
                  <div class="dropdn-content">
                    <div class="container">
                      <form method="get" action="#" class="search search-off-popular">
                        <input name="search" type="text" class="search-input input-empty" placeholder="What are you looking for?" />
                        <button type="submit" class="search-button"><i class="icon-search"></i></button>
                        <a href="#" class="search-close js-dropdn-close"><i class="icon-close-thin"></i></a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dropdn dropdn_account dropdn_fullheight" v-if="userID">
                <router-link
                  :to="{ name: 'Account', params: { id: `${userID}` } }"
                  class="dropdn-link js-dropdn-link js-dropdn-link only-icon"
                  data-panel="#dropdnAccount"
                  ><i class="icon-user"></i
                ></router-link>
              </div>
              <!-- /Header Account ~ -->
              <div class="open-cart" @click="isOpen = !isOpen" v-if="!matchMedia">
                <div class="dropdn-link js-dropdn-link minicart-link" data-panel="#dropdnMinicart">
                  <i class="icon-basket"></i>
                  <span class="minicart-qty">{{ lengthDLS }}</span>
                  <span class="minicart-total" v-if="lengthDLS > 0">{{ totalPriceBook }} ريال</span>
                </div>
              </div>
              <div class="open-cart" v-if="matchMedia">
                <router-link to="/cart" class="dropdn-link js-dropdn-link minicart-link" data-panel="#dropdnMinicart">
                  <i class="icon-basket"></i>
                  <span class="minicart-qty">{{ lengthDLS }}</span>
                  <span class="minicart-total" v-if="lengthDLS > 0">{{ totalPriceBook }} ريال</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hdrr">
      <div class="hdr-topline hdr-topline--dark js-hdr-top">
        <div class="container">
          <div class="row flex-nowrap">
            <div class="col hdr-topline-left hide-mobile">
              <!-- Header Social -->
              <div class="hdr-line-separate">
                <ul class="social-list list-unstyled">
                  <li>
                    <a href="#"><i class="icon-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="icon-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="icon-instagram"></i></a>
                  </li>
                </ul>
              </div>
              <!-- /Header Social -->
            </div>
            <div class="col hdr-topline-center">
              <div class="custom-text js-custom-text-carousel" data-slick='{"speed": 1000, "autoplaySpeed": 3000}'>
                <div class="custom-text-item"><i class="icon-fox"></i> متجر قياس للحقائب التعليمية</div>
                <div class="custom-text-item"><i class="icon-air-freight"></i> ملازم وحقائب تعليمية مصممة حسب المعايير الجديدة</div>
                <div class="custom-text-item"><i class="icon-gift"></i> بالتعاون مع نخبة من الدكاترة الخبراء المعتمدين</div>
              </div>
            </div>
            <div class="col hdr-topline-right hide-mobile">
              <div class="hdr-inline-link">
                <div class="hdr_container_desktop">
                  <!-- Header Account -->
                  <div class="dropdn dropdn_account dropdn_fullheight" v-if="userID">
                    <router-link :to="{ name: 'Account', params: { id: `${userID}` } }" class="dropdn-link js-dropdn-link" data-panel="#dropdnAccount"
                      ><i class="icon-user"></i><span class="dropdn-link-txt">الحساب</span></router-link
                    >
                  </div>
                  <!-- /Header Account -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hdr-content">
        <div class="container">
          <div class="row">
            <div class="col-auto show-mobile">
              <!-- Menu Toggle -->
              <div class="menu-toggle" @click="() => (isActive = !isActive)">
                <span href="" class="mobilemenu-toggle"><i class="icon-menu"></i></span>
              </div>
              <!-- /Menu Toggle -->
            </div>
            <div class="col-auto hdr-logo">
              <router-link to="/" class="logo"><img src="../../public/logo.png" alt="Logo" /></router-link>
            </div>
            <!--navigation-->
            <div class="hdr-nav hide-mobile nav-holder justify-content-center px-4 nav-header">
              <!--mmenu ```-->
              <ul class="mmenu mmenu-js" :class="{ active: isActive }">
                <li class="mmenu-item--simple" @click="closeMenu()">
                  <router-link :to="{ name: 'Home' }">الحقائب التعليمية</router-link>
                </li>
                <li class="mmenu-item--simple" @click="closeMenu()">
                  <router-link to="/cart">عربة التسوق</router-link>
                </li>
                <li
                  class="mmenu-item--mega"
                  v-if="userID"
                  @click="
                    closeMenu();
                    LOGOUT();
                  "
                >
                  <router-link to="/login">تسجيل الخروج</router-link>
                </li>
                <li class="mmenu-item--mega" @click="closeMenu()" v-if="!userID">
                  <router-link to="/login">تسجيل الدخول</router-link>
                </li>
                <li class="mmenu-item--mega" @click="closeMenu()" v-if="!userID">
                  <router-link to="/register">إنشاء حساب جديد</router-link>
                </li>
              </ul>
              <!--/mmenu-->
            </div>
            <!--//navigation-->
            <div class="hdr-links-wrap col-auto ml-auto">
              <div class="hdr-inline-link">
                <!-- Header Search -->
                <div class="search_container_desktop">
                  <div class="dropdn dropdn_search dropdn_fullwidth">
                    <a href="#" class="dropdn-link js-dropdn-link only-icon"
                      ><i class="icon-search"></i><span class="dropdn-link-txt">Search</span></a
                    >
                    <div class="dropdn-content">
                      <div class="container">
                        <form method="get" action="#" class="search search-off-popular">
                          <input name="search" type="text" class="search-input input-empty" placeholder="What are you looking for?" />
                          <button type="submit" class="search-button"><i class="icon-search"></i></button>
                          <a href="#" class="search-close js-dropdn-close"><i class="icon-close-thin"></i></a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="dropdn dropdn_account dropdn_fullheight" v-if="userID">
                  <router-link
                    :to="{ name: 'Account', params: { id: `${userID}` } }"
                    class="dropdn-link js-dropdn-link js-dropdn-link only-icon"
                    data-panel="#dropdnAccount"
                    ><i class="icon-user"></i
                  ></router-link>
                </div>
                <!-- ^ -->
                <div class="open-cart" @click="isOpen = !isOpen" v-if="!matchMedia">
                  <div class="dropdn-link js-dropdn-link minicart-link" data-panel="#dropdnMinicart">
                    <i class="icon-basket"></i>
                    <span class="minicart-qty">{{ lengthDLS }}</span>
                    <span class="minicart-total" v-if="lengthDLS > 0">{{ totalPriceBook }} ريال</span>
                  </div>
                </div>
                <div class="open-cart" v-if="matchMedia">
                  <router-link to="/cart" class="dropdn-link js-dropdn-link minicart-link" data-panel="#dropdnMinicart">
                    <i class="icon-basket"></i>
                    <span class="minicart-qty">{{ lengthDLS }}</span>
                    <span class="minicart-total" v-if="lengthDLS > 0">{{ totalPriceBook }} ريال</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- cart menu ```-->
  <div class="header-side-panel">
    <div class="dropdn-content minicart-drop openCart" id="dropdnMinicart" :class="{ 'is-opened': isOpen }">
      <div class="my-dropdn-content">
        <div class="dropdn-close">
          <span class="js-dropdn-close" @click.prevent.stop="isOpen = !isOpen">Close</span>
          <span class="span-length">{{ lengthDLS }} </span>
        </div>
        <div class="minicart-drop-content js-dropdn-content-scroll">
          <div class="minicart-prd row" v-for="(book, i) in dataCart" :key="book.id">
            <div class="minicart-prd-image image-hover-scale-circle col">
              <a href="product.html"><img class="lazyload fade-up" :src="book.image" alt="" /></a>
            </div>
            <div class="minicart-prd-info col">
              <h2 class="minicart-prd-name book-name">
                <a href="#">{{ book.name }}</a>
              </h2>
              <div class="minicart-prd-qty">
                <span class="minicart-prd-qty-label">الكمية:</span><span class="minicart-prd-qty-value">{{ cartLS[i].qty }}</span>
              </div>
              <div class="minicart-prd-price prd-price">
                <div class="price-old">{{ book.discount }} ريال</div>
                <div class="price-new">{{ book.price }} ريال</div>
              </div>
            </div>
            <div class="minicart-prd-action" @click="() => REMOVE_ITEM_LS(book.id)">
              <a href="#" class="js-product-remove" data-line-number="1"><i class="icon-recycle"></i></a>
            </div>
          </div>
          <div class="minicart-empty js-minicart-empty" v-if="lengthDLS < 1">
            <div class="minicart-empty-text">عربة التسوق فارغة</div>
            <div class="minicart-empty-icon">
              <i class="icon-shopping-bag"></i>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 306 262"
                style="enable-background: new 0 0 306 262"
                xml:space="preserve"
              >
                <path
                  class="st0"
                  d="M78.1,59.5c0,0-37.3,22-26.7,85s59.7,237,142.7,283s193,56,313-84s21-206-69-240s-249.4-67-309-60C94.6,47.6,78.1,59.5,78.1,59.5z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="minicart-drop-fixed js-hide-empty" v-if="lengthDLS > 0">
          <div class="loader-horizontal-sm js-loader-horizontal-sm" data-loader-horizontal=""><span></span></div>
          <div class="minicart-drop-total js-minicart-drop-total row no-gutters align-items-center">
            <div class="minicart-drop-total-txt col-auto heading-font total-all">المجموع الكلي :</div>
            <div class="minicart-drop-total-price col total-all2" data-header-cart-total="">{{ totalPriceBook }} ريال</div>
          </div>
          <div class="minicart-drop-actions" @click.prevent.stop="isOpen = !isOpen">
            <router-link to="/cart" class="btn btn--md btn--grey"><i class="icon-basket"></i><span>عربة التسوق</span></router-link>
            <a href="checkout.html" class="btn btn--md"><i class="icon-checkout"></i><span>الدفع</span></a>
          </div>
          <ul class="payment-link mb-2">
            <li><i class="icon-amazon-logo"></i></li>
            <li><i class="icon-visa-pay-logo"></i></li>
            <li><i class="icon-skrill-logo"></i></li>
            <li><i class="icon-klarna-logo"></i></li>
            <li><i class="icon-paypal-logo"></i></li>
            <li><i class="icon-apple-pay-logo"></i></li>
          </ul>
        </div>
      </div>
      <div class="drop-overlay js-dropdn-close"></div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      isOpen: false,
      isActive: false,
      matchMedia: false,
    };
  },
  computed: {
    ...mapState("Register", ["userID"]),
    ...mapState("Cart", ["lengthDLS", "totalPriceBook", "dataCart", "cartLS", "cartIDLS"]),
  },
  async mounted() {
    this.matchMediaFun();
  },
  methods: {
    ...mapActions("Cart", ["REMOVE_ITEM_LS"]),
    ...mapActions("Register", ["LOGOUT"]),
    closeMenu() {
      this.isActive = false;
    },
    matchMediaFun() {
      this.matchMedia = window.matchMedia("(max-width: 768px)").matches;
    },
  },
};
</script>

<style lang="scss" scoped>
.my-dropdn-content {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  padding: 0 45px;
  position: fixed;
  position: fixed;
  z-index: 164;
  opacity: 1;
  top: 0;
  left: -500px;
  width: 485px;
  height: 100%;
  background-color: #fff;
  color: #000;
  pointer-events: all;
  box-shadow: 0 10px 35px rgb(0 0 0 / 7%);
  transition: 1s !important;
}
.hdr-logo img {
  max-width: 70% !important;
}
.hdrr {
  box-shadow: 0 1px 10px 2px rgb(0 0 0 / 5%);
}
.hdr-content.hdr-content-sticky,
.hdr-wrap {
  background: #fff !important;
}
.mmenu > li > a:hover {
  color: #17c6aa !important;
}
.show-total {
  display: block !important;
}
.prd-price {
  margin-top: 10px !important;
}
.book-name {
  text-align: start;
}
.minicart-prd-info {
  padding-right: 0 !important;
}
.minicart-prd-price {
  justify-content: center;
}
.dropdn-close {
  display: flex;
  justify-content: space-between;
}
.total-all {
  font-size: 24px;
}
.no-gutters {
  display: flex;
  justify-content: space-between;
}
.total-all2 {
  flex-shrink: 1;
  flex-grow: 0;
  flex-basis: 24%;
}
.span-length {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  border-radius: 50%;
  height: 28px;
  width: 28px;
  color: #fff;
  font-weight: bold !important;
  font-size: 18px;
  text-align: center;
}
</style>

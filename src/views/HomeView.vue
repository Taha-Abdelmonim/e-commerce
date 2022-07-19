<template>
  <div class="home" v-if="imageSliders.length > 0">
    <div class="page-content">
      <!-- Home slider  -->
      <swiper
        class="mySwiper2"
        :loop="true"
        :autoplay="imageSliders.length > 1 ? true : false"
        :allowSlideNext="imageSliders.length > 1 ? true : false"
        :allowSlidePrev="imageSliders.length > 1 ? true : false"
        :modules="modules2"
      >
        <swiper-slide :data-swiper-autoplay="5000" class="first-slide" v-for="(image, i) in imageSliders" :key="i">
          <img :src="image.image" alt="" />
        </swiper-slide>
      </swiper>
      <!-- ========================```=================================  -->
      <div class="holder holder-mt-medium">
        <swiper class="container">
          <div class="title-wrap text-center" v-if="books.length > 0">
            <h2 class="h1-style">الحقائب التعليمية</h2>
            <hr />
            <br />
          </div>
          <!-- Books Slider ~~:breakpoints="swiperOptions.breakpoints"-->
          <swiper
            class="mySwiper swiper prd-grid data-to-show-4 data-to-show-md-2 data-to-show-sm-2 data-to-show-xs-1 js-product-grid-sm parallax-slider"
            :slidesPerView="4"
            :spaceBetween="0"
            :slidesPerGroup="1"
            :loop="true"
            :autoplay="true"
            :pauseOnMouseEnter="true"
            :loopFillGroupWithBlank="true"
            :navigation="true"
            :modules="modules"
            v-if="books.length > 0"
          >
            <swiper-slide
              :data-swiper-autoplay="5000"
              class="swiper-slide prd prd--style2 prd-labels--max prd-labels-shadow"
              v-for="book in books"
              :key="book.id"
            >
              <div class="prd-inside">
                <div class="prd-img-area">
                  <router-link :to="{ name: 'Book', params: { id: book.id } }" class="prd-img image-hover-scale image-container">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      :data-src="book.image"
                      alt="The Book 01"
                      class="js-prd-img lazyload fade-up"
                    />
                    <div class="foxic-loader"></div>
                    <div class="prd-big-squared-labels"></div>
                  </router-link>
                  <div class="prd-circle-labels">
                    <a href="#" class="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"
                      ><i class="icon-heart-stroke"></i></a
                    ><a href="#" class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"
                      ><i class="icon-heart-hover"></i
                    ></a>
                    <a href="#" class="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"
                      ><i class="icon-eye"></i><span>QUICK VIEW</span></a
                    >
                  </div>
                </div>
                <div class="prd-info">
                  <div class="prd-info-wrap">
                    <h2 class="prd-title">
                      <router-link :to="{ name: 'Book', params: { id: book.id } }">{{ book.name }}</router-link>
                    </h2>
                    <div class="prd-description">
                      {{ book.description }}
                    </div>
                    <div class="prd-action">
                      <form action="#">
                        <button
                          class="btn js-prd-addtocart"
                          data-product='{"name": "The Book 01", "path":"/images/skins/books/products/product-01.png", "url":"product.html", "aspect_ratio":0.778}'
                        >
                          Add To Cart
                        </button>
                      </form>
                    </div>
                  </div>
                  <div class="prd-hovers">
                    <div class="prd-circle-labels">
                      <div>
                        <a href="#" class="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"
                          ><i class="icon-heart-stroke"></i></a
                        ><a href="#" class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"
                          ><i class="icon-heart-hover"></i
                        ></a>
                      </div>
                      <div class="prd-hide-mobile">
                        <a href="#" class="circle-label-qview js-prd-quickview" data-src="ajax/ajax-quickview.html"
                          ><i class="icon-eye"></i><span>QUICK VIEW</span></a
                        >
                      </div>
                    </div>
                    <div class="prd-price">
                      <div class="price-new">{{ book.price }} ريال</div>
                      <div class="prd-tag discount">{{ book.discount }} ريال</div>
                    </div>
                    <div class="prd-action">
                      <div class="prd-action-left">
                        <form class="form-submit" @submit.prevent.stop="() => console.log()">
                          <button
                            type="submit"
                            @click.prevent="$event.target.classList.add('active')"
                            @click.prevent.stop="
                              SET_CART_ID_TO_LS({ id: book.id, qty: 1 });
                              animateAddToCart(book.image, 'books');
                            "
                            class="btn js-prd-addtocart handel-click"
                            :class="{ active: book.isActive }"
                          >
                            أضف إلى السلة
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <!-- Books in Mobile Screen -->
          <div
            class="books prd-grid data-to-show-4 data-to-show-md-2 data-to-show-sm-2 data-to-show-xs-1 js-product-grid-sm parallax-slider"
            v-if="books.length > 0"
          >
            <div class="prd prd--style2 prd-labels--max prd-labels-shadow" v-for="book in books" :key="book.id">
              <div class="prd-inside">
                <div class="prd-img-area">
                  <router-link :to="{ name: 'Book', params: { id: book.id } }" class="prd-img image-hover-scale image-container">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      :data-src="book.image"
                      alt="The Book 01"
                      class="js-prd-img lazyload fade-up"
                    />
                    <div class="foxic-loader"></div>
                    <div class="prd-big-squared-labels"></div>
                  </router-link>
                  <div class="prd-circle-labels">
                    <a href="#" class="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"
                      ><i class="icon-heart-stroke"></i></a
                    ><a href="#" class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"
                      ><i class="icon-heart-hover"></i
                    ></a>
                    <a href="#" class="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"
                      ><i class="icon-eye"></i><span>QUICK VIEW</span></a
                    >
                  </div>
                </div>
                <div class="prd-info">
                  <div class="prd-info-wrap">
                    <h2 class="prd-title">
                      <router-link :to="{ name: 'Book', params: { id: book.id } }">{{ book.name }}</router-link>
                    </h2>
                    <div class="prd-description">
                      {{ book.description }}
                    </div>
                    <div class="prd-action">
                      <form action="#">
                        <button
                          class="btn js-prd-addtocart"
                          data-product='{"name": "The Book 01", "path":"/images/skins/books/products/product-01.png", "url":"product.html", "aspect_ratio":0.778}'
                        >
                          Add To Cart
                        </button>
                      </form>
                    </div>
                  </div>
                  <div class="prd-hovers">
                    <div class="prd-circle-labels">
                      <div>
                        <a href="#" class="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"
                          ><i class="icon-heart-stroke"></i></a
                        ><a href="#" class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"
                          ><i class="icon-heart-hover"></i
                        ></a>
                      </div>
                      <div class="prd-hide-mobile">
                        <a href="#" class="circle-label-qview js-prd-quickview" data-src="ajax/ajax-quickview.html"
                          ><i class="icon-eye"></i><span>QUICK VIEW</span></a
                        >
                      </div>
                    </div>
                    <div class="prd-price">
                      <div class="price-new">{{ book.price }} ريال</div>
                      <div class="prd-tag discount">{{ book.discount }} ريال</div>
                    </div>
                    <div class="prd-action">
                      <div class="prd-action-left">
                        <form class="form-submit" @submit.prevent.stop="() => console.log()">
                          <button
                            type="submit"
                            @click.prevent="$event.target.classList.add('active')"
                            @click.prevent.stop="
                              SET_CART_ID_TO_LS({ id: book.id, qty: 1 });
                              animateAddToCart(book.image, 'books');
                            "
                            class="btn js-prd-addtocart handel-click"
                            :class="{ active: book.isActive }"
                          >
                            أضف إلى السلة
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="title-wrap text-center">
            <h2 class="h1-style h2-style">الرخصة المهنية</h2>
          </div>
          <!-- Categories Slider -->
          <swiper
            class="mySwiper swiper prd-grid data-to-show-4 data-to-show-md-2 data-to-show-sm-2 data-to-show-xs-1 js-product-grid-sm parallax-slider"
            :slidesPerView="4"
            :spaceBetween="0"
            :slidesPerGroup="1"
            :loop="true"
            :autoplay="true"
            :pauseOnMouseEnter="true"
            :loopFillGroupWithBlank="true"
            :navigation="true"
            :modules="modules"
          >
            <swiper-slide
              :data-swiper-autoplay="5000"
              class="swiper-slide prd prd--style2 prd-labels--max prd-labels-shadow"
              v-for="book in categories"
              :key="book.id"
            >
              <div class="prd-inside">
                <div class="prd-img-area">
                  <router-link :to="{ name: 'Book', params: { id: book.id } }" class="prd-img image-hover-scale image-container">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      :data-src="book.image"
                      alt="The Book 01"
                      class="js-prd-img lazyload fade-up"
                    />
                    <div class="foxic-loader"></div>
                    <div class="prd-big-squared-labels"></div>
                  </router-link>
                  <div class="prd-circle-labels">
                    <a href="#" class="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"
                      ><i class="icon-heart-stroke"></i></a
                    ><a href="#" class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"
                      ><i class="icon-heart-hover"></i
                    ></a>
                    <a href="#" class="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"
                      ><i class="icon-eye"></i><span>QUICK VIEW</span></a
                    >
                  </div>
                </div>
                <div class="prd-info">
                  <div class="prd-info-wrap">
                    <h2 class="prd-title">
                      <router-link :to="{ name: 'Book', params: { id: book.id } }">{{ book.name }}</router-link>
                    </h2>
                    <div class="prd-description">
                      {{ book.description }}
                    </div>
                    <div class="prd-action">
                      <form action="#">
                        <button
                          class="btn js-prd-addtocart"
                          data-product='{"name": "The Book 01", "path":"/images/skins/books/products/product-01.png", "url":"product.html", "aspect_ratio":0.778}'
                        >
                          Add To Cart
                        </button>
                      </form>
                    </div>
                  </div>
                  <div class="prd-hovers">
                    <div class="prd-circle-labels">
                      <div>
                        <a href="#" class="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"
                          ><i class="icon-heart-stroke"></i></a
                        ><a href="#" class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"
                          ><i class="icon-heart-hover"></i
                        ></a>
                      </div>
                      <div class="prd-hide-mobile">
                        <a href="#" class="circle-label-qview js-prd-quickview" data-src="ajax/ajax-quickview.html"
                          ><i class="icon-eye"></i><span>QUICK VIEW</span></a
                        >
                      </div>
                    </div>
                    <div class="prd-price">
                      <div class="price-new">{{ book.price }} ريال</div>
                      <div class="prd-tag discount">{{ book.discount }} ريال</div>
                    </div>
                    <div class="prd-action">
                      <div class="prd-action-left">
                        <form action="#">
                          <button
                            @click="$event.target.classList.add('active')"
                            @click.prevent.stop="
                              SET_CART_ID_TO_LS({ id: book.id, qty: 1 });
                              animateAddToCart(book.image, 'categories');
                            "
                            class="btn js-prd-addtocart handel-click"
                            :class="{ active: book.isActive }"
                          >
                            أضف إلى السلة
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <!-- Categories in Mobile Screen -->
          <div class="books prd-grid data-to-show-4 data-to-show-md-2 data-to-show-sm-2 data-to-show-xs-1 js-product-grid-sm parallax-slider">
            <div class="swiper-slide prd prd--style2 prd-labels--max prd-labels-shadow" v-for="book in categories" :key="book.id">
              <div class="prd-inside">
                <div class="prd-img-area">
                  <router-link :to="{ name: 'Book', params: { id: book.id } }" class="prd-img image-hover-scale image-container">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      :data-src="book.image"
                      alt="The Book 01"
                      class="js-prd-img lazyload fade-up"
                    />
                    <div class="foxic-loader"></div>
                    <div class="prd-big-squared-labels"></div>
                  </router-link>
                  <div class="prd-circle-labels">
                    <a href="#" class="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"
                      ><i class="icon-heart-stroke"></i></a
                    ><a href="#" class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"
                      ><i class="icon-heart-hover"></i
                    ></a>
                    <a href="#" class="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"
                      ><i class="icon-eye"></i><span>QUICK VIEW</span></a
                    >
                  </div>
                </div>
                <div class="prd-info">
                  <div class="prd-info-wrap">
                    <h2 class="prd-title">
                      <router-link :to="{ name: 'Book', params: { id: book.id } }">{{ book.name }}</router-link>
                    </h2>
                    <div class="prd-description">
                      {{ book.description }}
                    </div>
                    <div class="prd-action">
                      <form action="#">
                        <button
                          class="btn js-prd-addtocart"
                          data-product='{"name": "The Book 01", "path":"/images/skins/books/products/product-01.png", "url":"product.html", "aspect_ratio":0.778}'
                        >
                          Add To Cart
                        </button>
                      </form>
                    </div>
                  </div>
                  <div class="prd-hovers">
                    <div class="prd-circle-labels">
                      <div>
                        <a href="#" class="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"
                          ><i class="icon-heart-stroke"></i></a
                        ><a href="#" class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0" title="Remove From Wishlist"
                          ><i class="icon-heart-hover"></i
                        ></a>
                      </div>
                      <div class="prd-hide-mobile">
                        <a href="#" class="circle-label-qview js-prd-quickview" data-src="ajax/ajax-quickview.html"
                          ><i class="icon-eye"></i><span>QUICK VIEW</span></a
                        >
                      </div>
                    </div>
                    <div class="prd-price">
                      <div class="price-new">{{ book.price }} ريال</div>
                      <div class="prd-tag discount">{{ book.discount }} ريال</div>
                    </div>
                    <div class="prd-action">
                      <div class="prd-action-left">
                        <form action="#">
                          <button
                            @click="$event.target.classList.add('active')"
                            @click.prevent.stop="
                              SET_CART_ID_TO_LS({ id: book.id, qty: 1 });
                              animateAddToCart(book.image, 'categories');
                            "
                            class="btn js-prd-addtocart handel-click"
                            :class="{ active: book.isActive }"
                          >
                            أضف إلى السلة
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Customer Reviews -->
          <div class="customer-reviews" v-if="rates">
            <div v-for="rate in rates" :key="rate.id">
              <div class="content-bottom">
                <img :src="rate.user_image" alt="" />
                <p v-text="rate.name"></p>
                <div class="prd-rating justify-content-center">
                  <img :src="rate.rates" alt="" />
                </div>
                <p v-text="rate.text"></p>
              </div>
            </div>
          </div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import required modules
import { Navigation, Autoplay, EffectCards } from "swiper";

export default {
  name: "HomeView",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation, Autoplay],
      modules2: [Navigation, Autoplay, EffectCards],
    };
  },

  computed: {
    ...mapState("Books", ["books", "categories"]),
    ...mapState("Cart", ["imageSliders"]),
    ...mapState("Rates", ["rates"]),
  },
  async mounted() {
    await this.GET_BOOKS();
    await this.GET_CATEGORIES();
    await this.GET_IMG_SLIDERS();
    await this.handelClickAddToCart(".handel-click.active");
    await this.GET_RATES();
    await this.customerReviewsSlide();
  },
  methods: {
    ...mapActions("Books", ["GET_BOOKS", "GET_CATEGORIES", "GET_IS_ACTIVE"]),
    ...mapActions("Cart", ["GET_IMG_SLIDERS", "SET_CART_ID_TO_LS"]),
    ...mapActions("Rates", ["GET_RATES"]),
    // animated images add to cart and cart
    async animateAddToCart(srcImage, ele) {
      await this.GET_IS_ACTIVE({ ele });
      this.handelClickAddToCart(".handel-click.active");
      let imgNew = document.createElement("img");
      imgNew.src = srcImage;
      imgNew.classList.add("animate-img");
      document.body.appendChild(imgNew);
      let cartAnimated = document.querySelector(".icon-basket");
      cartAnimated.classList.add("active");
      setTimeout(() => {
        imgNew.remove();
        setTimeout(() => {
          cartAnimated.classList.remove("active");
        }, 800);
      }, 1000);
    },
    handelClickAddToCart(eleButton) {
      let buttonsClick = document.querySelectorAll(eleButton);
      buttonsClick.forEach((ele) => {
        ele.setAttribute("disabled", true);
        ele.innerText = "تم اضافتة الي السلة";
      });
    },
    customerReviewsSlide() {
      $(document).ready(function () {
        $(".customer-reviews").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 6000,
          // rtl: true,  => error
          // dots: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ],
        });
      });
    },

  },
};
// hovered
</script>

<style src="@/assets/css/style-books.css"></style>
<style lang="scss" scoped>
.prd .prd-description {
  display: block !important;
  font-size: 14px;
  margin-top: 10px;
  color: #5c5c5c;
  padding: 10px;
}
.prd-title {
  a {
    font-weight: bold !important;
  }
}
.prd-price .price-new {
  font-weight: bold !important;
}
.discount {
  margin-top: 0;
  margin-right: 30px;
  text-decoration: line-through;
  font-size: 15px;
  color: #565959;
}
.mySwiper2 {
  max-height: 500px;
}
.shuffle {
  .buttons-group {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 800px;
    margin: auto;
    button {
      background: #49d8d9;
    }
  }
}
.h2-style {
  margin-bottom: 50px !important;
  margin-top: 50px !important;
}
.handel-click.active {
  background: #eee;
  color: #000;
  pointer-events: none;
  &:focus,
  &:active,
  &:hover {
    background: #eee !important;
    color: #000 !important;
  }
}
.customer-reviews {
  .slick-slide {
    margin: 10px;
    border: 1px solid #d6d6d6;
    -webkit-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
    border-radius: 5px;
    padding: 10px;
  }
  .content-bottom {
    text-align: center;
    img {
      width: 25%;
      border-radius: 50%;
      margin: 10px auto 0 !important;
    }
    p {
      margin: 10px 0 0 0 !important;
    }
  }
}
.swiper {
  user-select: none;
}
.mySwiper2 {
  max-height: 700px !important;
}
.mySwiper3 {
  width: 100%;
  overflow: hidden;
}
.form-submit {
  position: relative;
  z-index: 999;
}
.books {
  display: none;
}
</style>

<style lang="scss">
.customer-reviews {
  .slick-slide {
    background: #fff;
  }
}
</style>

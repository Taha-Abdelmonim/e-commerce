<template>
  <div class="parent-froduct" v-if="isLoading">
    <div class="page-content">
      <div class="holder">
        <h1 class="prd-block_title">{{ book.name }}</h1>
        <div class="container js-prd-gallery" id="prdGallery">
          <div class="row prd-block con-images prd-block--prv-left">
            <div class="col-md-8 col-lg-10 aside--sticky js-sticky-collision con-images2">
              <div class="aside-content">
                <!-- Product Gallery main-slider-->
                <div class="mb-2 js-prd-m-holder"></div>
                <div class="prd-block_main-image">
                  <div class="prd-block_main-image-holder" id="prdMainImage">
                    <!-- ``` parent slider  -->
                    <div class="main-slider">
                      <div class="slider-for">
                        <div class="product1"><img :src="book.image" alt="" /></div>
                        <div class="product1"><img :src="book.image" alt="" /></div>
                        <div class="product1"><img :src="book.image" alt="" /></div>
                        <div class="product1" v-for="(imgSlider, i) in book.slider" :key="i">
                          <img :src="imgSlider" alt="" />
                        </div>
                      </div>
                      <div class="slider-nav">
                        <div class="product2"><img :src="book.image" alt="" /></div>
                        <div class="product2"><img :src="book.image" alt="" /></div>
                        <div class="product2"><img :src="book.image" alt="" /></div>
                        <div class="product2" v-for="(imgSlider, i) in book.slider" :key="i"><img :src="imgSlider" alt="" /></div>
                      </div>
                    </div>
                  </div>
                  <div class="prd-block_label-sale-squared justify-content-center align-items-center"><span>Sale</span></div>
                </div>
              </div>
              <!-- ``` child slider -->

              <!-- /Product Gallery ``` -->
            </div>
          </div>
          <div class="col-md-10 col-lg-8 mt-1 mt-md-0">
            <div class="prd-block_info prd-block_info--style1" data-prd-handle="/products/copy-of-suede-leather-mini-skirt">
              <div class="prd-block_info-top prd-block_info_item order-0 order-md-2">
                <div class="prd-block_price prd-block_price--style2">
                  <div class="prd-block_price--actual">{{ book.price }} ريال</div>
                  <div class="prd-block_price-old-wrap">
                    <span class="prd-block_price--old">{{ book.discount }} ريال</span>
                    <span class="prd-block_price--text">توفير: {{ book.discount - book.price }} ريال</span>
                  </div>
                </div>
              </div>
              <div class="prd-block_description prd-block_info_item">
                <h3>وصف قصير</h3>
                <p>
                  {{ book.description }}
                </p>
                <div class="mt-1"></div>
              </div>
              <div class="order-0 order-md-100">
                <form method="post" action="#">
                  <div class="prd-block_actions prd-block_actions--wishlist">
                    <div class="btn-wrap">
                      <div class="prd-block_actions prd-block_actions--wishlist">
                        <div class="prd-block_qty" v-if="bookIndex >= 0">
                          <div class="qty qty-changer">
                            <!-- ~  -->
                            <!-- {{ cartLS[bookIndex].qty }} inputValue -->
                            <button
                              class="decrease js-qty-button"
                              @click.prevent="ID_QTY({ type: 'decrease', id: parseInt(cartLS[bookIndex].id) })"
                            ></button>
                            <!-- readonly -->
                            <input
                              :value="cartLS[bookIndex].qty"
                              disabled
                              lang="en"
                              type="number"
                              class="qty-input"
                              name="quantity"
                              min="1"
                              max="5"
                            />
                            <button
                              @click.prevent="ID_QTY({ type: 'increase', id: parseInt(cartLS[bookIndex].id) })"
                              class="increase js-qty-button"
                            ></button>
                          </div>
                          <div>{{ cartLS[bookIndex].qty * book.price }} ريال</div>
                        </div>
                        <div class="btn-wrap">
                          <button
                            @click="$event.target.classList.add('active')"
                            @click.prevent.stop="
                              SET_CART_ID_TO_LS({ id: book.id, qty: 1 });
                              animateAddToCart(book.image);
                            "
                            class="btn btn--add-to-cart js-trigger-addtocart js-prd-addtocart handel-click"
                            :class="{ active: bookIndex >= 0 }"
                          >
                            {{ bookIndex >= 0 ? "تم اضافتة الي السلة" : "أضف إلى السلة" }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
import { mapActions, mapMutations, mapState } from "vuex";

// slider

export default {
  name: "BookViews",
  props: ["id"],

  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapState("Books", ["book", "bookIndex"]),
    ...mapState("Cart", ["cartLS"]),
  },
  async mounted() {
    await this.getUserID(this.id);
    await this.GET_BOOK(this.id);
    await this.slickSlider();
    await this.handelClickAddToCart(".handel-click.active");
  },
  /* watch: {
    inputValue: (newValue, oldValue) => {
      console.log(parseInt(newValue) > parseInt(oldValue));
      console.log(newValue);
      console.log(oldValue);
    },
  }, */
  methods: {
    ...mapMutations("Books", ["getUserID"]),
    ...mapActions("Books", ["GET_BOOK", "GET_INDEX_BOOK"]),
    ...mapActions("Cart", ["SET_CART_ID_TO_LS", "ID_QTY"]),
    slickSlider() {
      $(document).ready(function () {
        $(".slider-for").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: ".slider-nav",
          rtl: true,
        });
        $(".slider-nav").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: ".slider-for",
          dots: true,
          centerMode: true,
          focusOnSelect: true,
          rtl: true,
        });
      });
    },
    animateAddToCart(srcImage) {
      this.GET_INDEX_BOOK(this.id);
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
      if (this.isLoading) {
      } else {
        this.isLoading = true;
      }
      let buttonsClick = document.querySelectorAll(eleButton);
      buttonsClick.forEach((ele) => {
        ele.setAttribute("disabled", true);
        ele.innerText = "تم اضافتة الي السلة";
      });
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: #101010 !important;
  color: #fff;

  .slider {
    width: 50%;
    margin: 100px auto;
  }

  .slick-slider {
    direction: rtl !important;
  }
  .slick-slide {
    margin: 0px 20px;
  }

  .slick-slide img {
    width: 100%;
  }

  .slick-prev:before,
  .slick-next:before {
    color: black;
  }

  .slick-slide {
    transition: all ease-in-out 0.3s;
    opacity: 0.2;
  }

  .slick-active {
    opacity: 0.5;
  }

  .slick-current {
    opacity: 1;
  }
  .main-slider {
    .slider-for {
      width: 100%;
      // margin: 100px auto;
      img {
        width: 100%;
      }
    }
    .slider-nav {
      width: 100%;
      margin: 4px;
      padding: 20px;
      img {
        width: 100%;
      }
    }
  }
}
.con-images2 {
  max-width: 100% !important;
}

.con-images {
  min-width: 50% !important;
}
.js-prd-gallery {
  display: flex;
}
.prd-block_title {
  margin-bottom: 40px !important;
  text-align: center !important;
  font-size: 30px !important;
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
/* .slick-next {
  right: 20px !important;
} */
.aside-content {
  justify-content: center;
}
</style>

<template>
  <div class="parent-cart">
    <div class="page-content">
      <div class="holder">
        <div class="container">
          <div class="page-title text-center">
            <h1>عربة التسوق</h1>
          </div>
          <div class="row">
            <div class="col-lg-18 col-xl-18">
              <div class="cart-table" v-if="dataCart.length > 0">
                <div class="cart-table-prd cart-table-prd--head py-1 d-none d-md-flex">
                  <div class="cart-table-prd-image text-center">صورة</div>
                  <div class="cart-table-prd-content-wrap">
                    <div class="cart-table-prd-info">الاسم</div>
                    <div class="cart-table-prd-qty">الكمية</div>
                    <div class="cart-table-prd-price">سعر</div>
                    <div class="cart-table-prd-action">&nbsp;</div>
                  </div>
                </div>

                <div class="cart-table-prd" v-for="(book, i) in dataCart" :key="book.id" :id="book.id">
                  <div class="cart-table-prd-image">
                    <router-link :to="{ name: 'Book', params: { id: book.id }, query: { isActive: true } }" class="prd-img"
                      ><img class="lazyload fade-up" :src="book.image"
                    /></router-link>
                  </div>
                  <div class="cart-table-prd-content-wrap">
                    <div class="cart-table-prd-info">
                      <div class="cart-table-prd-price price-group">
                        <div class="price-old">{{ book.discount }} ريال</div>
                        <div class="price-new">{{ book.price }} ريال</div>
                      </div>
                      <h2 class="cart-table-prd-name">
                        <a href="#">{{ book.name }}</a>
                      </h2>
                    </div>
                    <div class="cart-table-prd-qty">
                      <div class="qty qty-changer">
                        <button class="decrease" @click.prevent="ID_QTY({ type: `decrease`, id: parseInt(cartLS[i].id) })"></button>
                        <input type="text" class="qty-input" :value="cartLS[i].qty" data-min="0" data-max="1000" />
                        <button class="increase" @click.prevent="ID_QTY({ type: `increase`, id: parseInt(cartLS[i].id) })"></button>
                      </div>
                    <div class="cart-table-prd-price-total">{{ cartLS[i].qty * book.price }} ريال</div>
                    </div>
                  </div>
                  <!-- ~~ -->
                  <div class="cart-table-prd-action remove-button" @click="() => REMOVE_ITEM_LS(book.id)">
                    <span class="cart-table-prd-remove" data-tooltip="Remove Product"><i class="icon-recycle"></i></span>
                  </div>
                </div>
              </div>
              <div class="col-lg-18 col-xl-18" v-if="dataCart.length > 0">
                <div class="card-total">
                  <div class="row d-flex">
                    <div class="col card-total-txt">المجموع</div>
                    <div class="col-auto card-total-price text-right">{{ totalPriceBook }} ريال</div>
                  </div>
                  <button class="btn btn--full btn--lg"><span>الدفع</span></button>
                </div>
                <div class="mt-2"></div>
              </div>
              <div class="text-center mt-1"><a href="#" class="btn btn--grey" @click="REMOVE_LS()" v-if="dataCart.length > 0">امسح الكل</a></div>
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
              <div class="d-none d-lg-block">
                <div class="mt-4"></div>
                <div class="holder">
                  <div class="container">
                    <div class="title-wrap text-center">
                      <h2 class="h1-style">ربما يعجبك أيضا</h2>
                      <div class="carousel-arrows carousel-arrows--center"></div>
                    </div>
                    <div
                      class="prd-grid prd-carousel js-prd-carousel slick-arrows-aside-simple slick-arrows-mobile-lg data-to-show-4 data-to-show-md-3 data-to-show-sm-3 data-to-show-xs-2"
                      data-slick='{"slidesToShow": 4, "slidesToScroll": 2, "responsive": [{"breakpoint": 992,"settings": {"slidesToShow": 3, "slidesToScroll": 1}},{"breakpoint": 768,"settings": {"slidesToShow": 2, "slidesToScroll": 1}},{"breakpoint": 480,"settings": {"slidesToShow": 2, "slidesToScroll": 1}}]}'
                    >
                      <div class="prd prd--style2 prd-labels--max prd-labels-shadow">
                        <div class="prd-inside">
                          <div class="prd-img-area">
                            <a href="product.html" class="prd-img image-hover-scale image-container">
                              <img
                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                data-src="images/skins/fashion/products/product-06-1.jpg"
                                alt="Midi Dress"
                                class="js-prd-img lazyload fade-up"
                              />
                              <div class="foxic-loader"></div>
                              <div class="prd-big-squared-labels"></div>
                            </a>
                            <div class="prd-circle-labels">
                              <a href="#" class="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"
                                ><i class="icon-heart-stroke"></i></a
                              ><a
                                href="#"
                                class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
                                title="Remove From Wishlist"
                                ><i class="icon-heart-hover"></i
                              ></a>
                              <a href="#" class="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"
                                ><i class="icon-eye"></i><span>QUICK VIEW</span></a
                              >

                              <div class="colorswatch-label colorswatch-label--variants js-prd-colorswatch">
                                <i class="icon-palette"
                                  ><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span
                                  ><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span
                                  ><span class="path9"></span><span class="path10"></span
                                ></i>
                                <ul>
                                  <li data-image="images/skins/fashion/products/product-06-1.jpg">
                                    <a class="js-color-toggle" data-toggle="tooltip" data-placement="left" title="Color Name"
                                      ><img src="images/colorswatch/color-grey.png" alt=""
                                    /></a>
                                  </li>
                                  <li data-image="images/skins/fashion/products/product-06-color-2.jpg">
                                    <a class="js-color-toggle" data-toggle="tooltip" data-placement="left" title="Color Name"
                                      ><img src="images/colorswatch/color-green.png" alt=""
                                    /></a>
                                  </li>
                                  <li data-image="images/skins/fashion/products/product-06-color-3.jpg">
                                    <a class="js-color-toggle" data-toggle="tooltip" data-placement="left" title="Color Name"
                                      ><img src="images/colorswatch/color-black.png" alt=""
                                    /></a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <ul class="list-options color-swatch">
                              <li data-image="images/skins/fashion/products/product-06-1.jpg" class="active">
                                <a href="#" class="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"
                                  ><img
                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    data-src="images/skins/fashion/products/product-06-1.jpg"
                                    class="lazyload fade-up"
                                    alt="Color Name"
                                /></a>
                              </li>

                              <li data-image="images/skins/fashion/products/product-06-2.jpg">
                                <a href="#" class="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"
                                  ><img
                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    data-src="images/skins/fashion/products/product-06-2.jpg"
                                    class="lazyload fade-up"
                                    alt="Color Name"
                                /></a>
                              </li>

                              <li data-image="images/skins/fashion/products/product-06-3.jpg">
                                <a href="#" class="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"
                                  ><img
                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    data-src="images/skins/fashion/products/product-06-3.jpg"
                                    class="lazyload fade-up"
                                    alt="Color Name"
                                /></a>
                              </li>
                            </ul>
                          </div>
                          <div class="prd-info">
                            <div class="prd-info-wrap">
                              <div class="prd-info-top">
                                <div class="prd-rating">
                                  <i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i
                                  ><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i>
                                </div>
                              </div>
                              <div class="prd-rating justify-content-center">
                                <i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i
                                ><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i>
                              </div>
                              <div class="prd-tag"><a href="#">Seiko</a></div>
                              <h2 class="prd-title"><a href="product.html">Midi Dress</a></h2>
                              <div class="prd-description">
                                Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                himenaeos. Nam nec ante sed lacinia.
                              </div>
                              <div class="prd-action">
                                <form action="#">
                                  <button
                                    class="btn js-prd-addtocart"
                                    data-product='{"name": "Midi Dress", "path":"images/skins/fashion/products/product-06-1.jpg", "url":"product.html", "aspect_ratio":0.778}'
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
                                  ><a
                                    href="#"
                                    class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
                                    title="Remove From Wishlist"
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
                                <div class="price-new">$ 180</div>
                              </div>
                              <div class="prd-action">
                                <div class="prd-action-left">
                                  <form action="#">
                                    <button
                                      class="btn js-prd-addtocart"
                                      data-product='{"name": "Midi Dress", "path":"images/skins/fashion/products/product-06-1.jpg", "url":"product.html", "aspect_ratio":0.778}'
                                    >
                                      Add To Cart
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="prd prd--style2 prd-labels--max prd-labels-shadow">
                        <div class="prd-inside">
                          <div class="prd-img-area">
                            <a href="product.html" class="prd-img image-hover-scale image-container">
                              <img
                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                data-src="images/skins/fashion/products/product-17-1.jpg"
                                alt="Stand Collar Shirt"
                                class="js-prd-img lazyload fade-up"
                              />
                              <div class="foxic-loader"></div>
                              <div class="prd-big-squared-labels">
                                <div class="label-sale">
                                  <span>-10% <span class="sale-text">Sale</span></span>

                                  <div class="countdown-circle">
                                    <div class="countdown js-countdown" data-countdown="2021/07/01"></div>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <div class="prd-circle-labels">
                              <a href="#" class="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"
                                ><i class="icon-heart-stroke"></i></a
                              ><a
                                href="#"
                                class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
                                title="Remove From Wishlist"
                                ><i class="icon-heart-hover"></i
                              ></a>
                              <a href="#" class="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"
                                ><i class="icon-eye"></i><span>QUICK VIEW</span></a
                              >
                            </div>

                            <ul class="list-options color-swatch">
                              <li data-image="images/skins/fashion/products/product-17-1.jpg" class="active">
                                <a href="#" class="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"
                                  ><img
                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    data-src="images/skins/fashion/products/product-17-1.jpg"
                                    class="lazyload fade-up"
                                    alt="Color Name"
                                /></a>
                              </li>

                              <li data-image="images/skins/fashion/products/product-17-2.jpg">
                                <a href="#" class="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"
                                  ><img
                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    data-src="images/skins/fashion/products/product-17-2.jpg"
                                    class="lazyload fade-up"
                                    alt="Color Name"
                                /></a>
                              </li>

                              <li data-image="images/skins/fashion/products/product-17-3.jpg">
                                <a href="#" class="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"
                                  ><img
                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    data-src="images/skins/fashion/products/product-17-3.jpg"
                                    class="lazyload fade-up"
                                    alt="Color Name"
                                /></a>
                              </li>
                            </ul>
                          </div>
                          <div class="prd-info">
                            <div class="prd-info-wrap">
                              <div class="prd-info-top">
                                <div class="prd-rating">
                                  <i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i
                                  ><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i>
                                </div>
                              </div>
                              <div class="prd-rating justify-content-center">
                                <i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i
                                ><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i>
                              </div>
                              <div class="prd-tag"><a href="#">FOXic</a></div>
                              <h2 class="prd-title"><a href="product.html">Stand Collar Shirt</a></h2>
                              <div class="prd-description">
                                Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                himenaeos. Nam nec ante sed lacinia.
                              </div>
                              <div class="prd-action">
                                <form action="#">
                                  <button
                                    class="btn js-prd-addtocart"
                                    data-product='{"name": "Stand Collar Shirt", "path":"images/skins/fashion/products/product-17-1.jpg", "url":"product.html", "aspect_ratio":0.778}'
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
                                  ><a
                                    href="#"
                                    class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
                                    title="Remove From Wishlist"
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
                                <div class="price-old">$ 200</div>

                                <div class="price-new">$ 180</div>
                              </div>
                              <div class="prd-action">
                                <div class="prd-action-left">
                                  <form action="#">
                                    <button
                                      class="btn js-prd-addtocart"
                                      data-product='{"name": "Stand Collar Shirt", "path":"images/skins/fashion/products/product-17-1.jpg", "url":"product.html", "aspect_ratio":0.778}'
                                    >
                                      Add To Cart
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="prd prd--style2 prd-labels--max prd-labels-shadow">
                        <div class="prd-inside">
                          <div class="prd-img-area">
                            <a href="product.html" class="prd-img image-hover-scale image-container">
                              <img
                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                data-src="images/skins/fashion/products/product-21-1.jpg"
                                alt="Genuine Leather"
                                class="js-prd-img lazyload fade-up"
                              />
                              <div class="foxic-loader"></div>
                              <div class="prd-big-squared-labels">
                                <div class="label-new"><span>New</span></div>
                              </div>
                            </a>
                            <div class="prd-circle-labels">
                              <a href="#" class="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"
                                ><i class="icon-heart-stroke"></i></a
                              ><a
                                href="#"
                                class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
                                title="Remove From Wishlist"
                                ><i class="icon-heart-hover"></i
                              ></a>
                              <a href="#" class="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"
                                ><i class="icon-eye"></i><span>QUICK VIEW</span></a
                              >
                            </div>

                            <ul class="list-options color-swatch">
                              <li data-image="images/skins/fashion/products/product-21-1.jpg" class="active">
                                <a href="#" class="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"
                                  ><img
                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    data-src="images/skins/fashion/products/product-21-1.jpg"
                                    class="lazyload fade-up"
                                    alt="Color Name"
                                /></a>
                              </li>

                              <li data-image="images/skins/fashion/products/product-21-2.jpg">
                                <a href="#" class="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"
                                  ><img
                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    data-src="images/skins/fashion/products/product-21-2.jpg"
                                    class="lazyload fade-up"
                                    alt="Color Name"
                                /></a>
                              </li>

                              <li data-image="images/skins/fashion/products/product-21-3.jpg">
                                <a href="#" class="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"
                                  ><img
                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    data-src="images/skins/fashion/products/product-21-3.jpg"
                                    class="lazyload fade-up"
                                    alt="Color Name"
                                /></a>
                              </li>
                            </ul>
                          </div>
                          <div class="prd-info">
                            <div class="prd-info-wrap">
                              <div class="prd-info-top">
                                <div class="prd-rating">
                                  <i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i
                                  ><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i>
                                </div>
                              </div>
                              <div class="prd-rating justify-content-center">
                                <i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i
                                ><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i>
                              </div>
                              <div class="prd-tag"><a href="#">FOXic</a></div>
                              <h2 class="prd-title"><a href="product.html">Genuine Leather</a></h2>
                              <div class="prd-description">
                                Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                himenaeos. Nam nec ante sed lacinia.
                              </div>
                              <div class="prd-action">
                                <form action="#">
                                  <button
                                    class="btn js-prd-addtocart"
                                    data-product='{"name": "Genuine Leather", "path":"images/skins/fashion/products/product-21-1.jpg", "url":"product.html", "aspect_ratio":0.778}'
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
                                  ><a
                                    href="#"
                                    class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
                                    title="Remove From Wishlist"
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
                                <div class="price-new">$ 180</div>
                              </div>
                              <div class="prd-action">
                                <div class="prd-action-left">
                                  <form action="#">
                                    <button
                                      class="btn js-prd-addtocart"
                                      data-product='{"name": "Genuine Leather", "path":"images/skins/fashion/products/product-21-1.jpg", "url":"product.html", "aspect_ratio":0.778}'
                                    >
                                      Add To Cart
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="prd prd--style2 prd-labels--max prd-labels-shadow">
                        <div class="prd-inside">
                          <div class="prd-img-area">
                            <a href="product.html" class="prd-img image-hover-scale image-container">
                              <img
                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                data-src="images/skins/fashion/products/product-26-1.jpg"
                                alt="Pureboost Shoes"
                                class="js-prd-img lazyload fade-up"
                              />
                              <div class="foxic-loader"></div>
                              <div class="prd-big-squared-labels"></div>
                            </a>
                            <div class="prd-circle-labels">
                              <a href="#" class="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"
                                ><i class="icon-heart-stroke"></i></a
                              ><a
                                href="#"
                                class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
                                title="Remove From Wishlist"
                                ><i class="icon-heart-hover"></i
                              ></a>
                              <a href="#" class="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"
                                ><i class="icon-eye"></i><span>QUICK VIEW</span></a
                              >
                            </div>

                            <ul class="list-options color-swatch">
                              <li data-image="images/skins/fashion/products/product-26-1.jpg" class="active">
                                <a href="#" class="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"
                                  ><img
                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    data-src="images/skins/fashion/products/product-26-1.jpg"
                                    class="lazyload fade-up"
                                    alt="Color Name"
                                /></a>
                              </li>

                              <li data-image="images/skins/fashion/products/product-26-2.jpg">
                                <a href="#" class="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"
                                  ><img
                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    data-src="images/skins/fashion/products/product-26-2.jpg"
                                    class="lazyload fade-up"
                                    alt="Color Name"
                                /></a>
                              </li>

                              <li data-image="images/skins/fashion/products/product-26-3.jpg">
                                <a href="#" class="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"
                                  ><img
                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    data-src="images/skins/fashion/products/product-26-3.jpg"
                                    class="lazyload fade-up"
                                    alt="Color Name"
                                /></a>
                              </li>
                            </ul>
                          </div>
                          <div class="prd-info">
                            <div class="prd-info-wrap">
                              <div class="prd-info-top">
                                <div class="prd-rating">
                                  <i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i
                                  ><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i>
                                </div>
                              </div>
                              <div class="prd-rating justify-content-center">
                                <i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i
                                ><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i>
                              </div>
                              <div class="prd-tag"><a href="#">FOXic</a></div>
                              <h2 class="prd-title"><a href="product.html">Pureboost Shoes</a></h2>
                              <div class="prd-description">
                                Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                himenaeos. Nam nec ante sed lacinia.
                              </div>
                              <div class="prd-action">
                                <form action="#">
                                  <button
                                    class="btn js-prd-addtocart"
                                    data-product='{"name": "Pureboost Shoes", "path":"images/skins/fashion/products/product-26-1.jpg", "url":"product.html", "aspect_ratio":0.778}'
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
                                  ><a
                                    href="#"
                                    class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
                                    title="Remove From Wishlist"
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
                                <div class="price-new">$ 180</div>
                              </div>
                              <div class="prd-action">
                                <div class="prd-action-left">
                                  <form action="#">
                                    <button
                                      class="btn js-prd-addtocart"
                                      data-product='{"name": "Pureboost Shoes", "path":"images/skins/fashion/products/product-26-1.jpg", "url":"product.html", "aspect_ratio":0.778}'
                                    >
                                      Add To Cart
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="prd prd--style2 prd-labels--max prd-labels-shadow">
                        <div class="prd-inside">
                          <div class="prd-img-area">
                            <a href="product.html" class="prd-img image-hover-scale image-container">
                              <img
                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                data-src="images/skins/fashion/products/product-30-1.jpg"
                                alt="Multiple Pocket"
                                class="js-prd-img lazyload fade-up"
                              />
                              <div class="foxic-loader"></div>
                              <div class="prd-big-squared-labels"></div>
                            </a>
                            <div class="prd-circle-labels">
                              <a href="#" class="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0" title="Add To Wishlist"
                                ><i class="icon-heart-stroke"></i></a
                              ><a
                                href="#"
                                class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
                                title="Remove From Wishlist"
                                ><i class="icon-heart-hover"></i
                              ></a>
                              <a href="#" class="circle-label-qview js-prd-quickview prd-hide-mobile" data-src="ajax/ajax-quickview.html"
                                ><i class="icon-eye"></i><span>QUICK VIEW</span></a
                              >
                            </div>

                            <ul class="list-options color-swatch">
                              <li data-image="images/skins/fashion/products/product-30-1.jpg" class="active">
                                <a href="#" class="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"
                                  ><img
                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    data-src="images/skins/fashion/products/product-30-1.jpg"
                                    class="lazyload fade-up"
                                    alt="Color Name"
                                /></a>
                              </li>

                              <li data-image="images/skins/fashion/products/product-30-2.jpg">
                                <a href="#" class="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"
                                  ><img
                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    data-src="images/skins/fashion/products/product-30-2.jpg"
                                    class="lazyload fade-up"
                                    alt="Color Name"
                                /></a>
                              </li>

                              <li data-image="images/skins/fashion/products/product-30-3.jpg">
                                <a href="#" class="js-color-toggle" data-toggle="tooltip" data-placement="right" title="Color Name"
                                  ><img
                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    data-src="images/skins/fashion/products/product-30-3.jpg"
                                    class="lazyload fade-up"
                                    alt="Color Name"
                                /></a>
                              </li>
                            </ul>
                          </div>
                          <div class="prd-info">
                            <div class="prd-info-wrap">
                              <div class="prd-info-top">
                                <div class="prd-rating">
                                  <i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i
                                  ><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i>
                                </div>
                              </div>
                              <div class="prd-rating justify-content-center">
                                <i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i
                                ><i class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i>
                              </div>
                              <div class="prd-tag"><a href="#">FOXic</a></div>
                              <h2 class="prd-title"><a href="product.html">Multiple Pocket</a></h2>
                              <div class="prd-description">
                                Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                himenaeos. Nam nec ante sed lacinia.
                              </div>
                              <div class="prd-action">
                                <form action="#">
                                  <button
                                    class="btn js-prd-addtocart"
                                    data-product='{"name": "Multiple Pocket", "path":"images/skins/fashion/products/product-30-1.jpg", "url":"product.html", "aspect_ratio":0.778}'
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
                                  ><a
                                    href="#"
                                    class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
                                    title="Remove From Wishlist"
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
                                <div class="price-new">$ 180</div>
                              </div>
                              <div class="prd-action">
                                <div class="prd-action-left">
                                  <form action="#">
                                    <button
                                      class="btn js-prd-addtocart"
                                      data-product='{"name": "Multiple Pocket", "path":"images/skins/fashion/products/product-30-1.jpg", "url":"product.html", "aspect_ratio":0.778}'
                                    >
                                      Add To Cart
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "CartView",
  // components: {},
  data() {
    return {
      totalPrice: null,
    };
  },
  components: {
    Footer,
  },
  computed: {
    ...mapState("Cart", ["imageSliders", "dataCart", "cartLS", "totalPriceBook", "lengthDLS"]),
  },
  mounted() {
    // this.GET_CATEGORIES_FROM_LS();
    setTimeout(() => {
      this.CALC_TOTAL();
    }, 500);
  },
  methods: {
    ...mapActions("Cart", ["REMOVE_LS", "GET_CATEGORIES_FROM_LS", "ID_QTY", "REMOVE_ITEM_LS", "CALC_TOTAL"]),
  },
};
</script>

<style lang="scss" scoped>
.cart-table-prd-info {
  padding-right: 100px;
}

.cart-table-prd-qty {
  padding-right: 0 !important;
}
.price-group {
  flex-direction: column !important;
  .price-new {
    width: 130px;
    margin-top: 10px;
  }
}
.remove-button {
  cursor: pointer;
}
</style>

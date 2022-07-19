<template>
  <footer class="page-footer footer-style-2 holder-mt-small">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-md-9 col-lg">
            <div class="footer-block collapsed-mobile" :class="{ open: isOpen1 }">
              <div class="title">
                <h4 class="text-center">معلومات عنا</h4>
                <span class="toggle-arrow" @click="() => (isOpen1 = !isOpen1)"><span></span><span></span></span>
              </div>
              <div class="collapsed-content">
                <div class="footer-txt-block">
                  متجر قياس للحقائب التعليمية ملازم وحقائب تعليمية مصممة حسب المعايير الجديدة لهيئة التقويم والتدريب بالتعاون مع نخبة من الدكاترة
                  الخبراء المعتمدين والاساتذة المختصين .
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-9 col-lg">
            <div class="footer-block collapsed-mobile" :class="{ open: isOpen2 }">
              <div class="title">
                <h4 class="text-center">مواقع التواصل</h4>
                <span class="toggle-arrow" @click="() => (isOpen2 = !isOpen2)"><span></span><span></span></span>
              </div>
              <div class="collapsed-content">
                <ul class="social-list-circle-sm social">
                  <li>
                    <a href="#"><i class="icon-facebook"></i></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/QiyasCo" target="_blank"><i class="icon-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="icon-instagram"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row vert-margin-middle">
          <div class="col-sm footer-bottom-col-left">
            <div class="footer-logo">
              <a href="index.html" class="logo"
                ><img srcset="/images/skins/books/logo-books-footer.png 1x, /images/skins/books/logo-books-footer2x.png 2x" alt="Logo"
              /></a>
            </div>
          </div>
          <div class="col-sm footer-bottom-col-right">
            <div class="row vert-margin-middle">
              <div class="col-sm">
                <ul class="payment-link payment-link--sm">
                  <li><i class="icon-amazon-logo"></i></li>
                  <li><i class="icon-visa-pay-logo"></i></li>
                  <li><i class="icon-skrill-logo"></i></li>
                  <li><i class="icon-master-card-logo"></i></li>
                  <li><i class="icon-paypal-logo"></i></li>
                  <li><i class="icon-apple-pay-logo"></i></li>
                </ul>
              </div>
              <div class="col-sm-auto">
                <div class="footer-copyright"><a href="#">FOXshop</a> ©2020 copyright</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      isOpen1: true,
      isOpen2: true,
    };
  },
};
</script>

<style lang="scss">
.social-list-circle-sm.social {
  justify-content: center;
}
.text-center {
  text-align: center;
}
</style>

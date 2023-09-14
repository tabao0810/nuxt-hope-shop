<template>
  <footer class="bg-[#6c757d] text-white">
    <div class="container">
      <div class="newLetter__heading">
        <h1>Newsletter</h1>
        <p>Get the latest new and special offers</p>
      </div>
      <!-- <div class="newLetter-form grid">
        <div v-if="userInfo._id">Newsletter
          <img :src="img_svg" alt="" class="newLetter-svg" />
        </div>
        <div>
          <input
            type="email"
            placeholder="email@example.com"
            class="form-email"
          />

          <a href="" class="btn-sign ml-3">
            <span class="btn-label">sign up</span>
          </a>
        </div>
      </div> -->
      <div class="border-y py-2 px-5">
        <div class="">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12 letter-text">
              <h2 class="letter__header">MY ACCOUNT</h2>
              <div class="list-letter">
                <li><a href="">My Account</a></li>
                <li><a href="">My Cart</a></li>
                <li><a href="">My Checkout</a></li>
                <li><a href="">My Wishlist</a></li>
                <li><a href="">My Wishlist</a></li>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 letter-text">
              <h2 class="letter__header">INFORMATION</h2>
              <div class="list-letter">
                <li><a href="">My Account</a></li>
                <li><a href="">My Cart</a></li>
                <li><a href="">My Checkout</a></li>
                <li><a href="">My Wishlist</a></li>
                <li><a href="">Login</a></li>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 letter-text">
              <h2 class="letter__header">CUSTOMER SERVICE</h2>
              <div class="list-letter">
                <li><a href="">My Account</a></li>
                <li><a href="">My Cart</a></li>
                <li><a href="">My Checkout</a></li>
                <li><a href="">My Wishlist</a></li>
                <li><a href="">My Login</a></li>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 letter-text">
              <h2 class="letter__header">STORE INFORMATION</h2>
              <div class="list-letter-2 mt-3">
                <p>Địa chỉ: Minh Hòa, Hưng Hà, Thái Bình</p>
                <p>Liên hệ: 036.7773.541</p>
                <p>Email: tabao08102000@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center p-2">
        <p class="text-center">
          Copyright <a href="" class="text-danger">©Tạ Quốc Bảo</a>.All Rights
          Reserved
        </p>
        <div class="">
          <img
            src="https://hope-2.myshopify.com/cdn/shop/t/2/assets/payment.png?v=113921376602854557521464179948"
            alt=""
          />
        </div>
      </div>
    </div>
  </footer>
  <!-- <div class="scrollTop" ref="srTop">
    <div class="backToTop"></div>
  </div> -->
</template>

<style>
.form-email {
  padding: 10px;
  border-radius: 5px;
  border: none;
  width: 300px;
  outline: none;
  margin-left: -150px;
}
.newLetter-form {
  display: block;
}

.newLetter-svg {
  width: 20%;
}
/* Mobile */
@media (max-width: 767.98px) {
  .list-letter-2 {
    margin-left: 40px;
  }
  .newLetter__heading::before {
    display: none;
  }
  .newLetter__heading::after {
    display: none;
  }
  .form-email {
    margin: auto;
  }
  .btn-sign {
    margin: auto;
  }
  .newLetter-form {
    height: 100px;
  }
}
/* Tablet */
@media (min-width: 768px) and (max-width: 991.98px) {
  .list-letter {
    margin-left: 20px;
    font-size: 12px;
  }
  .letter__header {
    font-size: 13px;
  }
}
.backToTop {
  right: 20px;
  bottom: 35px;
  display: block;
  position: fixed;
  right: 12px;
  cursor: pointer;
  width: 46px;
  height: 65px;
  background: url(https://cdn.shopify.com/s/files/1/1309/3901/t/2/assets/back-top.png)
    no-repeat 0 0;
}
.backToTop:hover {
  background-position: 0 100%;
}
.scrollTop {
  position: fixed;
  z-index: 10;
  bottom: 0;
  right: 0;
  display: none;
}
.activeTop {
  display: block;
}
</style>
<style scoped>
.btn-sign {
  background: transparent;
  text-align: center;
  letter-spacing: 1px;
  font-size: 1.2em;
  line-height: 1.4em;
  font-weight: 500;
  position: absolute;
  width: 140px;
  height: 45px;
  padding: 10px 0;
  border: 1px solid #fff;
  overflow: hidden;
  transition: all 0.5s;
  box-shadow: 0px 3px 0px #fff;
  border-radius: 4px;
  text-transform: uppercase;
}

.btn-sign:hover,
.btn-sign:active {
  text-decoration: none;
  color: #fff;
  border-color: #ff343b;
  background: #ff343b;
  box-shadow: 0 0 0 #ff343b;
}

.btn-label {
  position: relative;
  padding-right: 0;
  transition: padding-right 0.5s;
  color: #fff;
  font-family: "Exo 2", sans-serif;
  font-weight: 200;
}
.btn-label:after {
  content: "";
  position: absolute;
  right: -50px;
  opacity: 0;
  top: 22%;
  width: 10px;
  height: 10px;
  background: rgba(0, 0, 0, 0);
  border: 3px solid #fff;
  border-top: none;
  border-right: none;
  transition: opacity 0.5s, top 0.5s, right 0.5s;
  transform: rotate(225deg);
}

.btn-sign:hover .btn-label,
.btn-sign:active .btn-label {
  padding-right: 30px;
  color: #f5f1e7;
}

.btn-sign:hover .btn-label:after,
.btn-sign:active .btn-label:after {
  transition: opacity 0.5s, top 0.5s, right 0.5s;
  opacity: 1;
  right: 10px;
  top: 22%;
}
</style>

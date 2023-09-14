<template>
  <div class="">
    <div class="shopping_world">
      <p>free shipping worldwide. no minimum ourchase required.</p>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6 col-12 mt-1 list_sales">
        <div class="sale_item">
          <div class="sale_banner">
            <NuxtLink to="/">
              <img
                src="https://hope-2.myshopify.com/cdn/shop/t/2/assets/h-banner-1.jpg?v=132282272900468410731464179944"
                alt=""
              />
            </NuxtLink>
          </div>
          <div class="sale_text">
            <h4>leather bags</h4>
            <h3>-35% sale off</h3>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-12 mt-1 list_sales">
        <div class="sale_item">
          <div class="sale_banner">
            <NuxtLink to="/">
              <img
                src="https://hope-2.myshopify.com/cdn/shop/t/2/assets/h-banner-2.jpg?v=21612175103469506241464179944"
                alt=""
              />
            </NuxtLink>
          </div>
          <div class="sale_text">
            <h4>leather bags</h4>
            <h3>-35% sale off</h3>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-12 mt-1 list_sales">
        <div class="sale_item">
          <div class="sale_banner">
            <NuxtLink to="/">
              <img
                src="https://hope-2.myshopify.com/cdn/shop/t/2/assets/h-banner-3.jpg?v=108604939206400285381464179944"
                alt=""
              />
            </NuxtLink>
          </div>
          <div class="sale_text">
            <h4>leather bags</h4>
            <h3>-35% sale off</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.shopping_world {
  color: #666;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  padding-top: 30px;
}
.sale_item {
  overflow: hidden;
  position: relative;
  width: 100%;
  border-radius: 4px;
  .sale_banner {
    transition: all linear 0.3s;
    a {
      transition: all linear 0.3s;
      overflow: hidden;
    }
    img {
      transition: all linear 0.3s;
      vertical-align: middle;
      width: 100%;
    }
  }
  .sale_text {
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    text-align: center;
    top: 25%;
    width: 70%;
    transition: all linear 0.3s;
    h4 {
      border-bottom: 1px solid #7f513a;
      color: #7f513a;
      display: inline-block;
      font-size: 16px;
      font-weight: 300;
      letter-spacing: 1px;
      margin: 0 0 5px;
      text-transform: uppercase;
    }
    h3 {
      font-size: 27px;
      font-weight: normal;
      margin: 0;
      text-transform: uppercase;
    }
  }
  &:hover {
    .sale_text {
      top: 20%;
    }

    img {
      transform: scale(1.1);
    }
  }
}
</style>

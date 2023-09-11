<script setup>
const props = defineProps({
  productDetail: Object,
});
</script>

<template>
  <div class="single_product">
    <NuxtLink to="/" class="product_overlay">
      <img class="" :src="productDetail.image" alt="" loading="lazy" />
    </NuxtLink>
    <div class="sale_product" v-if="productDetail.isSale">
      <h5>Sale</h5>
    </div>
    <div class="product_detail">
      <h2>
        <NuxtLink to="/">{{ productDetail.name }}</NuxtLink>
      </h2>
      <p>
        <span class="product_price">
          {{ productDetail.price }}
        </span>
        <span class="product_price_sale" v-if="productDetail.isSale">
          {{ productDetail.price }}</span
        >
      </p>
    </div>
    <div class="product_feature">
      <div class="product_feature-detail">
        <button>Tym</button>
      </div>
      <div class="product_feature-detail">
        <button>ADD TO CART</button>
      </div>
    </div>
  </div>
</template>

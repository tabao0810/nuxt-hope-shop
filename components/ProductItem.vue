<script setup>
const props = defineProps({
  productDetail: Object,
  Loading: Boolean,
});
import { typePackages } from "@/constants/type-product";
</script>

<template>
  <div class="single_product">
    <NuxtLink
      :to="`/products/${typePackages[productDetail.typeProduct]}/${
        productDetail._id
      }`"
      class="product_overlay"
    >
      <LoadingImageSkeleton v-if="Loading" style="min-height: 250px" />
      <img
        class=""
        :src="productDetail.image"
        alt=""
        loading="lazy"
        @load="Loading = false"
        v-show="!Loading"
        v-else
      />
    </NuxtLink>
    <div class="sale_product" v-if="productDetail.isSale" v-show="!Loading">
      <h5>Sale</h5>
    </div>
    <div class="product_feature">
      <div class="product_feature-detail">
        <button><IconsFavorite /></button>
      </div>
      <div class="product_feature-detail">
        <button><IconsEye /></button>
      </div>
      <div class="product_feature-detail">
        <button>ADD TO CART</button>
      </div>
    </div>
    <div>
      <LoadingImageSkeleton v-if="Loading" style="min-height: 50px" />
      <div v-else class="product_detail">
        <h2>
          <NuxtLink to="/">{{ productDetail.name }}</NuxtLink>
        </h2>
        <p>
          <span v-if="productDetail.isSale">
            <span class="product_price">
              {{
                FormatPrice(
                  Number(
                    productDetail.price -
                      (productDetail.price * productDetail.sale) / 100
                  )
                )
              }}
            </span>
            <span class="product_price_sale">
              {{ FormatPrice(productDetail.price) }}</span
            >
          </span>
          <span class="product_price" v-else>
            {{ FormatPrice(productDetail.price) }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

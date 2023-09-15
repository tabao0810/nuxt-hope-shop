<script setup>
const { data: products, pending } = await useFetch(
  "/api/products/get-all-products"
);
</script>

<template>
  <div class="container">
    <div v-if="pending">Loading</div>
    <div v-else class="row">
      <div
        v-for="product in products.Product"
        :key="product._id"
        class="col-lg-3 col-md-6 col-12"
      >
        <ProductItem class="" :productDetail="product" :Loading="pending" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: products, pending } = await useFetch(
  "/api/products/get-all-products"
);
</script>

<template>
  <div>
    <div v-if="pending">Loading</div>
    <div
      v-else
      class="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-[30px]"
    >
      <div v-for="product in products.Product" :key="product._id">
        <ProductItem class="" :productDetail="product" />
      </div>
    </div>
  </div>
</template>

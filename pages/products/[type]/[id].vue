<script setup>
import { typePackages } from "@/constants/type-product";
const route = useRoute();
const FormatType = ref(
  Object.keys(typePackages)[
    Object.values(typePackages).findIndex((item) => item == route.params.type)
  ]
);
const { data: ProductDetail, pending } = await useFetch(
  `/api/products/${route.params.id}`
);
const { data: ProductRelated, pending: loading } = await useFetch(
  `/api/products/type/${FormatType.value}`
);
</script>

<template>
  <div class="container">
    <h2>product detail</h2>
    <p>{{ ProductDetail }}</p>
    <div class="row">
      <div
        v-for="product in ProductRelated"
        :key="product._id"
        class="col-lg-3 col-md-6 col-12"
      >
        <ProductItem class="" :productDetail="product" :Loading="loading" />
      </div>
    </div>
  </div>
</template>

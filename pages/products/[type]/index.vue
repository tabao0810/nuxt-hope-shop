<script setup>
import { typePackages } from "@/constants/type-product";

definePageMeta({
  middleware: ["product"],
});

const route = useRoute();
const FormatType = computed(
  () =>
    Object.keys(typePackages)[
      Object.values(typePackages).findIndex((item) => item == route.params.type)
    ]
);
const { data: ListProducts, pending } = await useLazyFetch(
  `/api/products/type/${FormatType.value}`
);
const route_products = ref([
  { route: "Tất cả", to: "/products/all" },
  { route: "Quần áo", to: "/products/clothes" },
  { route: "Túi xách", to: "/products/bag" },
  { route: "Phụ kiện", to: "/products/accessory" },
  { route: "Giày cao gót", to: "/products/shoes" },
]);
const image_products = ref([
  {
    image:
      "https://file.hstatic.net/1000003969/file/5_4e8bbd11e68d4e08a72d2d9b4738f03b.jpg",
  },
  {
    image:
      "https://file.hstatic.net/1000003969/file/1_bd94c2d5fef549f2ae4465bb6732fc0f.jpg",
  },
  {
    image:
      "https://file.hstatic.net/1000003969/file/3_bdbb2eb57de648dabcdb98fb58fb360d.jpg",
  },
]);
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="blog__icon col-12">
        <div class="blog__icon-link">
          <NuxtLink to="/" class="blog__icon-text">home</NuxtLink>
          <span class="blog__icon-text-active">PRODUCTS</span>
        </div>
      </div>
      <div class="col-lg-3">
        <Sidebar
          :routes="route_products"
          :images="image_products"
          :title="'Collection'"
        />
      </div>
      <div class="col-lg-9">
        <div class="row">
          <div
            v-for="product in ListProducts"
            :key="product._id"
            class="col-lg-3 col-md-6 col-12"
          >
            <ProductItem :productDetail="product" :Loading="pending" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.blog__icon-text-active {
  &::before {
    left: 40px !important;
  }
}
</style>

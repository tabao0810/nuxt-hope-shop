<script setup>
const props = defineProps({
  routes: {
    type: Array,
    required: true,
  },
  images: {
    type: Array,
  },
  title: {
    type: String,
  },
});
</script>

<template>
  <div class="catagory_all_products sidebar_products">
    <div class="catagory_area">
      <h2>{{ props.title }}</h2>
      <ul class="catagory_area-menu">
        <li v-for="(item, index) in props.routes" :key="index">
          <NuxtLink :to="item.to"
            ><span><IconsRight :wid="'1.4em'" :hei="'1.4em'" /></span
            >{{ item.route }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
  <div class="sidebar_product_feature">
    <div
      class="add_r_sidebar"
      v-for="(_img, index) in props.images"
      :key="index"
    >
      <NuxtLink to="/" class="banner_block">
        <img :src="_img.image" alt="" />
      </NuxtLink>
    </div>
  </div>
</template>
<style lang="scss">
.catagory_all_products {
  background: #f3f3f3;
  padding: 20px;
  h2 {
    font-size: 18px;
    color: rgba(34, 34, 34, 0.8);
    padding-bottom: 8px;
    border-bottom: 1px solid #c2c2c2;
    text-transform: uppercase;
    font-weight: bold;
    text-align: left;
  }
}
</style>

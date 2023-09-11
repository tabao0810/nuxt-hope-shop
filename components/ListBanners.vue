<script setup>
const { data: banners, pending } = await useFetch(
  "/api/banners/get-all-banners"
);
</script>

<template>
  <Swiper
    :modules="[SwiperAutoplay]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 1000,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide v-for="banner in banners.Banner" :key="banner._id">
      <img :src="banner.image" alt="" lazy="loading" />
    </SwiperSlide>
  </Swiper>
</template>
<style lang="scss"></style>

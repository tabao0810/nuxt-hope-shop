<script setup>
const { data: banners, pending } = await useFetch(
  "/api/banners/get-all-banners"
);
</script>

<template>
  <Swiper
    class="swiper-banner"
    :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
    :slides-per-view="1"
    :centered-slides="true"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: true,
    }"
    :navigation="{
      nextEl: '.banner-button-next',
      prevEl: '.banner-button-prev',
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide v-for="banner in banners.Banner" :key="banner._id">
      <img :src="banner.image" alt="" lazy="loading" />
    </SwiperSlide>
    <div class="banner-navgation">
      <button class="banner-button-prev">
        <span class="banner-icon-left"
          ><IconsLeft :wid="'1em'" :hei="'1em'" :view="'8 4 18 14'"
        /></span>
      </button>

      <button class="banner-button-next">
        <span class="banner-icon-right"
          ><IconsRight :wid="'1em'" :hei="'1em'" :view="'0 2 12 20'"
        /></span>
      </button>
    </div>
  </Swiper>
</template>
<style lang="scss" scoped>
@keyframes btn-next {
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes btn-prev {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
.swiper-banner {
  width: 100%;
  height: 65vh;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .banner-navgation {
    width: 100%;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    display: none;
    color: white;
    .banner-button-next {
      width: 0;
      height: 0;
      border: 30px solid #333;
      border-left-width: 0;
      border-color: transparent #333 transparent transparent;
      position: relative;
      animation: btn-next linear 0.3s;
      &:hover {
        width: 0;
        height: 0;
        border: 30px solid;
        border-left-width: 0;
        border-color: transparent #00a9e0 transparent transparent;
        position: relative;
        cursor: pointer;
        transition: all linear 0.3s;
      }
      .banner-icon-right {
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        position: absolute;
        right: -20px;
        top: -8px;
      }
    }
    .banner-button-prev {
      width: 0;
      height: 0;
      border: 30px solid #333;
      border-right-width: 0;
      border-color: transparent transparent transparent #333;
      position: relative;
      animation: btn-prev linear 0.3s;
      &:hover {
        cursor: pointer;
        width: 0;
        height: 0;
        border: 30px solid;
        border-right-width: 0;
        border-color: transparent transparent transparent #00a9e0;
        position: relative;
        transition: all linear 0.3s;
      }
      .banner-icon-left {
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        position: absolute;
        left: -20px;
        top: -8px;
      }
    }
  }
  &:hover .banner-navgation {
    display: flex;
  }
}
</style>

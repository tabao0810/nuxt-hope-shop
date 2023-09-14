<script setup>
const { data: brands, pending } = await useFetch("/api/brands/get-all-brands");
</script>

<template>
  <div v-if="!pending">
    <Swiper
      :class="'swiper-brands'"
      :modules="[SwiperEffectCreative, SwiperNavigation]"
      :slides-per-view="4"
      :slides-per-group="1"
      :loop="true"
      :effect="'creative'"
      :navigation="{
        nextEl: '.brand-button-next',
        prevEl: '.brand-button-prev',
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
      <SwiperSlide v-for="brand in brands.Brand" :key="brand._id">
        <img :src="brand.image" alt="" lazy="loading" />
      </SwiperSlide>
      <div class="brand-navgation">
        <button class="brand-button-prev">
          <span class="brand-icon-left">p</span>
        </button>

        <button class="brand-button-next">
          <span class="brand-icon-right">n</span>
        </button>
      </div>
    </Swiper>
  </div>
</template>
<style lang="scss" scoped>
@keyframes brandList {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.swiper-brands {
  width: 100%;
  height: 100%;
  position: relative;
  &:hover {
    .brand-navgation {
      display: flex;
      justify-content: space-between;
    }
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .brand-navgation {
    width: 100%;
    display: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    animation: brandList linear 0.4s;

    .brand-button-prev {
      width: 50px;
      height: 50px;
      background-color: #fff;
      border: 1px solid #333;
      border-radius: 5px;
      transform: rotate(45deg);
      position: relative;
      left: -25px;
      .brand-icon-left {
        transform: rotate(-45deg);
        position: absolute;
        top: 7px;
        right: 7px;
        &::before {
          font-size: 30px;
        }
      }
      &:hover {
        width: 50px;
        height: 50px;
        background-color: #333;
        border: 1px solid #333;
        border-radius: 5px;
        transform: rotate(45deg);
        cursor: pointer;
        color: white;
      }
    }
    .brand-button-next {
      width: 50px;
      height: 50px;
      background-color: #fff;
      border: 1px solid #333;
      border-radius: 5px;
      transform: rotate(45deg);
      position: relative;
      left: -7px;
      .brand-icon-right {
        transform: rotate(-45deg);
        position: absolute;
        bottom: 7px;
        left: 7px;
        &::before {
          font-size: 30px;
        }
      }
      &:hover {
        cursor: pointer;
        width: 50px;
        height: 50px;
        background-color: #333;
        border: 1px solid #333;
        border-radius: 5px;
        transform: rotate(45deg);
        color: white;
      }
    }
  }
}
</style>

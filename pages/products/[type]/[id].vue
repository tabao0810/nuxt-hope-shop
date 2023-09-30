<script setup>
import { typePackages } from "@/constants/type-product";
const route = useRoute();
const FormatType = ref(
  Object.keys(typePackages)[
    Object.values(typePackages).findIndex((item) => item == route.params.type)
  ]
);
const { data: ProductDetail, pending: loadProduct } = await useLazyFetch(
  `/api/products/${route.params.id}`
);
const { data: ProductRelated, pending: loading } = await useLazyFetch(
  `/api/products/type/${FormatType.value}`
);
</script>

<template>
  <div class="container">
    <div class="row">
      <!-- Breadcrumb -->
      <div class="blog__icon col-lg-12">
        <div class="blog__icon-link">
          <NuxtLink to="/" class="blog__icon-text">home</NuxtLink>
          <span class="blog__icon-text-active">{{ ProductDetail.name }}</span>
        </div>
      </div>
      <!-- Content -->
      <div class="col-lg-5">
        <LoadingImageSkeleton v-if="loadProduct" style="min-height: 350px" />
        <img
          :src="ProductDetail.image"
          alt=""
          class="w-full"
          loading="lazy"
          @load="loadProduct = false"
          v-show="!loadProduct"
          v-else
        />
      </div>
      <div class="product-detail col-lg-7">
        <h2 class="border-bottom">
          {{ ProductDetail.name }}
        </h2>
        <h6>
          Tình trạng:<span style="color: red" v-if="ProductDetail.quantity > 0">
            Còn hàng ({{ ProductDetail.quantity }} sản phẩm)</span
          ><span style="color: red" v-else>Hết hàng</span>
        </h6>
        <div class="product-detail-price">
          <p>
            {{
              FormatPrice(
                Number(
                  ProductDetail.price -
                    (ProductDetail.price * ProductDetail.sale) / 100
                )
              )
            }}
          </p>
          <span v-if="ProductDetail.isSale == true">
            {{ FormatPrice(ProductDetail.price) }}
          </span>
        </div>
        <div>
          <div class="product-detail-des">
            {{ ProductDetail.description }}
          </div>
        </div>
        <div class="product-detail-option">
          <div class="product-detail">
            <div v-if="ProductDetail.sizeClothing" class="selectSize">
              <p>Size:</p>
              <div
                v-for="(size, index) in ProductDetail.sizesClothing"
                :key="index"
              >
                <input
                  class="checkbox-tools"
                  type="radio"
                  name="tools"
                  :id="size"
                  :value="size"
                  v-model="ProductDetail.sizeClothing"
                />
                <label class="for-checkbox-tools" :for="size">
                  {{ size }}
                </label>
              </div>
            </div>
            <div v-else></div>
          </div>
          <div class="product-detail">
            <div v-if="ProductDetail.sizeShoe" class="selectSize">
              <p>Size:</p>
              <div
                v-for="(sizeShoe, index) in ProductDetail.sizesShoe"
                :key="index"
              >
                <input
                  class="checkbox-tools"
                  type="radio"
                  name="tools"
                  :id="sizeShoe"
                  :value="sizeShoe"
                  v-model="ProductDetail.sizeShoe"
                />
                <label class="for-checkbox-tools" :for="sizeShoe">
                  {{ sizeShoe }}
                </label>
              </div>
            </div>
            <div v-else></div>
          </div>
          <div class="product-detail">
            <div v-if="ProductDetail.color" class="selectColor">
              <p style="margin: 0; font-size: 20px; font-weight: 500">
                Màu sắc:
              </p>
              <div class="selectColor-pick">
                <div
                  v-for="(color, index) in ProductDetail.colors"
                  :key="index"
                >
                  <input
                    class="pickColor"
                    type="radio"
                    name="color"
                    :id="color"
                    :value="color"
                    v-model="ProductDetail.color"
                  />
                  <label class="pickColorLabel" :for="color"
                    ><span :class="color"></span
                  ></label>
                </div>
              </div>
            </div>
            <div v-else></div>
          </div>
          <div class="product-detail mt-3"></div>
          <div class="product-detail mt-3">
            <label for="">Số lượng</label>
            <input
              type="number"
              style="outline: none; padding: 4px 10px; width: 200px"
              v-model="ProductDetail.amount"
              min="1"
              :max="ProductDetail.quantity"
            />
          </div>
          <div class="product-detail-button">
            <button
              @click="handleBuy(ProductDetail)"
              :disabled="ProductDetail.quantity === 0"
            >
              <span style="font-size: 14px">MUA NGAY</span>
            </button>
            <button @click="handleWishList(ProductDetail)">TYM</button>
          </div>
        </div>
      </div>
      <!-- Related -->

      <Swiper
        :modules="[SwiperNavigation, SwiperEffectCreative]"
        :slides-per-view="4"
        :spaceBetween="20"
        :loop="true"
        :effect="'creative'"
        :navigation="true"
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
        <SwiperSlide v-for="product in ProductRelated" :key="product._id">
          <div>
            <ProductItem class="" :productDetail="product" :Loading="loading" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$colors: (
  red: #ff343b,
  blue: #2185d0,
  pink: #e03997,
  black: black,
  gray: gray,
  white: white,
);
.blog__icon-text-active {
  &::before {
    left: 40px !important;
  }
}
.product-detail {
  text-align: left;

  select {
    display: block;
    width: 100%;
    background: #fff none repeat scroll 0 0;
    padding: 8px 10px;
    outline: none;
  }
}
.product-detail-price {
  display: flex;
  align-items: center;
  p {
    font-size: 26px;
    color: #ff343b;
    font-weight: 500;
    margin-bottom: 0;
  }
  span {
    font-size: 18px;
    text-decoration: line-through;
    color: #8f8f8f;
    margin-left: 8px;
  }
}
.product-detail-des {
  width: 100%;
  text-align: justify;
  font-size: 16px;
  line-height: 1.6;
  margin: 8px 0px;
  white-space: pre-line;
}
.product-detail-option {
  background: #f4f9ea none repeat scroll 0 0;
  border: 1px solid #dddddd;
  padding: 24px;
  border-radius: 8px;
}
.product-detail-button {
  button {
    display: block;
    min-width: 180px;
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #fff;
    border: black 1px solid;
    cursor: pointer;
    &:hover {
      color: #ff343b;
      border: #ff343b 1px solid;
      transition: all 0.3s linear;
    }
  }
}
// Pick color
.selectColor {
  display: flex;
  align-items: center;
  .selectColor-pick {
    display: flex;
    margin-left: 10px;
  }
}
// .pickColor {
//   display: none;
//   &:checked + label {
//     span {
//       transform: scale(1.25);
//     }
//     @each $name, $value in $colors {
//       .#{$name} {
//         border: 2px solid darken($value, 100%);
//       }
//     }
//   }
// }

// .pickColorLabel {
//   display: inline-block;
//   width: 30px;
//   height: 30px;
//   margin-right: 10px;
//   cursor: pointer;
//   &:hover {
//     span {
//       transform: scale(1.25);
//     }
//   }
//   span {
//     display: block;
//     width: 100%;
//     height: 100%;
//     border-radius: 50%;
//     transition: transform 0.2s ease-in-out;
//     @each $name, $value in $colors {
//       &.#{$name} {
//         background: $value;
//       }
//     }
//   }
// }
// Pick size
.selectSize {
  display: flex;
  align-items: center;
}
.selectSize > p {
  font-size: 20px;
  font-weight: 500;
}

[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
  width: 0;
  height: 0;
  visibility: hidden;
}

.checkbox-tools:checked + label,
.checkbox-tools:not(:checked) + label {
  position: relative;
  display: inline-block;
  padding: 6px;
  min-width: 50px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  margin: 0 auto;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  text-transform: uppercase;
  color: white;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
  font-weight: bold;
}
.checkbox-tools:not(:checked) + label {
  background-color: #353746;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.checkbox-tools:checked + label {
  background-color: #dc3545;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-tools:not(:checked) + label:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-tools:checked + label::before,
.checkbox-tools:not(:checked) + label::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-image: linear-gradient(90deg, #f86983, var(--red));
  z-index: -1;
}
.product-detail-des {
  width: 100%;
  text-align: justify;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 10px 0px;
  white-space: pre-line;
}
// .swiper-related-product {
//   height: 400px;
// }
</style>

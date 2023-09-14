// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/css/tailwind.css",
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/scss/GlobalStyle.scss",
  ],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-swiper"],
  swiper: {
    prefix: "Swiper",
    styleLang: "scss",
    modules: ["navigation", "pagination", "autoplay", "effect-creative"],
  },
  app: {
    head: {
      title: "Hope-shop",
      meta: [
        {
          name: "description",
          content: "Trang web bán hàng thời trang",
        },
      ],
    },
  },
});

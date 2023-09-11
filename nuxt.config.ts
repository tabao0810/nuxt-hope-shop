// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/scss/GlobalStyle.scss"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-swiper"],
  swiper: {
    prefix: "Swiper",
    styleLang: "scss",
    modules: ["navigation", "pagination", "autoplay"],
  },
});

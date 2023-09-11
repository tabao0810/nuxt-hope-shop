export default defineEventHandler(async () => {
  const products = await $fetch("https://hope-shope.glitch.me/api/product/get");
  return products;
});

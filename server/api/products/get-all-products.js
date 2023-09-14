export default defineEventHandler(async () => {
  const products = await $fetch(`${process.env.BASE_URL}/api/product/get`);
  return products;
});

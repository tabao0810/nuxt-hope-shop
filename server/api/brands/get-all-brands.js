export default defineEventHandler(async () => {
  const brands = await $fetch(`${process.env.BASE_URL}/api/brands`);
  return brands;
});

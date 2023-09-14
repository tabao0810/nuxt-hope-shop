export default defineEventHandler(async () => {
  const banners = await $fetch(`${process.env.BASE_URL}/api/banners`);
  return banners;
});

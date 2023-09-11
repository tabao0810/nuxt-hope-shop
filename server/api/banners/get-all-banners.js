export default defineEventHandler(async () => {
  const banners = await $fetch("https://hope-shope.glitch.me/api/banners");
  return banners;
});

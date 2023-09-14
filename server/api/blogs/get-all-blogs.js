export default defineEventHandler(async () => {
  const blogs = await $fetch(`${process.env.BASE_URL}/api/blogs`);
  return blogs;
});

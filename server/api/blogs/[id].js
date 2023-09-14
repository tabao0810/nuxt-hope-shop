export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const BlogDetail = await $fetch(`${process.env.BASE_URL}/api/blogs/${id}`);
  return BlogDetail.Blog;
});

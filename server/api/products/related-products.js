export default defineEventHandler(async (event) => {
  const type = getRouterParam(event, "type");
  const ProductRelated = await $fetch(
    `${process.env.BASE_URL}/api/product/related/${type}`
  );
  return ProductRelated.Product;
});

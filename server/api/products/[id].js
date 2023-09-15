export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const ProductDetail = await $fetch(
    `${process.env.BASE_URL}/api/product/${id}`
  );
  return ProductDetail.Product;
});

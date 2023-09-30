export default defineEventHandler(async (event) => {
  const type = getRouterParam(event, "type");
  let ProductRelated;
  if (type === "all") {
    ProductRelated = await $fetch(`${process.env.BASE_URL}/api/product/get`);
  } else {
    ProductRelated = await $fetch(
      `${process.env.BASE_URL}/api/product/type/${type}`
    );
  }

  return ProductRelated.Product;
});

import { defineStore } from "pinia";
export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      productList: [],
    };
  },
  actions: {
    async getAllProducts() {
      await useFetch("/api/products/get-all-products")
        .then((res) => {
          console.log(res.data.value);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});

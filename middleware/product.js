import { typePackages } from "@/constants/type-product";

export default defineNuxtRouteMiddleware((to, from) => {
  if (!Object.values(typePackages).includes(to.params.type)) {
    return navigateTo("/error");
  }
});

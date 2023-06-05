import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import AddProduct from "../components/AddProduct.vue";
import EditProduct from "../components/EditProduct.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/add",
      component: AddProduct,
    },
    {
      path: "/edit/:id",
      component: EditProduct,
    },
  ],
});

export default router;

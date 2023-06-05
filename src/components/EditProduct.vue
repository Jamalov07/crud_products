<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <!-- Main modal -->
    <div
      id="updateProductModal"
      tabindex="-1"
      aria-hidden="true"
      class="overflow-y-auto overflow-x-hidden justify-center items-center md:inset-0 h-modal md:h-auto bg-blue-600 rounded-lg"
    >
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div
          class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"
        >
          <!-- Modal header -->
          <div
            class="flex justify-center items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600"
          >
            <h3 class="text-lg text-blue-600 font-semibold dark:text-white">
              Update Product
            </h3>
          </div>
          <!-- Modal body -->
          <form action="#" @submit.prevent="update()">
            <div class="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Name</label
                >
                <input
                  type="text"
                  name="name"
                  id="name"
                  v-model="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Ex. Apple iMac 27&ldquo;"
                />
              </div>
              <div>
                <label
                  for="brand"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Brand</label
                >
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  v-model="brand"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Ex. Apple"
                />
              </div>
              <div>
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Price</label
                >
                <input
                  type="number"
                  v-model="price"
                  name="price"
                  id="price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$299"
                />
              </div>
              <div>
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Category</label
                >
                <select
                  id="category"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option
                    :selected="category === 'TV/Monitors' ? true : false"
                    value="TV/Monitors"
                  >
                    TV/Monitors
                  </option>
                  <option
                    :selected="category === 'PC' ? true : false"
                    value="PC"
                  >
                    PC
                  </option>
                  <option
                    :selected="category === 'Gaming/Console' ? true : false"
                    value="Gaming/Console"
                  >
                    Gaming/Console
                  </option>
                  <option
                    :selected="category === 'Phones' ? true : false"
                    value="Phones"
                  >
                    Phones
                  </option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Description</label
                >
                <textarea
                  v-model="description"
                  id="description"
                  rows="15"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write a description..."
                  >{{ description }}</textarea
                >
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <button
                type="submit"
                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Update product
              </button>

              <router-link to="/" @click="reset()">
                <button
                  type="button"
                  class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  <i class="bx bx-x"></i>
                  Cancel
                </button>
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { initFlowbite } from "flowbite";
import { toast } from "vue3-toastify";
const products = ref([]);
const router = useRoute();
const Router = useRouter();
let name = ref("");
let brand = ref("");
let price = ref(null);
let description = ref("");
let category = ref("");
const productId = ref(null);
let errorMessage = ref("");

onMounted(() => {
  initFlowbite();
  console.log(router);
  productId.value = router.params.id;
  console.log(productId.value);

  products.value = JSON.parse(localStorage.getItem("products")) || [];
  console.log(products.value);
  if (products.value.length) {
    products.value.forEach((pr) => {
      if (pr.id === +productId.value) {
        name.value = pr.name;
        brand.value = pr.brand;
        price.value = pr.price;
        description.value = pr.description;
        category.value = pr.category;
      }
    });
  }
});

function update() {
  console.log(
    name.value,
    brand.value,
    price.value,
    description.value,
    category.value
  );
  if (
    !name.value ||
    !brand.value ||
    !price.value ||
    !description.value ||
    !category.value
  ) {
    toast.error("Please Enter the information");
  } else {
    if (products.value.length) {
      products.value.forEach((pr) => {
        if (pr.id === +productId.value) {
          pr.name = name.value;
          pr.brand = brand.value;
          pr.price = price.value;
          pr.description = description.value;
          pr.category = category.value;
        }
      });
    }
    reset();
    localStorage.setItem("products", JSON.stringify(products.value));
    toast.success("Product successfully updated");
    Router.push("/");
  }
}

function reset() {
  name.value = "";
  brand.value = "";
  price.value = "";
  description.value = "";
  category.value = "";
}
</script>

<style scoped></style>

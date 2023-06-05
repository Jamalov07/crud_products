<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <!-- Main modal -->
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="overflow-y-auto bg-blue-600 rounded-lg overflow-x-hidden justify-center items-center md:inset-0"
    >
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div
          class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"
        >
          <!-- Modal header -->
          <div
            class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600"
          >
            <h3
              class="text-lg text-blue-600 font-semibold w-full text-center dark:text-white"
            >
              Add Product
            </h3>
          </div>
          <!-- Modal body -->
          <form action="#" @submit.prevent="addProduct()">
            <div class="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Name *</label
                >
                <input
                  v-model="name"
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                />
              </div>
              <div>
                <label
                  for="brand"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Brand *</label
                >
                <input
                  v-model="brand"
                  type="text"
                  name="brand"
                  id="brand"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Product brand"
                />
              </div>
              <div>
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Price *</label
                >
                <input
                  v-model="price"
                  type="number"
                  name="price"
                  id="price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="4999"
                  min="0"
                />
              </div>
              <div>
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Category *</label
                >
                <select
                  @change="(e) => setCategory(e)"
                  id="category"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select category</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Description *</label
                >
                <textarea
                  v-model="description"
                  id="description"
                  rows="16"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write product description here"
                ></textarea>
              </div>
            </div>

            <div class="w-full flex justify-between items-center">
              <div class="w-1/2">
                <p class="capitalize text-red-600 text-md" v-if="errorMessage">
                  fill in the informations!
                </p>
              </div>
              <div class="w-1/2 flex justify-end gap-2 text-xl">
                <router-link to="/" @click="reset()">
                  <button
                    type="button"
                    class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    <i class="bx bx-x text-xl"></i>
                    Cancel
                  </button>
                </router-link>
                <!--  -->
                <button
                  type="submit"
                  class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <i class="bx bx-check text-xl"></i>
                  Confirm
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
let router = useRouter();

let name = ref("");
let brand = ref("");
let price = ref(null);
let description = ref("");
let category = ref("");
let errorMessage = ref("");

function setCategory(e) {
  category.value = e.target.value;
}

function addProduct() {
  const options = {
    id: Date.now(),
    name: name.value,
    brand: brand.value,
    price: price.value,
    description: description.value,
    category: category.value,
  };
  console.log(options);

  if (
    !name.value ||
    !brand.value ||
    !price.value ||
    !description.value ||
    !category.value
  ) {
    errorMessage.value = "error ";
  } else {
    errorMessage.value = "";
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(options);
    localStorage.setItem("products", JSON.stringify(products));
    router.push("/");
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

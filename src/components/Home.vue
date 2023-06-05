<template>
  <section class="bg-gray-50 py-2 dark:bg-gray-900 w-screen flex items-center">
    <div class="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">
      <!-- Start coding here -->
      <div class="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <div
          class="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4"
        >
          <div class="w-full md:w-2/3">
            <form class="flex items-center">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  @input="(e) => search(e.target.value)"
                  type="text"
                  id="simple-search"
                  class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search by name"
                  required=""
                />
              </div>
            </form>
          </div>
          <div
            class="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3"
          >
            <router-link to="/add">
              <button
                type="button"
                class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 w-full"
              >
                <svg
                  class="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Add product
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  -->
  <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
    <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
      <!-- Start coding here -->
      <div
        class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden"
      >
        <div class="overflow-x-auto">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-4 py-3">Product name</th>
                <th scope="col" class="px-4 py-3">Category</th>
                <th scope="col" class="px-4 py-3">Brand</th>
                <th scope="col" class="px-4 py-3">Description</th>
                <th scope="col" class="px-4 py-3">Price</th>
                <th scope="col" class="px-4 py-3">
                  <span class="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="border-b dark:border-gray-700"
                v-for="(pr, index) in products"
              >
                <th
                  scope="row"
                  class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ pr.name }}
                </th>
                <td class="px-4 py-3">{{ pr.category }}</td>
                <td class="px-4 py-3">{{ pr.brand }}</td>
                <td class="px-4 py-3">{{ pr.description }}</td>
                <td class="px-4 py-3">${{ pr.price }}</td>
                <td class="px-4 py-3 flex items-center justify-end">
                  <ul
                    class="py-1 text-white text-sm flex gap-1 dark:text-gray-200"
                    aria-labelledby="apple-imac-27-dropdown-button"
                  >
                    <li>
                      <router-link
                        :to="`/edit/${pr.id}`"
                        class="block bg-blue-600 rounded-md m-1 py-2 px-4 hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <div class="flex gap-1 items-center">
                          <h1>Edit</h1>
                          <i class="bx bxs-edit"></i>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block bg-red-600 rounded-md m-1 py-2 px-4 hover:bg-red-500 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <div class="flex gap-1 items-center">
                          <button
                            type="button"
                            data-modal-target="popup-modal"
                            data-modal-toggle="popup-modal"
                          >
                            Delete
                          </button>
                          <i class="bx bx-box"></i>
                        </div>
                        <div
                          id="popup-modal"
                          tabindex="-1"
                          class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                        >
                          <div class="relative w-full max-w-md max-h-full">
                            <div
                              class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                            >
                              <button
                                type="button"
                                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                data-modal-hide="popup-modal"
                              >
                                <svg
                                  aria-hidden="true"
                                  class="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                <span class="sr-only">Close modal</span>
                              </button>
                              <div class="p-6 text-center">
                                <svg
                                  aria-hidden="true"
                                  class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  ></path>
                                </svg>
                                <h3
                                  class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
                                >
                                  Are you sure you want to delete this product?
                                </h3>
                                <button
                                  @click="deleteProduct(pr.id)"
                                  data-modal-hide="popup-modal"
                                  type="button"
                                  class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                                >
                                  Yes, I'm sure
                                </button>
                                <button
                                  data-modal-hide="popup-modal"
                                  type="button"
                                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                >
                                  No, cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <div
                v-if="!products.length"
                class="w-full p-4 text-red-600 font-medium"
              >
                Products not found!
              </div>
            </tbody>
          </table>
        </div>

        <!--  -->

        <!--  -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUpdated } from "vue";
import { initFlowbite } from "flowbite";

let products = ref([]);

onMounted(() => {
  initFlowbite();
  products.value = JSON.parse(localStorage.getItem("products")) || [];
  console.log(products.value);
});

onUpdated(() => {
  initFlowbite();
});

function deleteProduct(id) {
  let prods = [];
  products.value.forEach((pr) => {
    if (pr.id !== id) {
      prods.push(pr);
    }
  });
  products.value = prods;
  localStorage.setItem("products", JSON.stringify(products.value));
}

function search(val) {
  products.value = JSON.parse(localStorage.getItem("products"));
  console.log(1111, val);
  if (val.length) {
    let prods = [];
    products.value.forEach((pr) => {
      if (pr.name.slice(0, val.length).toLowerCase() == val.toLowerCase()) {
        prods.push(pr);
      }
    });
    products.value = prods;
  } else {
    products.value = JSON.parse(localStorage.getItem("products"));
  }
}
</script>

<style scoped></style>

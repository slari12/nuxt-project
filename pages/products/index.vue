<template>
  <div class="flex products pb-10">
    <div id="mySidebar" class="header z-10 side-bar" v-if="isHidden">
      <div class="flex justify-between">
        <p class="title mt-10 mb-5 font-bold text-5xl text-green-500">
          BSection
        </p>
        <button v-on:click="isHidden = false">
          <IconsClose class="mt-5 cursor-pointer close-btn" />
        </button>
      </div>
      <div class="head-right">
        <div class="search relative w-full">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            v-model="search"
            placeholder="Search"
            name=""
            class="mt-2 searchin bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
        </div>

        <div class="sorting mt-5">
          <p class="text-gray-900 filter-title">Sort by:</p>
          <div class="dropdown">
            <select
              id="categories"
              v-model="sort"
              class="dropdown bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            >
              <option value="">Default</option>
              <option>Rating</option>
              <option>Price (Cheapest to Most Expensive)</option>
              <option>Price (Most Expensive to Cheapest)</option>
              <option>Alphabetical</option>
            </select>
          </div>
        </div>

        <div>
          <p class="category text-gray-900 mt-5 filter-title">
            Filter by Category:
          </p>
          <div class="category">
            <select
              id="categories"
              v-model="category"
              class="dropdown bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            >
              <option value="">All</option>
              <option v-for="cate in filteredCategories">
                {{ cate }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <button
      v-on:click="isHidden = !isHidden"
      class="absolute mx-9 my-5 bg-white rounded-full shadow-[1px_1px_6px_0px_#00000024] cursor-pointer"
    >
      <IconsArrowLeft class="p-3" />
    </button>

    <div class="mx-auto" id="main">
      <LayoutsNavigation class="mx-auto" />
      <div
        class="grid grid-cols-2 md:grid-cols-3 gap-4 border-b border-gray-200"
      >
        <div
          v-for="product in filteredList()"
          :key="product.id"
          class="card-btn bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <img
            class="rounded-t-lg img flex justify-center w-full mb-1 lg:mb-2"
            :src="product.thumbnail"
          />

          <div class="lg:px-3 px-2">
            <a href="#">
              <h5
                class="text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1"
              >
                {{ product.title }}
              </h5>
            </a>
            <p
              class="hidden md:inline-flex font-normal text-gray-700 dark:text-gray-400 line-clamp-3"
            >
              {{ product.description }}
            </p>

            <div
              class="flex bot-div justify-between lg:w-[225px] md:w-full w-[150px] items-end"
            >
              <div class="">
                <div class="flex">
                  <LayoutsRating />
                  <span
                    class="rating text-green-800 ml-2 text-xs font-medium rounded dark:text-green-300"
                  >
                    {{ product.rating }}</span
                  >
                </div>
                <p
                  class="md:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  ${{ product.price }}
                </p>
              </div>

              <NuxtLink :to="`/products/${product.id}`">
                <div
                  class="cart-icon hidden md:inline-flex px-3 py-2 text-sm font-medium text-white rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  View Details
                </div>
                <div
                  class="cart-icon md:hidden inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  <IconsCarts class="icon-cart" />
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const { data: products } = await useProduct();
const isHidden = useShow();
const search = ref("");
const sort = ref("");
const category = ref("");

const filteredCategories = computed(() => {
  const nonDuplicatedValues = new Set();
  products.value.forEach((element) => {
    nonDuplicatedValues.add(element.category);
  });
  return Array.from(nonDuplicatedValues);
});

function filteredList() {
  let filteredItems = this.products;
  if (this.category) {
    filteredItems = filteredItems.filter(
      (product) => product.category === this.category
    );
  }
  if (this.sort === "Alphabetical") {
    filteredItems = filteredItems.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
  }
  if (this.sort === "Price (Cheapest to Most Expensive)") {
    filteredItems = filteredItems.sort((a, b) => {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    });
  }
  if (this.sort === "Rating") {
    filteredItems = filteredItems.sort((a, b) => {
      if (a.rating < b.rating) return -1;
      if (a.rating > b.rating) return 1;
      return 0;
    });
  }
  if (this.sort === "Price (Most Expensive to Cheapest)") {
    filteredItems = filteredItems.sort((a, b) => {
      if (b.price < a.price) return -1;
      if (b.price > a.price) return 1;
      return 0;
    });
  }
  if (this.search) {
    filteredItems = filteredItems.filter((product) =>
      product.title.toLowerCase().includes(this.search.toLowerCase())
    );
  }
  return filteredItems;
}
</script>

<style>
.dropdown {
  height: 30px;
}
.products {
  background-color: #f4f9fc;
}
.header {
  padding: 0 20px;
  background-color: #fff;
  height: 100vh;
  position: fixed;
}
.dropdown {
  width: 200px;
}
.category,
title,
label {
  font-size: 11px;
}
.filter-title {
  margin-top: 20px;
}
.searchin {
  width: 200px;
  height: 30px;
}
.img {
  height: 150px;
}
.card-btn {
  position: relative;
  margin: auto;
  width: 250px;
  height: 300px;
  @media (max-width: 700px) {
    width: 170px;
    height: 250px;
  }
}
.bottom-btn {
  background-color: #443c68;
}
.bot-div {
  position: absolute;
  bottom: 10px;
}
.cart-icon {
  background-color: #0e9f6e;

  @media (max-width: 700px) {
    width: 30px;
    height: 30px;
    align-items: center;
    padding: 0 4px;
  }
}

.card {
  background-color: #f1f6f9;
}
</style>

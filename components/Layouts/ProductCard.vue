<template>
  <div class="section card">
    <div class="flex">
      <LayoutsNavigation class="mx-auto" />
    </div>
    <div class="grid grid-cols-4 md:grid-cols-3 gap-4 border-b border-gray-200">
      <div
        v-for="product in products"
        :key="product.id"
        class="card-btn bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <img
          class="rounded-t-lg img flex justify-center w-full mb-1 lg:mb-5"
          :src="product.thumbnail"
        />

        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ product.title }}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ product.description }}
          </p>
          <div class="bot-div">
            <div class="flex justify-between w-full">
              <p
                class="mr-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                ${{ product.price }}
              </p>

              <NuxtLink :to="`/products/${product.id}`">
                <div
                  class="cart-icon inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  View Details
                  <IconsArrowRight class="ml-2" />
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
const { data: products } = await useProduct();
</script>

<style>
.searchin {
  width: 400px;
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
  margin-left: 100px;
}

.section {
  background-color: #f1f6f9;
  margin: 0 auto;
}
.side-nav {
  background-color: #fff;
  height: 100%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
}
.card {
  background-color: #f1f6f9;
}
</style>

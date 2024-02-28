<template>
  <div>
    <button
      @click="isOpen = true"
      data-modal-target="popup-modal"
      data-modal-toggle="popup-modal"
      type="button"
    >
      <IconsTrash />
    </button>

    <div
      v-show="isOpen"
      @click="isOpen = false"
      class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
    >
      <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl text-center">
        <div>
          <img src="../../assets/img/error.png" class="img svg" />
        </div>
        <div>
          <h3 class="text-2xl text-red-500 font-bold text-center">
            Successfully removed to cart!
          </h3>
        </div>
        <div class="mt-4">
          <p class="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsum
            recusandae quas pariatur distinctio. Voluptatibus, error?
          </p>
          <button
            @click="isOpen = false"
            class="px-6 py-5 mt-10 text-blue-100 rounded-lg w-full bg-red-500"
          >
            <NuxtLink to="/products/add-to-cart">Got it!</NuxtLink>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useCart } from "#imports";
const { productCountMap } = useCart();
let isOpen = ref(false);
</script>
<style>
.svg {
  margin: 0px auto;
  display: block;
  width: 200px;
  height: 200px;
}
</style>

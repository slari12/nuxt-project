<template>
  <div>
    <button
      @click="isOpen = true"
      data-modal-target="popup-modal"
      data-modal-toggle="popup-modal"
      class="flex text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        class="mr-1"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.738.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1V2h3.25l.95 2Z"
        />
      </svg>
      Add to Cart
    </button>

    <div
      v-show="isOpen"
      @click="isOpen = false"
      class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
    >
      <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl text-center">
        <div>
          <svg
            class="svg"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="200"
            height="200"
            viewBox="0 0 100 100"
          >
            <path
              fill="#e6edb7"
              d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"
            ></path>
            <path
              fill="#88ae45"
              d="M13 27A2 2 0 1 0 13 31A2 2 0 1 0 13 27Z"
            ></path>
            <path
              fill="#f1bc19"
              d="M77 12A1 1 0 1 0 77 14 1 1 0 1 0 77 12zM83 11A4 4 0 1 0 83 19 4 4 0 1 0 83 11z"
            ></path>
            <path
              fill="#88ae45"
              d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"
            ></path>
            <path
              fill="#fbcd59"
              d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"
            ></path>
            <path
              fill="#88ae45"
              d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"
            ></path>
            <path
              fill="#fff"
              d="M18.5 51A2.5 2.5 0 1 0 18.5 56A2.5 2.5 0 1 0 18.5 51Z"
            ></path>
            <path
              fill="#f1bc19"
              d="M21 66A1 1 0 1 0 21 68A1 1 0 1 0 21 66Z"
            ></path>
            <path
              fill="#fff"
              d="M80 33A1 1 0 1 0 80 35A1 1 0 1 0 80 33Z"
            ></path>
            <g>
              <path
                fill="#88ae45"
                d="M50 26.042A23.958 23.958 0 1 0 50 73.958A23.958 23.958 0 1 0 50 26.042Z"
              ></path>
              <path
                fill="#472b29"
                d="M50,26.4c13.013,0,23.6,10.587,23.6,23.6S63.013,73.6,50,73.6S26.4,63.013,26.4,50 S36.987,26.4,50,26.4 M50,25c-13.807,0-25,11.193-25,25s11.193,25,25,25s25-11.193,25-25S63.807,25,50,25L50,25z"
              ></path>
              <path
                fill="#fdfcef"
                d="M50 30.5A19.5 19.5 0 1 0 50 69.5A19.5 19.5 0 1 0 50 30.5Z"
              ></path>
              <path
                fill="#472b29"
                d="M69.762,46.954c-0.043-0.273-0.298-0.46-0.571-0.418c-0.273,0.042-0.461,0.297-0.417,0.571 c0.931,5.976-1.054,12.082-5.309,16.334c-7.417,7.412-19.485,7.412-26.902,0c-7.417-7.411-7.417-19.471,0-26.883 c7.417-7.411,19.485-7.411,26.902,0c0.778,0.778,1.493,1.642,2.186,2.641c0.158,0.227,0.469,0.284,0.697,0.126 c0.225-0.155,0.283-0.468,0.126-0.696c-0.728-1.049-1.481-1.958-2.302-2.778c-7.807-7.801-20.51-7.802-28.318,0 c-7.807,7.802-7.807,20.496,0,28.298c7.807,7.801,20.51,7.802,28.318,0C68.653,59.672,70.743,53.244,69.762,46.954z"
              ></path>
              <path
                fill="#472b29"
                d="M67.569,42.796c0.105,0.256,0.398,0.378,0.653,0.273c0.254-0.104,0.378-0.396,0.272-0.652 c-0.315-0.766-0.609-1.395-0.926-1.977c-0.132-0.243-0.436-0.332-0.679-0.2c-0.043,0.023-0.082,0.053-0.115,0.086 c-0.153,0.153-0.194,0.393-0.086,0.593C66.989,41.468,67.269,42.065,67.569,42.796z"
              ></path>
            </g>
            <g>
              <path
                fill="#88ae45"
                d="M41,48.375c-0.434,0-0.842,0.169-1.149,0.476c-0.307,0.307-0.476,0.715-0.476,1.149 s0.169,0.842,0.476,1.149l7,7c0.307,0.307,0.715,0.476,1.149,0.476V59l0.031-0.375c0.445-0.009,0.869-0.201,1.167-0.526l11-12 c0.293-0.32,0.444-0.735,0.426-1.169c-0.019-0.434-0.206-0.833-0.525-1.127c-0.321-0.293-0.728-0.45-1.169-0.426 c-0.433,0.019-0.833,0.205-1.126,0.525l-9.854,10.749l-5.8-5.8C41.842,48.544,41.434,48.375,41,48.375z"
              ></path>
              <path
                fill="#472b29"
                d="M59,43.75L59,43.75c0.313,0,0.613,0.117,0.845,0.329c0.246,0.226,0.389,0.533,0.404,0.867 c0.014,0.334-0.102,0.653-0.328,0.899l-11,12c-0.229,0.25-0.555,0.398-0.921,0.405c-0.334,0-0.648-0.13-0.884-0.366l-7-7 C39.88,50.648,39.75,50.334,39.75,50s0.13-0.648,0.367-0.884C40.352,48.88,40.666,48.75,41,48.75s0.648,0.13,0.884,0.366 l5.523,5.523l0.554,0.554l0.529-0.577l9.589-10.461C58.318,43.894,58.645,43.75,59,43.75 M59,43c-0.541,0-1.08,0.218-1.474,0.649 l-9.589,10.46l-5.523-5.523C42.024,48.195,41.512,48,41,48s-1.024,0.195-1.414,0.586c-0.781,0.781-0.781,2.047,0,2.828l7,7 C46.961,58.79,47.47,59,48,59c0.015,0,0.029,0,0.043,0c0.545-0.012,1.062-0.246,1.431-0.648l11-12 c0.747-0.814,0.691-2.08-0.123-2.826C59.967,43.174,59.483,43,59,43L59,43z"
              ></path>
            </g>
          </svg>
        </div>
        <div>
          <h3 class="text-2xl text-green-500 font-bold text-center">
            Successfully added to cart!
          </h3>
        </div>
        <div class="mt-4">
          <p class="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsum
            recusandae quas pariatur distinctio. Voluptatibus, error?
          </p>
          <button
            @click="isOpen = false"
            class="px-6 py-5 mt-10 text-blue-100 rounded-lg w-full bg-green-500"
          >
            <NuxtLink to="/products/add-to-cart"
              >Got it, check My Cart</NuxtLink
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useCart, useRoute } from "#imports";
const { id: productId } = useRoute().params;

const { productCountMap } = useCart();
const currentProductCount = computed(() => productCountMap[productId] ?? 0);

let isOpen = ref(false);
</script>
<style>
.svg {
  margin: 0px auto;
  display: block;
}
</style>

<template>
  <div class="product-details py-20">
    <div class="flex">
      <NuxtLink to="/products/add-to-cart" class="absolute right-10 top-1">
        <div
          class="absolute bg-green-100 text-green-500 px-2 rounded-full text-sm right-0 top-1"
        >
          {{ totalProductCount }}
        </div>
        <div class="bg-green-500 p-3 rounded-full mt-3">
          <IconsCarts /></div
      ></NuxtLink>
      <NuxtLink to="/products" class="absolute right-20 mx-7 top-1"
        ><div class="bg-green-500 p-3 rounded-full mt-3">
          <IconsHome /></div
      ></NuxtLink>
    </div>
    <div class="card md:flex md:justify-between md:mx-auto rounded-2xl">
      <img :src="product?.thumbnail" class="img-id" alt="" />

      <div class="content">
        <div class="flex justify-between items-center text-4xl">
          <h2>{{ product?.title }}</h2>
          <span
            class="text-xl bg-yellow-100 text-yellow-800 :sm(text-sm) font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
            >{{ product?.discountPercentage }}% off</span
          >
        </div>

        <p class="text-2xl mt-1">Price: ${{ product?.price }}</p>
        <p class="mt-5">
          {{ product?.description }}
        </p>
        <p class="mt-5 mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          reprehenderit impedit provident id quia! Error cumque adipisci amet ea
          voluptates aut alias, minima dolorem possimus sint laborum minus
          doloremque ipsam.
        </p>
        <div class="flex items-center justify-between">
          <Quantity />
          <LayoutsCartButton type="button">
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
          </LayoutsCartButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "#imports";
const { id: productId } = useRoute().params;
const { data: product } = await useProduct(productId);
const { productCountMap } = useCart();
const count = useCounter();

const cart = computed(() => {
  return count.value;
});

const totalProductCount = computed(
  () => Object.values(productCountMap).filter(Boolean).length
);
</script>

<style scoped>
.product-details {
  margin: 0px 25%;
  @media (max-width: 700px) {
    margin: 10px 20px;
  }
}
.content {
  @media (max-width: 700px) {
    margin-top: 15px;
  }
}
.card {
  color: black;
  background-color: #fff;
  padding: 20px;
}
.img-id {
  width: 340px;
  height: 240px;
  margin-right: 20px;
  border-radius: 10px;
}
</style>

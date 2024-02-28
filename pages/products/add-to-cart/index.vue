<template>
  <div class="cart">
    <LayoutsNavigation />

    <div class="cart-section mx-auto py-10 px-8 rounded-lg">
      <div class="flex justify-between">
        <div class="flex align-middle">
          <NuxtLink to="/products"
            ><div class="bg-green-500 p-2 rounded-full mr-3 mt-1">
              <IconsBack /></div
          ></NuxtLink>
          <h2 class="text-3xl mb-10 font-bold text-green-400">My Cart</h2>
        </div>
        <a
          href="#"
          @click="handleRemove"
          ref="input"
          class="text-green-400 font-bold hover:underline"
          >clear all items
        </a>
      </div>
      <ul v-for="product in productList" :key="product.id">
        <li class="mb-5 flex justify-between items-center">
          <div class="flex items-center">
            <img :src="product.thumbnail" class="img-id" alt="" />
            <div>
              <span class="font-bold">{{ product?.name }}</span>
              <br />
              <span>quantity: {{ product.count }}</span>
            </div>
          </div>
          <button class="add" @click="" ref="input">
            <LayoutsClearButton />
          </button>
        </li>
      </ul>
      {{ JSON.stringify(productList) }}
    </div>
  </div>
</template>

<script setup>
const { id: productId } = useRoute().params;
const { productCountMap } = useCart();

const { data: productList } = useAsyncData(async () => {
  const promiseList = Object.keys(productCountMap)
    .filter((productId) => productCountMap[productId] > 0)
    .map(async (productId) => {
      console.log("productId", productId);
      const { data } = await useProduct(Number(productId));
      const name = data.value.title;
      console.log(name);
      return {
        productId,
        name,
        count: productCountMap[productId],
      };
    });
  const results = await Promise.allSettled(promiseList);
  return results.filter((r) => r.status === "fulfilled").map((r) => r.value);
});
const currentProductCount = computed(() => productCountMap[productId] ?? 0);

//delete items in cart list ssr
const handleRemove = () => {
  productList.value = undefined; //not permanent, changes does not last when refreshed CSR
};
</script>

<style>
div {
  color: black;
}
.cart {
  background-color: #f1f6f9;

  @media (max-width: 700px) {
    margin: 0 20px;
  }
}
.cart-section {
  background-color: #fff;

  @media (min-width: 700px) {
    width: 750px;
  }
}
.img-id {
  width: 100px;
  height: 70px;
  margin-right: 20px;
  border-radius: 10px;
}
</style>

<template>
  <div class="quantity flex items-center">
    <button class="minus" @click="onRemoveButtonClick" ref="input">
      <IconsMinus />
    </button>
    <div
      class="quan px-4 py-1 mx-2 border-solid border border-green-500 rounded-md"
    >
      {{ currentProductCount }}
    </div>
    <button class="add" @click="onAddButtonClick" ref="input">
      <IconsAdd />
    </button>
  </div>
</template>
<script setup>
const { id: productId } = useRoute().params;
const { data: product } = await useProduct();
const { addProduct, productCountMap, removeProduct } = useCart();
const count = useCounter();

const currentProductCount = computed(() => productCountMap[productId] ?? 0);

const onAddButtonClick = () => {
  addProduct(productId);
};
const onRemoveButtonClick = () => {
  removeProduct(productId);
};
</script>
<style></style>

<template>
  <div class="mx-auto">
    <LayoutsNavigation />
    <div class="section rounded-md py-5 px-10">
      <div class="mb-5 pb-3 w-full border-b-2 border-gray-100">
        <h3 class="text-4xl text-gray-500 font-light">About</h3>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate
        omnis sed architecto neque veniam perferendis placeat fugit facilis
        dolorem?
      </p>
    </div>
  </div>
</template>
<script setup></script>
<style>
.section {
  background-color: #fff;
  margin: 0px 20px;
  @media (min-width: 700px) {
    width: 40%;
    margin: 0 auto;
  }
}
</style>

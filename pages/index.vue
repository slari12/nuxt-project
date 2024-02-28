<template>
  <div class="text-center index">
    <LayoutsNavigation />
    <div class="md:hidden mt-5">
      <div class="right">
        <h1 class="mb-8 ml-5 text-5xl title">Nuxt3 E-Commerce</h1>
        <p class="text-gray-600 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quam
          consequuntur corporis repudiandae quo in repellendus! Iure sequi
          itaque, accusamus dignissimos architecto repudiandae tenetur eos,
          nostrum corporis sed laborum? Explicabo?
        </p>
        <button
          type="button"
          class="flex text-xl text-white mt-14 btn hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full tpx-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Shop Now
          <IconsArrowRight class="mt-1 ml-5" />
        </button>
      </div>
      <LayoutsIndexImgs />
    </div>
    <div class="hidden md:flex mt-5">
      <LayoutsIndexImgs />
      <div class="right">
        <h1 class="mb-8 ml-5 text-7xl title">Nuxt3 E-Commerce</h1>
        <p class="text-gray-600 text-2xl ml-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quam
          consequuntur corporis repudiandae quo in repellendus! Iure sequi
          itaque, accusamus dignissimos architecto repudiandae tenetur eos,
          nostrum corporis sed laborum? Explicabo?
        </p>
        <NuxtLink to="/products">
          <button
            type="button"
            class="flex ml-5 text-xl text-white mt-14 btn hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full tpx-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Shop Now
            <IconsArrowRight class="mt-1 ml-5" />
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
.index {
  height: 100vh;
  overflow-y: hidden;
}
.title {
  color: #52795c;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}
.btn {
  background-color: #52795c;
  padding: 10px 20px;
  @media (max-width: 700px) {
    margin: 15px auto;
  }
}
.right {
  @media (min-width: 700px) {
    margin: 250px 120px 0px 50px;
    text-align: left;
  }
  @media (max-width: 700px) {
    text-align: center;
    margin: 40px 40px 55px 40px;
  }
}
</style>

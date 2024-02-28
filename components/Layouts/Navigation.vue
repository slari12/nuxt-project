<template>
  <div class="text-center pt-5 pb-5">
    <nav
      class="flex justify-between align-center py-7 text-gray-500 focus:text-green-500 focus:font-bold"
    >
      <NuxtLink to="/">Home</NuxtLink>
      <!-- <NuxtLink to="/about">About</NuxtLink> -->
      <NuxtLink to="/products">Products</NuxtLink>
      <NuxtLink to="/products/add-to-cart">Cart</NuxtLink>
      <NuxtLink to="/login">Login</NuxtLink>
      <NuxtLink to="/signup">Sign Up</NuxtLink>
    </nav>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<style>
nav {
  width: 450px;
  margin: 0 auto;
  font-size: 12px;
  cursor: pointer;
  @media (max-width: 700px) {
    width: 210px;
  }
}
a.nuxt-link-active {
  font-weight: bold;
}
a.nuxt-link-exact-active {
  color: #52795c;
  font-weight: bold;
}
a:hover,
a:active,
a:focus {
  color: #52795c;
  font-weight: bold;
  text-decoration: underline;
}
</style>

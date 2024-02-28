<template>
  <div class="bg h-screen text-white">
    <NuxtLayout>
      <!-- <header>
      <ul class="flex">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/events">Events</NuxtLink>
        </li>
      </ul>
    </header> -->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.bg {
  background-color: #f1f6f9;
}
body::-webkit-scrollbar {
  display: none;
}
</style>

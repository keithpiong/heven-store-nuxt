<template>
  <header class="fixed top-0 w-full z-50">
    <div class="bg-white flex items-center justify-between h-full mx-auto p-4">
      <div class="cursor-pointer" @click="goHome">
        <img src="/images/logo.svg" alt="Logo" style="height: 24px" />
      </div>
      <nav class="space-x-12 cursor-pointer text-secondary">
        <a href="#" class="hover:underline">Home</a>

        <a class="hover:underline">About Us</a>
        <a @click="navigateTo('/about')" class="hover:underline">About Us</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const goHome = () => {
  navigateTo("/");
};
</script>

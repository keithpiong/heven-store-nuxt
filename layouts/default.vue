<template>
  <UINavAppBar />
  <main class="mt-14 tracking-tight">
    <slot />
  </main>
  <!-- <UIAlert :alertText="alertMessage" :type="alertType" /> -->
  <!-- <Footer /> -->
</template>

<script setup lang="ts">
const { alertMessage, alertType } = useAlert();
</script>

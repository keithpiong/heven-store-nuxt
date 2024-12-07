<template>
  <!-- <UINavBar /> -->
  <div class="tracking-tight">
    <slot />
  </div>

  <!-- <UIAlert :alertText="alertMessage" :type="alertType" /> -->
  <!-- <Footer /> -->
</template>

<script setup lang="ts">
const { alertMessage, alertType } = useAlert();
</script>

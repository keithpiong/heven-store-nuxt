<template>
  <UIAppBar />
  <NuxtPage />
  <UIAlert :alertText="alertMessage" :type="alertType" />
  <Footer />
</template>

<script setup lang="ts">
const { alertMessage, alertType } = useAlert();
</script>

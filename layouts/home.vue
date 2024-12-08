<template>
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">
const { alertMessage, alertType } = useAlert();
</script>

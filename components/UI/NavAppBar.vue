<template>
  <header class="fixed top-0 w-full z-50 h-14">
    <div
      class="bg-white/90 flex items-center justify-between h-full p-4 rounded-lg"
    >
      <a @click="goBack">
        <UIIcon name="arrow-left" />
      </a>
      <!-- <p>{{ props.title }}</p> -->
      <UIIcon name="bag" />
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  // title?: string;
}>();

const goBack = () => {
  window.history.back();
};
</script>

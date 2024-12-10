<template>
  <div class="relative">
    <div class="carousel rounded-box h-full w-full">
      <div v-for="image in images" class="carousel-item w-full h-full">
        <img :src="image.url" class="w-full object-cover" />
      </div>
    </div>

    <!-- Indicators -->
    <div
      class="absolute left-0 right-0 bottom-6 flex items-center justify-center"
    >
      <div
        v-for="(image, index) in images"
        class="w-3 h-3 rounded-full mr-2"
        :class="currentIndex === index ? 'bg-white/80' : 'bg-white/30'"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  images: any[];
}>();

const currentIndex = ref(0);
</script>

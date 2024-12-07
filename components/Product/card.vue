<template>
  <div
    class="rounded-xl flex flex-col overflow-clip bg-white border-2 border-background"
    @click="goToProduct('123')"
  >
    <div class="aspect-video">
      <img :src="props.product.thumbnail" class="w-full h-full object-cover" />
    </div>
    <div class="flex flex-col p-3">
      <p class="">{{ props.product.title }}</p>
      <p class="text-lg font-medium mt-2 text-secondary">RM38.00</p>
      <!-- <p class="mt-4 text-sm">{{ props.product.description }}</p> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types/product";

const props = defineProps<{
  product: Product;
}>();

const goToProduct = (id: string) => {
  navigateTo("/products/123");
};
</script>

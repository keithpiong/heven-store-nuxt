<template>
  <div
    class="rounded-xl flex flex-col overflow-clip"
    @click="goToProduct('123')"
  >
    <div class="h-72 overflow-clip rounded-xl">
      <img :src="props.product.thumbnail" class="w-full h-full object-cover" />
    </div>
    <div class="flex flex-col p-3">
      <p class="text-base font-light">{{ props.product.title }}</p>
      <p class="text-xs font-thin">{{ props.product.subtitle }}</p>
      <p class="text-base mt-2 text-secondary">RM{{ price }}</p>
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

const price = computed(() => {
  if (props.product.variants) {
    return props.product.variants[0].calculated_price.original_amount;
  }
});
</script>

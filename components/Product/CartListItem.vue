<template>
  <div class="rounded-xl grid grid-cols-12 gap-3 overflow-clip">
    <div
      class="aspect-square overflow-clip rounded-lg col-span-3"
      @click="goToProduct('123')"
    >
      <img :src="props.product.thumbnail" class="w-full h-full object-cover" />
    </div>
    <div class="col-span-5 flex flex-col justify-center">
      <p class="text-sm">{{ props.product.title }}</p>
      <p class="font-medium mt-2 text-secondary">RM38.00</p>
      <!-- <p class="mt-4 text-sm">{{ props.product.description }}</p> -->
    </div>

    <div class="col-span-4 flex items-center justify-center">
      <div class="rounded-lg bg-background">
        <UIIcon name="minus" />
      </div>
      <p class="font-medium mx-4">5</p>
      <div class="rounded-lg bg-background">
        <UIIcon name="plus" />
      </div>
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

<template>
  <div class="rounded-xl shadow-md flex flex-col overflow-clip">
    <div>
      <img :src="props.product.thumbnail" class="w-full" />
    </div>
    <div class="flex flex-col p-6">
      <p>{{ props.product.title }}</p>
      <p>{{ props.product.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types/product";

const props = defineProps<{
  product: Product;
}>();
</script>

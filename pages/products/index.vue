<template>
  <div class="flex flex-col p-4">
    <div class="p-4 mb-6 rounded-xl bg-secondary h-40 flex items-center">
      <p class="text-2xl font-semibold text-primary">
        Promotion <br />
        50%
      </p>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div v-for="product in products" class="cols-span-2">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { getMockProducts } = useProduct();

const products = computed(() => {
  return getMockProducts();
});
</script>

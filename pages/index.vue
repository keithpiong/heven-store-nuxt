<template>
  <div class="flex flex-col">
    <div class="h-screen overflow-hidden">
      <img src="/images/hero.jpg" />
    </div>
    <div class="px-12 py-24 grid grid-cols-2 gap-4">
      <p>Our Products</p>
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

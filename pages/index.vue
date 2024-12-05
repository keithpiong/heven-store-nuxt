<template>
  <ClientOnly>
    <div class="flex flex-col h-screen relative">
      <div class="overflow-hidden h-full absolute">
        <img
          src="/public/images/hero2.jpg"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="z-50 flex justify-between w-full absolute bottom-4 p-4">
        <div class="flex flex-col">
          <p class="text-3xl">Scented Candles</p>
          <p class="text-2xl">Buy Now</p>
        </div>

        <div
          class="rounded-full bg-white flex justify-center items-center shadow-md h-16 w-16"
        >
          <img
            src="/assets/icons/chevron-right.svg"
            class="w-8 h-8 text-secondary"
          />
        </div>
      </div>

      <!-- <div class="px-12 py-24 grid grid-cols-2 gap-4">
      <p>Our Products</p>
      <div v-for="product in products" class="cols-span-2">
        <ProductCard :product="product" />
      </div>
    </div> -->
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
const { getMockProducts } = useProduct();

const products = computed(() => {
  return getMockProducts();
});
</script>

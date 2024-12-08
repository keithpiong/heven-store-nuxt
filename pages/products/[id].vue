<template>
  <div class="flex flex-col px-4 pb-40 relative">
    <div class="rounded-3xl overflow-clip">
      <img src="/images/hero.jpg" />
    </div>

    <div class="flex flex-col mt-8 p-4 rounded-xl border-background border">
      <p class="text-xl font-medium">Eden Euphoria</p>
      <p class="text-base font-light mt-4">
        English Pear & Freesia candle, made with 100% soy wax, weighs 90g and
        measures 6cm in width by 6.5cm in height, offering up to 25 hours of
        burn time.
      </p>
    </div>

    <div class="mt-4 flex flex-col p-4 rounded-xl border-background border">
      <p class="text-sm">Price</p>
      <p class="text-2xl font-semibold mt-2">RM38.00</p>
    </div>

    <div
      class="mt-4 bg-white flex items-center border-t-2 border-background fixed bottom-0 left-0 right-0 pt-4 pb-6 px-4"
    >
      <div
        class="flex items-center justify-center h-14 w-full rounded-full border-black border"
      >
        <p class="font-2xl font-light">Add To Cart</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

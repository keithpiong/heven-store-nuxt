<template>
  <div class="flex flex-col h-dvh relative">
    <div class="overflow-hidden h-full absolute z-0">
      <img
        src="/public/images/landing.png"
        class="h-full w-full object-cover"
      />
      <div class="absolute top-0 bottom-0 left-0 right-0 bg-black/40"></div>
    </div>

    <div class="flex flex-col justify-between h-full z-10 pt-8 pb-12 px-4">
      <div class="flex flex-col text-white">
        <img src="/logo_white.svg" class="w-40" />
        <p class="font-extralight text-2xl mt-8">
          Step into a world of luxury and sophistication with our meticous
          lously curated collections
        </p>
      </div>

      <div class="flex justify-between items-center w-full">
        <div class="flex flex-col w-auto text-white">
          <p class="text-base font-light mb-2">100% hand crafted.</p>
          <p class="text-3xl font-medium">Clay Pottery</p>
        </div>

        <div
          @click="navigateTo('products')"
          class="rounded-full bg-white flex justify-center items-center shadow-md h-20 w-20"
        >
          <img src="/assets/icons/arrow-right.svg" class="w-12 h-12" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "home",
});
</script>

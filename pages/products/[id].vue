<template>
  <div v-if="product" class="flex flex-col px-4 pb-40 relative">
    <div class="rounded-3xl h-3/4">
      <ProductCarousel :images="product.images" />
    </div>

    <div class="flex flex-col mt-8 p-4 rounded-xl border-background border">
      <p class="text-xl font-medium">{{ product.title }}</p>
      <p class="text-base font-light mt-4">
        {{ product.description }}
      </p>
    </div>

    <div class="mt-4 flex flex-col p-4 rounded-xl border-background border">
      <p class="text-sm">Price</p>
      <p class="text-2xl font-semibold mt-2">RM{{ getCalculatedPrice }}</p>
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
import type { Product } from "~/types/product";

const route = useRoute();
const { getProductById } = useMedusa();

const product = ref<Product>();

const fetchProduct = async () => {
  let response = await getProductById(route.params.id as string);
  product.value = response;
};

const getCalculatedPrice = computed(() => {
  if (product.value && product.value.variants.length > 1) {
  } else {
    return product.value?.variants[0].calculated_price.original_amount;
  }
});

onMounted(() => {
  // initCart();
  fetchProduct();
});
</script>

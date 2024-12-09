<template>
  <div class="flex flex-col p-2">
    <h2 class="text-xl font-light text-center mb-8">Shop</h2>
    <!-- <div class="p-4 mb-6 rounded-xl bg-secondary h-40 flex items-center">
      <p class="text-2xl font-semibold text-primary">
        Promotion <br />
        50%
      </p>
    </div> -->
    <div class="grid grid-cols-2 gap-2">
      <div v-for="product in products" class="cols-span-2">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { getProducts, initCart } = useMedusa();

const products = ref<any>([]);

const fetchProducts = async () => {
  let response = await getProducts();
  products.value = response;
};

onMounted(() => {
  // initCart();
  fetchProducts();
});
</script>

<template>
  <div>
    <!-- Overlay -->
    <div
      v-if="cartDrawer"
      class="fixed inset-0 bg-black bg-opacity-75 z-50 h-dvh"
    >
      <!-- Modal Box -->
      <div
        class="bg-white max-w-lg py-4 w-full h-full transition-transform duration-300 ease-in-out flex flex-col"
        :class="{
          'translate-x-full': !cartDrawer,
          'translate-x-0': cartDrawer,
        }"
      >
        <!-- Modal Header -->
        <div class="flex justify-between items-center mb-6 px-4">
          <h3 class="text-xl font-light">My Cart</h3>
          <button @click="closeModal">
            <UIIcon name="close" />
          </button>
        </div>

        <!-- Modal Content -->
        <div class="flex flex-col overflow-y-scroll pb-40 px-4">
          <div v-for="product in products" class="mb-8">
            <ProductCartListItem :product="product" />
          </div>
        </div>

        <!-- Modal Footer -->
        <div
          class="w-full fixed bg-white left-0 right-0 bottom-0 pb-12 px-4 py-2 flex flex-col items-end shadow-2xl"
        >
          <p class="text-lg mr-2">Total</p>
          <p class="text-2xl font-medium text-secondary mr-2">RM138.00</p>
          <button
            class="mt-4 border-black border w-full rounded-full text-lg font-light h-12"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { getMockProducts } = useProduct();
const { showCartDrawer, hideCartDrawer, cartDrawer } = useModal();

const products = computed(() => {
  return getMockProducts();
});

// Close modal handler
const closeModal = () => {
  hideCartDrawer();
};

// Confirm handler
const confirm = () => {
  showCartDrawer();
};
</script>

<style scoped>
/* Add custom styling if needed */
</style>

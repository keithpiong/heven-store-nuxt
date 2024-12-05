<template>
  <div
    class="rounded-full w-14 h-14 fixed right-5 bottom-3 bg-[#25d366] flex justify-center items-center p-3 cursor-pointer animate-bounce"
    @click="openWhatsApp"
  >
    <img class="" src="/icons/wapp.svg" />
  </div>
</template>

<script setup lang="ts">
const openWhatsApp = () => {
  const phoneNumber = "+60122104729"; // Replace with the desired phone number
  const message =
    "Hi, I’m interested in exploring opportunities to digitize my business."; // Replace with your desired message
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
};
</script>

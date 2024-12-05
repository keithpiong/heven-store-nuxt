<template>
  <button
    :class="`px-6 py-4  ${color} rounded-full ${hoverColor} active:scale-90 transition duration-300 `"
    :disabled="props.disabled"
  >
    <p class="text-xl font-bold">{{ props.title }}</p>
    <span v-if="props.loading" class="loading loading-spinner"></span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "Button",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "primary", // 3 Types : 'primary', 'neutral', 'error'
  },
});

onMounted(() => {});

const color = computed(() => {
  if (props.type == "secondary") {
    return "bg-secondary text-white";
  } else if (props.type == "error") {
    return "bg-error text-white";
  } else if (props.type == "secondaryWhite") {
    return "bg-secondary text-white";
  } else {
    return "bg-primary text-white";
  }
});

const hoverColor = computed(() => {
  if (props.type == "secondary") {
    return "hover:bg-primary";
  } else if (props.type == "error") {
    return "hover:bg-error";
  } else if (props.type == "secondaryWhite") {
    return "hover:bg-white hover:text-primary";
  } else {
    return "hover:bg-secondary";
  }
});
</script>

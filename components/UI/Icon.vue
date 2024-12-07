<template>
  <div>
    <nuxt-icon :name="props.name" :class="sizeStyle" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string;
  size?: string;
}>();

const sizeStyle = computed(() => {
  switch (props.size) {
    case "large":
      return "icon-32";
    default:
      return "icon-24";
  }
});
</script>

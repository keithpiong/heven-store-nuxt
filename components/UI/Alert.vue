<template>
  <div
    v-if="showAlert"
    class="position max-w-md rounded-xl shadow-xl flex overflow-clip px-4 py-4"
    :class="bgColor"
    @animationend="handleAnimationEnd"
  >
    <div class="text-primary-content text-sm font-medium flex items-center">
      <nuxt-icon
        :name="icon"
        :class="`text-${accentColor} icon-24 mr-2`"
      ></nuxt-icon>

      <a :class="`text-${accentColor}`">{{ alertText }}</a>

      <!-- Close button -->
      <div
        :class="`ml-4 hover:cursor-pointer rounded-full p-1 hover:bg-primary-content/20`"
        @click.stop="closePressed"
      >
        <nuxt-icon
          name="close"
          :class="`text-${accentColor} icon-20`"
        ></nuxt-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { clearMessage } = useAlert();
const props = defineProps({
  alertText: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 5000,
  },
  type: {
    type: String,
    default: "primary", //primary, success, error, warning
  },
});

const showAlert = ref(false);

const bgColor = computed(() => {
  return `bg-${props.type}`;
});

const accentColor = computed(() => {
  return `primary-content`;
});

const icon = computed(() => {
  if (props.type == "error") {
    return "error";
  } else {
    return `info`;
  }
});

const showAnimatedAlert = () => {
  showAlert.value = true;
  setTimeout(() => {
    showAlert.value = false;
    clearMessage();
  }, props.duration);
};

const handleAnimationEnd = () => {};

const closePressed = () => {
  showAlert.value = false;
  clearMessage();
};
watch(
  () => props.alertText,
  (newVal) => {
    if (newVal) {
      showAnimatedAlert();
    }
  }
);
</script>

<style scoped>
.position {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  opacity: 0;
  animation: slideDownFadeIn 0.5s forwards, slideUpFadeOut 0.5s 4.5s forwards;
}

@keyframes slideDownFadeIn {
  from {
    transform: translate(-50%, 0);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -20px);
    opacity: 1;
  }
}

@keyframes slideUpFadeOut {
  from {
    transform: translate(-50%, -20px);
    opacity: 1;
  }
  to {
    transform: translate(-50%, 0);
    opacity: 0;
  }
}
</style>

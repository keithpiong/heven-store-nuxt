<template>
  <div class="flex flex-row">
    <input
      ref="textInput"
      class="bg-background"
      :value="props.modelValue"
      @input="handleInput($event)"
      :type="currentType"
      :placeholder="props.placeholder"
      :class="`input input-bordered h-10 ${stateActive} ${block} w-full p-4`"
      @focus="isFocused = true"
      @blur="isFocused = false"
      :disabled="props.disabled"
    />
    <img
      v-if="type === 'password'"
      src="/assets/icons/eye.svg"
      class="h-10 w-8 pl-2 cursor-pointer"
      @click="togglePassVisibility"
    />
  </div>
</template>

<script setup lang="ts">
const textInput = ref<HTMLInputElement | null>(null);
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: String,
    default: "",
  },
  focused: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const isFocused = ref(false);
const currentType = ref(props.type);

const stateActive = computed(() => {
  return isFocused.value ? "input-primary" : "";
});

const block = computed(() => {
  return props.block ? "w-full" : "";
});

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement | null;
  if (input) {
    emit("update:modelValue", input.value);
  }
};

const togglePassVisibility = () => {
  currentType.value = currentType.value === "password" ? "text" : "password";
};

onMounted(async () => {
  if (props.focused) {
    await nextTick();
    textInput.value?.focus();
  }
});
</script>

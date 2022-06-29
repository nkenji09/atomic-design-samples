<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { defineEmits, withDefaults, defineProps } from "vue";

/* ■ Props ■ */
type Props = {
  modelValue: number;
  placeholder?: string;
  min?: number;
  max?: number;
};
const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  placeholder: "",
  min: 1,
  max: 9999,
});

/* ■ Emits ■ */
const emits = defineEmits<{
  (e: "update:modelValue", value: number): number;
}>();

/* ■ Logic ■ */
const value = computed({
  get: () => props.modelValue,
  set: (inputValue) => {
    emits("update:modelValue", inputValue);
  },
});
</script>

<template>
  <input
    v-model="value"
    class="number-input"
    type="number"
    :min="props.min"
    :max="props.max"
    :placeholder="props.placeholder"
  />
</template>

<style scoped>
.number-input {
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
}
</style>

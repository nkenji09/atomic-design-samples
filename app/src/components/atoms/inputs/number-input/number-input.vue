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
    role="number"
    type="number"
    :min="props.min"
    :max="props.max"
    :placeholder="props.placeholder"
  />
</template>

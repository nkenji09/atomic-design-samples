<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { defineEmits, withDefaults, defineProps } from "vue";

/* ■ Props ■ */
type Props = {
  modelValue: number;
  placeholder?: string;
};
const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  placeholder: "",
});

/* ■ Emits ■ */
const emits = defineEmits<{
  (e: "update:modelValue", value: number): number;
}>();

/* ■ Logic ■ */
const value = computed({
  get: () => props.modelValue,
  set: (inputValue) => {
    console.log("UPD!!!", inputValue);
    emits("update:modelValue", inputValue);
  },
});
</script>

<template>
  <input
    v-model="value"
    role="number"
    type="number"
    :placeholder="props.placeholder"
  />
</template>

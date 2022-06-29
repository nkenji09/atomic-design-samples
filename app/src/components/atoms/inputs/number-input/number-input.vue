<script lang="ts" setup>
import { defineEmits, withDefaults, defineProps, ref } from "vue";

/* ■ Props ■ */
type Props = {
  placeholder?: string;
};
const props = withDefaults(defineProps<Props>(), {
  placeholder: "",
});

/* ■ Emits ■ */
const emits = defineEmits<{
  (e: "input", value: number): void;
}>();
const onInput = () => {
  emits("input", value.value);
};

/* ■ Logic ■ */
const value = ref<number>(0);
</script>

<template>
  <input
    v-model="value"
    role="input"
    type="number"
    @input="onInput"
    :placeholder="props.placeholder"
  />
</template>

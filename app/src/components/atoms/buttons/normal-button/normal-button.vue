<script lang="ts" setup>
import { defineEmits } from "vue";

/* ■ Emits ■ */
const emits = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => {
  emits("click");
};
</script>

<template>
  <button @click="onClick">
    <slot>CLICK ME</slot>
  </button>
</template>

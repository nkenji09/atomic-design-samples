<script lang="ts" setup>
import { defineEmits, withDefaults, defineProps } from "vue";

/* ■ Props ■ */
type Props = {
  disabled?: boolean;
};
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
});

/* ■ Emits ■ */
const emits = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => {
  emits("click");
};
</script>

<template>
  <button @click="onClick" :disabled="props.disabled" role="button">
    <slot>CLICK ME</slot>
  </button>
</template>

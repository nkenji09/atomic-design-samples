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
  <button
    class="conversion-button"
    @click="onClick"
    :disabled="props.disabled"
    role="button"
  >
    <slot>CLICK ME</slot>
  </button>
</template>

<style scoped>
.conversion-button {
  width: 100%;
  height: 3rem;
  border-radius: 8px;
  border: none;
  background-color: #53bf49;
  color: #005c1a;
  font-size: 1rem;
}
</style>

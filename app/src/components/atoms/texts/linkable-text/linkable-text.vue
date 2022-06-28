<script lang="ts" setup>
import { defineEmits, defineProps, withDefaults } from "vue";

/* ■ Props ■ */
type Props = {
  url: string;
};
const props = withDefaults(defineProps<Props>(), {
  url: "",
});

/* ■ Emits ■ */
const emits = defineEmits<{
  (e: "click", url: string): void;
}>();
const onClick = () => {
  if (!props.url) return;
  emits("click", props.url);
};
</script>

<template>
  <a @click="onClick" href="javascript:void(0)">
    <!-- slots: default -->
    <slot>LINKABLE TEXT</slot>
  </a>
</template>

<script lang="ts" setup>
import { defineEmits } from "vue";

/* ■ Props ■ */
// type Props = {};
// const props = withDefaults(defineProps<Props>(), {});

/* ■ Emits ■ */
const emits = defineEmits<{
  (e: "click"): void;
}>();
const onClick = () => {
  emits("click");
};
</script>

<template>
  <a @click="onClick" href="javascript:void(0)">
    <!-- slots: default -->
    <slot>BASE TEXT</slot>
  </a>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from "vue";

/* ■ Props ■ */
type Props = {
  path: string;
  alt?: string;
};
const props = withDefaults(defineProps<Props>(), {
  alt: "",
});
</script>

<template>
  <img :src="require(`@/${props.path}`)" :alt="props.alt" />
</template>

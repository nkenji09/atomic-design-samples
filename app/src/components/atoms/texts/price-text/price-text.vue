<script lang="ts" setup>
import { defineProps, withDefaults } from "vue";

/* ■ Props ■ */
type Props = {
  price: number;
};
const props = withDefaults(defineProps<Props>(), {});

/* ■ Methods ■ */
const convertPriceText = (price: number) => {
  return price.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });
};
</script>

<template>
  <span>{{ convertPriceText(props.price) }}</span>
</template>

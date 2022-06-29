<script lang="ts" setup>
import { defineProps, withDefaults, ref, computed } from "vue";
import { Product } from "@/values/product";
import ConversionButton from "@/components/atoms/buttons/conversion-button/conversion-button.vue";
import NumberInput from "@/components/atoms/inputs/number-input/number-input.vue";
import { AddCartLogicInterface } from "./add-cart.logic";

/* ■ Props ■ */
type Props = {
  product: Product.AsObject;
  logic: AddCartLogicInterface;
};
const props = withDefaults(defineProps<Props>(), {});

/* ■ Logic ■ */
const addCount = ref<number>(1);
const disabled = computed(() => (addCount?.value || 0) <= 0);
const onClick = () => {
  props.logic.addCart(props.product.id, addCount.value);
};
</script>

<template>
  <section class="add-cart">
    <div class="quantity">
      <NumberInput v-model="addCount"></NumberInput>
    </div>
    <ConversionButton @click="onClick" :disabled="disabled"
      >カートに入れる</ConversionButton
    >
  </section>
</template>

<style scoped>
.quantity {
  text-align: right;
  margin-bottom: 0.5rem;
}
</style>

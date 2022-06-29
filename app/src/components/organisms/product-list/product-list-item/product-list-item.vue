<script lang="ts" setup>
import { defineProps, withDefaults } from "vue";
import { Product } from "@/values/product";
import ListImage from "@/components/atoms/images/list-image/list-image.vue";
import AddCart from "@organisms/cart/add-cart/add-cart.vue";
import OnProductListAddCartLogic from "@organisms/cart/add-cart/logics/on-product-list";
import BaseText from "@/components/atoms/texts/base-text/base-text.vue";

/* ■ Props ■ */
type Props = {
  product: Product;
};
const props = withDefaults(defineProps<Props>(), {});

/* ■ Emits ■ */
// 本来はここでページ遷移させてもいいけどサンプルなので実装しない
</script>

<template>
  <div class="product-item" role="listitem">
    <ListImage class="product-image" :path="props.product.image" />
    <div class="product-info">
      <p class="product-name">
        <BaseText>{{ props.product.name }}</BaseText>
      </p>
      <AddCart
        :product="props.product"
        :logic="new OnProductListAddCartLogic()"
      />
    </div>
  </div>
</template>

<style scoped>
.product-item {
  position: relative;
}

.product-image {
  height: 200px;
}

.product-name {
  text-align: center;
}

.product-info {
  position: relative;
}
</style>

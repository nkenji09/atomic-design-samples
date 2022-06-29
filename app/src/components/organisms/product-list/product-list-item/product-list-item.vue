<script lang="ts" setup>
import { defineProps, withDefaults } from "vue";
import { Product } from "@/values/product";
import ListImage from "@/components/atoms/images/list-image/list-image.vue";
import AddCart from "@organisms/cart/add-cart/add-cart.vue";
import OnProductListAddCartLogic from "@organisms/cart/add-cart/logics/on-product-list";

/* ■ Props ■ */
type Props = {
  product: Product;
};
const props = withDefaults(defineProps<Props>(), {});

/* ■ Emits ■ */
// 本来はここでページ遷移させてもいいけどサンプルなので実装しない
</script>

<template>
  <article role="listitem">
    <ListImage :path="props.product.image" />
    <div class="product-info">
      <p>{{ props.product.name }}</p>
      <AddCart
        :product="props.product"
        :logic="new OnProductListAddCartLogic()"
      />
    </div>
  </article>
</template>

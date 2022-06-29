<script lang="ts" setup>
import { defineProps, withDefaults } from "vue";
import { ProductListLogicInterface } from "./product-list.logic";
import ProductListItem from "../product-list-item/product-list-item.vue";

/* ■ Props ■ */
type Props = {
  logic: ProductListLogicInterface;
};
const props = withDefaults(defineProps<Props>(), {});

/* ■ Logic ■ */
const products = props.logic.getProductsState();
props.logic.loadProducts();
</script>

<template>
  <div role="itemlist">
    <ul v-if="products.length > 0">
      <li v-for="product in products" :key="product.id">
        <ProductListItem :product="product"></ProductListItem>
      </li>
    </ul>
    <p v-else>loading...</p>
  </div>
</template>

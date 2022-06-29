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
  <div class="product-list" role="itemlist">
    <ul v-if="products.length > 0" class="item-list">
      <li v-for="product in products" :key="product.id">
        <ProductListItem :product="product"></ProductListItem>
      </li>
    </ul>
    <p v-else>loading...</p>
  </div>
</template>

<style scoped>
.product-list {
  width: 100%;
  margin: 0 auto;
}

.item-list {
  width: 80%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>

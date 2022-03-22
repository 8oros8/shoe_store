<template>
  <div class="productsWrapper">
    <Selector></Selector>
    <div class="productsContainer">
      <product-card @add-to-cart="addItem"></product-card>
      <product-card @add-to-cart="addItem"></product-card>
      <product-card @add-to-cart="addItem"></product-card>
      <product-card @add-to-cart="addItem"></product-card>
      <product-card @add-to-cart="addItem"></product-card>
      <product-card @add-to-cart="addItem"></product-card>
    </div>
  </div>
</template>

<script>
import Selector from '/components/optionsSelector.vue'
import productCard from "./productCard";
export default {
  name: "products-wrapper",
  components: {productCard, Selector},
  props: {
    items: [],
    addItem: Function,
  },
}
</script>

<style scoped>
.productsWrapper {
  width: 75%;
  margin-bottom: 5%;
}
.productsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>

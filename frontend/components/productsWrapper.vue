<template>
  <div class="productsWrapper">
    <Selector @select="sortItems"
              :selected="selected"></Selector>
    <div class="productsContainer">
      <product-card v-for="item of allItemsList"
                    @add-to-cart="addItem"
                    :product-info="item"
                    :key="allItemsList.indexOf(item)"
      ></product-card>
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
    addItem: Function,
    sortItems: Function,
    allItemsList: Array,
    selected: String,
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

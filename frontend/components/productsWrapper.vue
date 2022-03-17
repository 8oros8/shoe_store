<template>
  <div class="productsWrapper">
    <Selector></Selector>
    <div class="productsContainer">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  </div>
</template>

<script>
import Card from '/components/productCard.vue'
import Selector from '/components/optionsSelector.vue'
export default {
  name: "products-wrapper",
  components: {Card, Selector}
}
</script>

<style scoped>
.productsWrapper {

  margin-bottom: 5%;
}
.productsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>

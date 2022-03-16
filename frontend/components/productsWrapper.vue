<template>
  <div class="productsWrapper">
    <div class="optionsWrapper"></div>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
  </div>
</template>

<script>
import Card from '/components/productCard.vue'
export default {
  name: "products-wrapper",
  components: {Card}
}
</script>

<style scoped>
.productsWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 5%;
}
.optionsWrapper {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #DBDBDB;;
}
</style>

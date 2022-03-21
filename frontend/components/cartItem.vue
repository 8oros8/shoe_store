<template>
  <div class="itemWrapper">
    <div class="leftItemInfo">
      <img src="../assets/logos/crossClose.png" class="crossClose">
      <img class="itemPicture" :src="itemPicture">
      <div class="itemName"> {{ itemName }}</div>
    </div>
    <div class="itemPrice">{{ itemPrice }}</div>
  </div>
</template>

<script>
export default {
  name: "cartItem",
  data() {
    return{
      itemName: 'Louis Vuitton 270 ',
      itemPicture: "_nuxt/assets/product_images/product1.png",
      itemPrice: '2 990 ₽'
    }
  }
}
</script>

<style scoped>
.itemWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 210px;
  padding-left: 8px;
  padding-right: 8px;
  border-bottom: 2px solid #E8E8E9;
}
.leftItemInfo {
  display: flex;
  align-items: center;
}
.itemPicture {
  width: 138px;
  height: 95px;
  margin-right: 28px;
  margin-left: 43px;
}
.crossClose {
  width: 22px;
  height: 22px;
}
.crossClose:hover {
  cursor: pointer;
}
</style>
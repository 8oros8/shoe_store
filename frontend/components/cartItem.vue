<template>
  <div class="itemWrapper">
    <div class="leftItemInfo">
      <img src="../static/logos/crossClose.png" class="crossClose" @click="$emit('remove-item')">
      <img class="itemPicture" src="https://picsum.photos/270/260">
      <div class="itemName"> {{ productInfo.producer.name }}</div>
    </div>
    <div class="itemPrice">{{ productInfo.price + ' ₽' }}</div>
  </div>
</template>

<script>
export default {
  name: "cartItem",
  data() {
    return {
      imgURL: 'http://localhost:1337' + this.productInfo.main_image.url
    }
  },
  props: {
    productInfo: {},
    key: {},
    removeItem: Function,
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
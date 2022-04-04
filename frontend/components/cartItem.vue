<template>
  <div class="cartItem">
    <div class="cartItem__left">
      <img src="../static/logos/crossClose.png" class="cartItem__crossClose" @click="$emit('remove-item')">
      <img class="cartItem__itemPicture" src="https://picsum.photos/270/260">
      <div class="cartItem__itemName"> {{ productInfo.producer.name }}</div>
    </div>
    <div class="cartItem__itemPrice">{{ productInfo.price + ' ₽' }}</div>
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
    removeItem: Function,
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/main";

.cartItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 210px;
  padding-left: 8px;
  padding-right: 8px;
  border-bottom: 2px solid #E8E8E9;

  &__left {
    display: flex;
    align-items: center;
  }

  &__itemPicture {
    width: 138px;
    height: 95px;
    margin-right: 28px;
    margin-left: 43px;
  }

  &__crossClose {
    width: 22px;
    height: 22px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
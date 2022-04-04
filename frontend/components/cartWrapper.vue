<template>
  <div class="cartWrapper">
    <cart-item v-for="item in items"
               :key="items.indexOf(item)"
               :removeItem="removeItem"
               :product-info="item"
               @remove-item="removeItem(item)"
    ></cart-item>
    <div v-if="items.length === 0" class="cartWrapper_empty">Ваша корзина пуста</div>
  </div>
</template>

<script>
import CartItem from "./cartItem";
export default {
  name: "cartWrapper",
  components: {CartItem},
  props: {
    items: [],
    removeItem: Function,
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/main";

.cartWrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 90px;

  &_empty {
    display: flex;
    margin-top: 40px;
    margin-left: 20px ;
    width: 100%;
    height: 100%;
    font-family: 'OpenSans', sans-serif;
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    color: $default-black;
  }
}
</style>
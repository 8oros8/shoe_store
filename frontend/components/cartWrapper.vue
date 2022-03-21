<template>
  <div class="cartWrapper">
    <cart-item></cart-item>
    <cart-item></cart-item>
    <cart-item></cart-item>
    <cart-item></cart-item>
  </div>
</template>

<script>
import CartItem from "./cartItem";
export default {
  name: "cartWrapper",
  components: {CartItem}
}
</script>

<style scoped>
.cartWrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 90px;
}
</style>
<template>
  <div class="promocode">
    <input class="promocode__input" type="text" v-model="promocode" @focus="promocode=''">
    <cart-button message="Применить" class="promocode__applyButton"></cart-button>
  </div>
</template>

<script>
import CartButton from "./addToCartButton";
export default {
  name: "Promocode",
  components: { CartButton },
  data() {
    return {
      promocode: 'Ваш промокод'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/main";

.promocode {
  display: flex;
  justify-content: right;
  align-items: center;
  &__input {
    height: 58px;
    width: 367px;
    padding: 0 0 0 25px;
    border: 2px solid #F3F4F5;
    border-radius: 7px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #A6A6A6;
    @include _600 {
      width: 300px;
      font-size: 11px;
    }
    @include _300 {
      width: 200px;
      font-size: 10px;
    }
    &:hover {
      border: 2px solid $default-blue;
    }
    &:focus {
      border: 2px solid $default-blue;
      color: $default-black;
    }
  }
  &__applyButton {
    position: absolute;
    height: 62px;
    width: 132px;
    border-bottom-left-radius: unset;
    border-top-left-radius: unset;
    @include _600 {
      width: 75px;
      font-size: 11px;
    }
    @include _300 {
      width: 60px;
      font-size: 10px;
    }
  }
}
</style>
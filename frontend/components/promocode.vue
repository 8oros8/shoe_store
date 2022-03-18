<template>
  <div class="promocodeWrapper">
    <input class="promocodeInput" type="text" v-model="promocode" @focus="promocode=''">
    <Button message="Применить" class="applyButton"></Button>
  </div>
</template>

<script>
import Button from '/components/addToCartButton.vue'
export default {
  name: "Promocode",
  components: { Button },
  data() {
    return {
      promocode: 'Ваш промокод'
    }
  }
}
</script>

<style scoped>
.promocodeWrapper {
  display: flex;
  justify-content: right;
  align-items: center;
}
.promocodeInput {
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
}
.promocodeInput:hover {
  border: 2px solid #33A0FF;
}
.promocodeInput:focus {
  border: 2px solid #33A0FF;
  color: #282A2C;
}
.applyButton {
  position: absolute;
  height: 62px;
  width: 132px;
  border-bottom-left-radius: unset;
  border-top-left-radius: unset;
}
</style>
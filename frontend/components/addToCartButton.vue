<template>
  <button class="addToCartButton" @click="$emit('button-pressed')">
    {{ message }}
  </button>
</template>

<script>
export default {
  name: "cartButton",
  props: {
    message: String,
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/main";

.addToCartButton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82%;
  height: 48px;
  background-color: $default-blue;
  color: #FFFFFF;
  border-radius: 4px;
  border-width: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  &:hover {
    cursor: pointer;
    background-color: $hover-blue;
  }
  &:active {
    cursor: pointer;
    background-color: $active-blue;
  }
}
</style>

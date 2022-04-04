<template>
  <button class="openPopup" @click="$emit('openPopup')">
    Оформить заказ
  </button>
</template>

<script>
export default {
  name: "openPopup",

}
</script>

<style lang="scss" scoped>
@import "../assets/main";

.openPopup {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 48px;
  background-color: $default-blue;
  color: #FFFFFF;
  border-radius: 4px;
  border-width: 0;
  font-family: Inter, sans-serif;
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

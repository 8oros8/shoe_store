<template>
  <button class="basicButton">
    {{ message }}
  </button>
</template>

<script>
export default {
  name: "cartButton",
  props: {
    message: String,
  }
}
</script>

<style scoped>
.basicButton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 48px;
  background-color: #33A0FF;
  color: #FFFFFF;
  border-radius: 4px;
  border-width: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
}
.basicButton:hover {
  cursor: pointer;
  background-color: #1E96FF;
}
.basicButton:active {
  cursor: pointer;
  background-color: #1985E3;
}
</style>

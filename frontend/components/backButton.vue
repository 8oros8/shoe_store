<template>
  <NuxtLink to="/" class="backButtonWrapper">
    <button class="backButton">
      <img src="../assets/logos/leftArrow.png" class="leftArrow">
      {{ message }}
    </button>
  </NuxtLink>
</template>

<script>
export default {
  name: "backButton",
  data() {
    return {
      message: 'Вернуться назад'
    }
  }
}
</script>

<style scoped>
.backButtonWrapper {
  text-decoration: none;
}
.backButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 56px;
  background: transparent;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  color: #808191;
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  transition: 500ms;
}
.backButton:hover {
  cursor: pointer;
  background: #DFDEDE;
  color: white;
}
.leftArrow {
  width: 16px;
  height: 12px;
  margin-right: 12px;
}
</style>
<template>
  <NuxtLink to="/" class="backButton">
    <button class="backButton__content">
      <img src="../static/logos/leftArrow.png" class="backButton__leftArrow">
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

<style lang="scss" scoped>
@import "../assets/main";

.backButton {
  text-decoration: none;
  width: 200px;

  &__content {
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
    &:hover {
      cursor: pointer;
      background: #DFDEDE;
      color: white;
    }
  }
  &__leftArrow {
    width: 16px;
    height: 12px;
    margin-right: 12px;
  }
}
</style>
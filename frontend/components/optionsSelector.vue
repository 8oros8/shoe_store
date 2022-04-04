<template>
  <div class="options">
    <div class="options__selectButton" @click="selectionStart = !selectionStart">
      <div>{{ selected }}</div>
      <img class="options__selectArrow" src="../static/logos/selectArrow.png">
    </div>
    <ul class="options__content" v-model="options" v-if="selectionStart">
      <li class="options__sortingOption"
          v-for="option in options"
          @click="selectOption(option);
          $emit('select', option)">
        {{ option.message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Selector",
  data() {
    return {
      selectionStart: false,
      options: [
        { message: 'По умолчанию' },
        { message: 'Сначала дешевые' },
        { message: 'Сначала дорогие' }
      ]
    }
  },
  props: {
    selected: String,
  },
  methods: {
    selectOption(option) {
      this.selected = option.message
      this.selectionStart = !this.selectionStart
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/main";

.options {
  display: block;
  width: 100%;
  border-bottom: 1px solid #DBDBDB;
  padding-bottom: 24px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  @include _300 {
    font-size: 10px;
  }
  &__selectButton {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    height: 35px;
    padding-left: 10px;
    border: 1px solid #C5BEBE;
    border-radius: 4px;
    background: transparent;
    @include _600 {
      width: 150px;
    }
    @include _300 {
      width: 100px;
    }
    &:hover {
      cursor: pointer;
      border: 1px solid $default-blue;
    }
    &:active {
      border: 1px solid #9DCCF5;
    }
  }
  &__selectArrow {
    width: 12px;
    height: 9px;
    margin-right: 13px;
  }
  &__content {
    position: absolute;
    list-style: none;
    width: 200px;
    padding-left: 0;
    margin: 0;
    box-shadow: 0 0 10px rgba(161, 174, 207, 0.25);
  }
  &__sortingOption {
    width: 200px;
    height: 35px;
    padding-top: 8px;
    padding-left: 10px;
    background: #FFFFFF;
    border-bottom: 1px solid #D1D1D1;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
      background: rgba(222, 241, 255);
      background-blend-mode: overlay;
    }
  }
}

</style>

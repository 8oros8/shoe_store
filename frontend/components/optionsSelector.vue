<template>
  <div class="optionsWrapper">
    <div class="styledSelect" @click="selectionStart = !selectionStart">
      <div class="selected">{{ selected }}</div>
      <img src="../static/logos/selectArrow.png">
    </div>
    <ul class="selectOptions" v-model="options" v-if="selectionStart">
      <li v-for="option in options"
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

<style scoped>
.optionsWrapper {
  display: block;
  width: 100%;
  border-bottom: 1px solid #DBDBDB;
  padding-bottom: 24px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
}
.styledSelect {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 35px;
  padding-left: 10px;
  border: 1px solid #C5BEBE;
  border-radius: 4px;
  background: transparent;
}
.styledSelect > img {
  width: 12px;
  height: 9px;
  margin-right: 13px;
}
.styledSelect:hover {
  cursor: pointer;
  border: 1px solid #33A0FF;
}
.styledSelect:active {
  border: 1px solid #9DCCF5;
}
.selectOptions {
  position: absolute;
  list-style: none;
  width: 200px;
  padding-left: 0;
  margin: 0;
  box-shadow: 0 0 10px rgba(161, 174, 207, 0.25);
}
.selectOptions > li {
  width: 200px;
  height: 35px;
  padding-top: 8px;
  padding-left: 10px;
  background: #FFFFFF;
  border-bottom: 1px solid #D1D1D1;
  border-radius: 4px;
}
.selectOptions > li:hover {
  cursor: pointer;
  background: rgba(222, 241, 255);
  background-blend-mode: overlay;
}
</style>

<template>
  <div class="customerInput">
    <div class="customerInput__header">{{inputHeader}}</div>
    <input v-if="inputType === 'Number'"
           class="customerInput__inputBody"
           id="phoneInput"
           v-model="inputMemory"
           :placeholder="inputSample"
           @blur="checkPhone(inputMemory)">
    <label v-if="wrongPhone" for="phoneInput" class="customerInput_formatWarning">Пожалуйста, введите данные в  формате +79998887766</label>
    <input v-if="inputType === 'Email'"
           class="customerInput__inputBody"
           id="emailInput"
           v-model="inputMemory"
           :placeholder="inputSample"
           @blur="checkEmail(inputMemory)">
    <label v-if="wrongEmail" for="emailInput" class="customerInput_formatWarning">Пожалуйста, введите данные в  формате info@wall.black</label>
    <input v-if="inputType === 'Text'"
           class="customerInput__inputBody"
           id="nameInput"
           v-model="inputMemory"
           :placeholder="inputSample"
           @blur="checkName(inputMemory)">
    <label v-if="wrongName" for="nameInput" class="customerInput_formatWarning">Пожалуйста, введите имя</label>
  </div>
</template>

<script>
export default {
  name: "customerInput",
  data() {
    return {
      inputMemory: '',
      wrongPhone: false,
      wrongEmail: false,
      wrongName: false,
    }
  },
  props: {
    inputHeader: String,
    inputSample: String,
    inputType: String,
  },
  methods: {
    checkPhone(phone) {
      const firstPlus = /^\+/gm;
      if (!firstPlus.test(phone)) {
        this.inputMemory = '+' + phone
        phone=this.inputMemory
      }
      const phoneFormat = /^\+\d+$/gm;
      this.wrongPhone = !phoneFormat.test(phone);
      if (!this.wrongPhone) {
        this.$emit('correct')
      }
      else this.$emit('incorrect')
      return phone
    },
    checkEmail(email) {
      const emailFormat = /\w+@\w+.\w+/gm;
      this.wrongEmail = !emailFormat.test(email)
      if (!this.wrongEmail) {
        this.$emit('correct')
      }
      else this.$emit('incorrect')
    },
    checkName(name) {
      const nameFormat = /.+/gm;
      this.wrongName = !nameFormat.test(name)
      if (!this.wrongName) {
        this.$emit('correct')
      }
      else this.$emit('incorrect')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/main";

.customerInput {
  height: 20%;
  margin-top: 7%;

  &__header {
    margin-bottom: 6px;
    margin-left: 18px;
    font-family: 'Poppins', 'OpenSans', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #343739;
  }

  &__inputBody {
    display: flex;
    padding-left: 18px;
    width: 95%;
    height: 65%;
    background-color: #DFDEDE;
    border-radius: 7px;
    border: 1px solid #DFDEDE;
    font-family: 'Poppins', 'OpenSans', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #BEBEBE;
    &:hover {
      border: 1px solid $default-blue;
    }
    &:focus {
      background-color: #FFFFFF;
      border: 1px solid $default-blue;
      color: $default-black;
    }
  }

  &_formatWarning {
    position: absolute;
    margin-left: 18px;
    color: red;
    font-size: 11px;
  }
}

</style>
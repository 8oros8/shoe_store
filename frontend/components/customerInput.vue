<template>
  <div class="inputsWrapper">
    <div class="inputHeader">{{inputHeader}}</div>
    <input v-if="inputType === 'Number'"
           class="customerInput"
           id="phoneInput"
           v-model="inputMemory"
           :placeholder="inputSample"
           @blur="checkPhone(inputMemory)">
    <label v-if="wrongPhone" for="phoneInput" class="formatWarning">Пожалуйста, введите данные в  формате +79998887766</label>
    <input v-if="inputType === 'Email'"
           class="customerInput"
           id="emailInput"
           v-model="inputMemory"
           :placeholder="inputSample"
           @blur="checkEmail(inputMemory)">
    <label v-if="wrongEmail" for="emailInput" class="formatWarning">Пожалуйста, введите данные в  формате info@wall.black</label>
    <input v-if="inputType === 'Text'"
           class="customerInput"
           id="nameInput"
           v-model="inputMemory"
           :placeholder="inputSample"
           @blur="checkName(inputMemory)">
    <label v-if="wrongName" for="nameInput" class="formatWarning">Пожалуйста, введите имя</label>
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

<style scoped>
.inputsWrapper {
  margin-top: 16px;
}
.customerInput {
  padding-left: 18px;
  width: 95%;
  height: 50px;
  margin-right: 48px;
  background-color: #DFDEDE;
  border-radius: 7px;
  border: 1px solid #DFDEDE;
  font-family: 'Poppins', 'OpenSans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #BEBEBE;
}
.customerInput:hover {
  border: 1px solid #33A0FF;
}
.customerInput:focus {
  background-color: #FFFFFF;
  border: 1px solid #33A0FF;
  color: #282A2C;
}
.inputHeader {
  margin-bottom: 6px;
  margin-left: 18px;
  font-family: 'Poppins', 'OpenSans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #343739;
}
.formatWarning {
  position: absolute;
  margin-left: 18px;
  color: red;
  font-size: 11px;
}
</style>
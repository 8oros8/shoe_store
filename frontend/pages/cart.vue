<template>
  <div class="wrapper">
    <div class="modal"
         v-if="modalVisible"
         @click="modalVisible=false; popupComplete=false">
    </div>
    <div class="popup" v-if="modalVisible && !popupComplete">
      <div class="closeButton" @click="closePopup" @mouseover="closeButtonActive=true" @mouseout="closeButtonActive=false">
        <img v-if="!closeButtonActive" src="../static/logos/closePopup.png">
        <img v-else src="../static/logos/closePopupHover.png">
      </div>
      <div class="popupHeader">Оформление заказа</div>
      <div class="popupBody">
        <customer-input v-for="input of customerInputs"
                        :inputHeader="input.name"
                        :inputSample="input.sample"
                        :inputType="input.inputType"
                        @correct="validateInput(input)"
                        @incorrect="devalidateInput(input)"
        ></customer-input>
        <button class="basicButton" @click="submitOrder">
          Отправить
        </button>
      </div>
    </div>
    <div class="thanksForOrder" v-if="modalVisible && popupComplete">
      <div class="closeButton" @click="closePopup" @mouseover="closeButtonActive=true" @mouseout="closeButtonActive=false">
        <img v-if="!closeButtonActive" src="../static/logos/closePopup.png">
        <img v-else src="../static/logos/closePopupHover.png">
      </div>
      <div class="successWrapper">
        <img class="successIcon" src="../static/logos/successIcon.png">
        Спасибо за заказ!<br>Мы с Вами обязательно свяжемся!
      </div>
    </div>
    <div class="bodyWrapper">
      <back-button></back-button>
      <div class="cartHeader">
        <div class="mainCartHeader">КОРЗИНА</div>
        <div class="headingsWrapper">
          <div>ТОВАР</div>
          <div>ЦЕНА</div>
        </div>
      </div>
      <CartWrapper :items="items" :removeItem="removeItem"></CartWrapper>
      <div class="bottomCart">
        <Promocode></Promocode>
        <div class="paymentInfo">
          <div class="subtotal">
            <div>
              Промежуточный итог
            </div>
            <div class="subtotalCount">{{ subtotal.toLocaleString() + ' ₽'}}</div>
          </div>
          <div class="delivery">
            <div>
              Доставка
            </div>
            <div class="deliveryCount">{{ deliveryCount.toLocaleString() + ' ₽' }}</div>
          </div>
          <div class="coupon">
            <div>
              Купон
            </div>
            <div v-if="promocode === 0" class="couponCount">Нет</div>
            <div v-else class="couponCount">{{ promocode.toLocaleString() + ' ₽' }}</div>
          </div>
          <div class="total">
            <div>
              Общая сумма
            </div>
            <div class="totalCount">{{ total.toLocaleString() + ' ₽'}}</div>
            <open-popup
                message="Оформить заказ"
                class="openPopup"
                @openPopup="openPopup"></open-popup>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from "../components/backButton";
import CartWrapper from "../components/cartWrapper";
import Promocode from "../components/promocode";
import CartButton from "../components/addToCartButton";
import OpenPopup from "../components/openPopup"
import CustomerInput from "../components/customerInput"

export default {
  name: "CartPage",
  components: {CartButton, Promocode, CartWrapper, BackButton, OpenPopup, CustomerInput},
  data() {
    return {
      modalVisible: false,
      popupComplete: false,
      closeButtonActive: false,
      customerInputs: [
        {name:'Имя', sample:'Николай', inputType: 'Text', correct: false},
        {name: 'Телефон', sample: '+79276486827', inputType: 'Number', correct: false},
        {name: 'Email', sample: 'info@wall.black', inputType: 'Email', correct: false}
      ]
    }
  },
  computed: {
    items () {
      return this.$store.state.shoppingCart.list
    },
    subtotal () {
      return this.$store.getters["shoppingCart/subtotal"]
    },
    deliveryCount () {
      return 500
    },
    promocode () {
      return 0
    },
    total () {
      return +this.subtotal + this.deliveryCount - this.promocode
    }
  },
  methods: {
    removeItem(itemInfo) {
      this.$store.commit('shoppingCart/remove', itemInfo)
    },
    clearCart() {
      this.$store.commit('shoppingCart/clearCart')
    },
    submitOrder() {
      let globalInputsChecker = 0
      for (let input of this.customerInputs) {
        if (input.correct === true) {
          globalInputsChecker++
        }
      }
      if (globalInputsChecker === 3) {
        this.clearCart()
        this.popupComplete = true
      }
    },
    openPopup () {
      this.modalVisible = true
      this.popupComplete = false
      for (let input of this.customerInputs) {
        input.correct = false
      }
    },
    closePopup () {
      this.modalVisible=false
      this.closeButtonActive=false
      this.popupComplete=false
    },
    validateInput(input) {
      input.correct = true
    },
    devalidateInput(input) {
      input.correct = false
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  display: flex;
  z-index: 100;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #bdbdbd;
  opacity: 0.5;
}
.popup {
  position: fixed;
  bottom: 5%;
  opacity: 1;
  z-index: 101;
  padding: 48px;
  width: 30%;
  height: 80%;
  background-color: #FFFFFF;
  border-radius: 17px;
}
.closeButton {
  display: flex;
  justify-content: right;
}
.closeButton:hover {
  cursor: pointer;
}
.closeButton > img {
  height: 25px;
  width: 25px;
}
.popupHeader {
  display: flex;
  margin-top: 46px;
  margin-bottom: 70px;
  font-family: 'Poppins', 'OpenSans', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  color: #000000;
}
.basicButton {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  width: 100%;
  height: 48px;
  background-color: #33A0FF;
  color: #FFFFFF;
  border-radius: 4px;
  border-width: 0;
  font-family: Inter, sans-serif;
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
.thanksForOrder {
  position: fixed;
  text-align: center;
  top: 15%;
  opacity: 1;
  z-index: 101;
  padding: 48px;
  width: 30%;
  height: 40%;
  background-color: #FFFFFF;
  border-radius: 17px;
}
.successWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', 'OpenSans', sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  color: #282A2C;
}
.successIcon {
  height: 130px;
  width: 130px;
  margin-bottom: 27px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.bodyWrapper {
  display: flex;
  flex-direction: column;
  margin-top: 62px;
  margin-bottom: 166px;
  width: 63vw;
}
.cartHeader {
  margin-top: 50px;
}
.mainCartHeader {
  margin-bottom: 88px;
  font-family: 'OpenSans', sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  color: #282A2C;
}
.headingsWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 29px 81px;
  border-bottom: 2px solid #E8E8E9;
}
.headingsWrapper > div {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  line-height: 24px;
  color: #444749;
}
.bottomCart {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
}
.paymentInfo {
  display: flex;
  flex-direction: column;
  width: 370px;
}
.paymentInfo > div {
  display: flex;
  justify-content: space-between;
}
.delivery {
  margin-top: 28px;
  margin-bottom: 28px;
}
.delivery > div {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #262626;
}
.coupon > div {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #262626;
}
.subtotal > div {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #262626;
}
.total > div {
  font-family: 'Poppins', 'OpenSans', sans-serif;
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
  color: #22262A;
}
.total {
  flex-wrap: wrap;
  margin-top: 59px;
}
.openPopup {
  justify-self: left;
  margin-top: 24px;
  width: 100%;
}
</style>
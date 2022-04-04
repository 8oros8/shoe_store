<template>
  <div class="wrapper">
    <div class="modal"
         v-if="modalVisible"
         @click="modalVisible=false; popupComplete=false">
    </div>
    <div class="popup" v-if="modalVisible && !popupComplete">
      <div class="popup__closeButtonWrapper" @click="closePopup" @mouseover="closeButtonActive=true" @mouseout="closeButtonActive=false">
        <img class="popup__closeButton" v-if="!closeButtonActive" src="../static/logos/closePopup.png">
        <img class="popup__closeButton" v-else src="../static/logos/closePopupHover.png">
      </div>
      <div class="popup__header">Оформление заказа</div>
      <div class="popup__body">
        <customer-input v-for="input of customerInputs"
                        :key="input.name"
                        :inputHeader="input.name"
                        :inputSample="input.sample"
                        :inputType="input.inputType"
                        @correct="validateInput(input)"
                        @incorrect="devalidateInput(input)"
        ></customer-input>
        <button class="popup__submitOrder" @click="submitOrder">
          Отправить
        </button>
      </div>
    </div>
    <div class="thanksForOrder" v-if="modalVisible && popupComplete">
      <div class="thanksForOrder__closeButtonWrapper" @click="closePopup" @mouseover="closeButtonActive=true" @mouseout="closeButtonActive=false">
        <img class="thanksForOrder__closeButton" v-if="!closeButtonActive" src="../static/logos/closePopup.png">
        <img class="thanksForOrder__closeButton" v-else src="../static/logos/closePopupHover.png">
      </div>
      <div class="thanksForOrder__imageWrapper">
        <img class="thanksForOrder__image" src="../static/logos/successIcon.png">
        Спасибо за заказ!<br>Мы с Вами обязательно свяжемся!
      </div>
    </div>
    <div class="cartBody">
      <back-button></back-button>
      <div class="cartBody__cartHeader">
        <div class="cartBody__mainHeader">КОРЗИНА</div>
        <div class="cartBody__subheadingsWrapper">
          <div class="cartBody__subheading">ТОВАР</div>
          <div class="cartBody__subheading">ЦЕНА</div>
        </div>
      </div>
      <CartWrapper :items="items" :removeItem="removeItem"></CartWrapper>
      <div class="cartBody__bottomCart">
        <Promocode></Promocode>
        <div class="cartBody__paymentInfo">
          <div class="cartBody__paymentInfo__subtotal">
            <div>
              Промежуточный итог
            </div>
            <div>{{ subtotal.toLocaleString() + ' ₽'}}</div>
          </div>
          <div class="cartBody__paymentInfo__delivery">
            <div>
              Доставка
            </div>
            <div>{{ deliveryCount.toLocaleString() + ' ₽' }}</div>
          </div>
          <div class="cartBody__paymentInfo__coupon">
            <div>
              Купон
            </div>
            <div v-if="promocode === 0">Нет</div>
            <div v-else>{{ promocode.toLocaleString() + ' ₽' }}</div>
          </div>
          <div class="cartBody__paymentInfo__total">
            <div>
              Общая сумма
            </div>
            <div>{{ total.toLocaleString() + ' ₽'}}</div>
          </div>
          <open-popup
              message="Оформить заказ"
              class="cartBody__openPopup"
              @openPopup="openPopup"></open-popup>
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

<style lang="scss" scoped>
@import "../assets/main";

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 2%;
  height: 80vh;
  opacity: 1;
  z-index: 101;
  padding: 48px;
  width: 60vh;
  background-color: #FFFFFF;
  border-radius: 17px;
  .popup__body {
    width: 100%;
    height: 80%;
  }
  .popup__closeButtonWrapper {
    display: flex;
    justify-content: right;
  }
  .popup__closeButton {
    height: 25px;
    width: 25px;
    &:hover {
      cursor: pointer;
    }
  }
  .popup__header {
    display: flex;
    font-family: 'Poppins', 'OpenSans', sans-serif;
    margin-top: 7%;
    margin-bottom: 11%;
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;
    color: #000000;
  }
  .popup__submitOrder {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    width: 100%;
    height: 15%;
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
  @media (max-height: 750px){
    height: 60%;
  }
  .thanksForOrder__closeButtonWrapper {
    display: flex;
    justify-content: right;
  }
  .thanksForOrder__closeButton {
    height: 25px;
    width: 25px;
    &:hover {
      cursor: pointer;
    }
  }
  .thanksForOrder__imageWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', 'OpenSans', sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    color: $default-black;
    @include _600 {
      font-size: 18px;
    }
    @include _300 {
      font-size: 16px;
    }
  }
  .thanksForOrder__image {
    height: 130px;
    width: 130px;
    margin-bottom: 27px;
  }
}

.cartBody {
  display: flex;
  flex-direction: column;
  margin-top: 62px;
  margin-bottom: 166px;
  width: 63vw;
  .cartBody__cartHeader {
    margin-top: 50px;
  }
  .cartBody__mainHeader {
    margin-bottom: 88px;
    font-family: 'OpenSans', sans-serif;
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    color: #282A2C;
  }
  .cartBody__subheadingsWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px 29px 81px;
    border-bottom: 2px solid #E8E8E9;
  }
  .cartBody__subheading {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    line-height: 24px;
    color: #444749;
  }
  .cartBody__bottomCart {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
  }
  .cartBody__paymentInfo {
    display: flex;
    flex-direction: column;
    width: 35%;
    .cartBody__paymentInfo__total {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 28px;
      font-family: 'Poppins', 'OpenSans', sans-serif;
      font-weight: 500;
      font-size: 30px;
      line-height: 45px;
      color: #22262A;
      @include _967 {
        font-size: 26px;
      }
      @include _600 {
        font-size: 18px;
      }
      @include _300 {
        font-size: 16px;
      }
    }
    .cartBody__paymentInfo__delivery {
      display: flex;
      justify-content: space-between;
      margin-top: 28px;
      margin-bottom: 28px;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: #262626;
      @include _967 {
        font-size: 14px;
      }
      @include _600 {
        font-size: 10px;
      }
      @include _300 {
        font-size: 10px;
      }
    }
    .cartBody__paymentInfo__coupon {
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid #F6F7F8;
      padding-bottom: 29px;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: #262626;
      @include _967 {
        font-size: 14px;
      }
      @include _600 {
        font-size: 10px;
      }
      @include _300 {
        font-size: 10px;
      }
    }
    .cartBody__paymentInfo__subtotal {
      display: flex;
      justify-content: space-between;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: #262626;
      @include _967 {
        font-size: 14px;
      }
      @include _600 {
        font-size: 10px;
      }
      @include _300 {
        font-size: 10px;
      }
    }
  }
  .cartBody__openPopup {
    justify-self: left;
    margin-top: 24px;
    width: 100%;
    @include _600 {
      font-size: 16px;
    }
    @include _300 {
      font-size: 14px;
    }
  }
}
</style>
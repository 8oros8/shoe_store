<template>
  <div class="wrapper">
    <Header></Header>
    <div class="bodyWrapper">
      <back-button></back-button>
      <div class="cartHeader">
        <div class="mainCartHeader">КОРЗИНА</div>
        <div class="headingsWrapper">
          <div>ТОВАР</div>
          <div>ЦЕНА</div>
        </div>
      </div>
      <CartWrapper></CartWrapper>
      <div class="bottomCart">
        <Promocode></Promocode>
        <div class="paymentInfo">
          <div class="subtotal">
            <div>
              Промежуточный итог
            </div>
            <div class="subtotalCount">5 980 ₽</div>
          </div>
          <div class="delivery">
            <div>
              Доставка
            </div>
            <div class="deliveryCount">500 ₽</div>
          </div>
          <div class="coupon">
            <div>
              Купон
            </div>
            <div class="couponCount">Нет</div>
          </div>
          <div class="total">
            <div>
              Общая сумма
            </div>
            <div class="totalCount">6 480 ₽</div>
            <cart-button message="Оформить заказ" class="checkout"></cart-button>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '/components/header.vue'
import Footer from '/components/footer.vue'
import BackButton from "../components/backButton";
import CartWrapper from "../components/cartWrapper";
import Promocode from "../components/promocode";
import CartButton from "../components/addToCartButton";
export default {
  name: "CartPage",
  components: {CartButton, Promocode, CartWrapper, BackButton, Header, Footer}
}
</script>

<style scoped>
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
  font-family: 'OpenSans';
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
  font-family: 'Inter';
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
  font-family: 'Inter';
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #262626;
}
.coupon > div {
  font-family: 'Inter';
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #262626;
}
.subtotal > div {
  font-family: 'Inter';
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #262626;
}
.total > div {
  font-family: 'Poppins', 'OpenSans';
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
  color: #22262A;
}
.total {
  flex-wrap: wrap;
  margin-top: 59px;
}
.checkout {
  justify-self: left;
  margin-top: 24px;
  width: 100%;
}
</style>
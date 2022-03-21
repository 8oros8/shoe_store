<template>
  <div class="cardWrapper">
    <img src="../assets/product_images/product1.png">
    <div class="productInfo">
      <div class="productType">Ботинки<img class="favoriteButton" @click="isFavorite = !isFavorite" v-if="isFavorite" src="../assets/logos/favoriteStar.png"><img class="favoriteButton" @click="isFavorite = !isFavorite" v-else src="../assets/logos/notFavoriteStar.png"></div>
      <div class="productName">Louis Vuitton 270 </div>
      <div class="productPrice">2 990 ₽</div>
    </div>
    <cart-button message="В корзину"></cart-button>
  </div>
</template>

<script>
import Button from '/components/addToCartButton.vue'
import CartButton from "./addToCartButton";

export default {
  name: "Card",
  data() {
    return {
      isFavorite: false
    }
  },
  components: {CartButton, Button}
}
</script>

<style scoped>

.cardWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin-top: 4%;
  padding-bottom: 24px;
  background-color: #FFFFFF;
  box-shadow: 0 0 35px rgba(125, 137, 171, 0.15);
  border-radius: 7px;
}
.cardWrapper > img {
  width: 100%;
  height: 55%;
}
.productInfo {
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: space-around;
  margin-bottom: 16px;
}
.productType {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #223263;
}
.favoriteButton {
  display: flex;
  width: 15px;
  height: 15px;
}
.favoriteButton:hover {
  cursor: pointer;
}
.productName {
  display: flex;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  color: #223263;
}
.productPrice {
  display: flex;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.5px;
  color: #33A0FF;
}
</style>

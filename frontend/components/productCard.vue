<template>
  <div class="cardWrapper">
    <img :src="productInfo.productImage">
    <div class="productInfo">
      <div class="productType">{{ productInfo.productType }}<img class="favoriteButton" @click="isFavorite = !isFavorite" v-if="isFavorite" src="../static/logos/favoriteStar.png"><img class="favoriteButton" @click="isFavorite = !isFavorite" v-else src="../static/logos/notFavoriteStar.png"></div>
      <div class="productName">{{ productInfo.productName }}</div>
      <div class="productPrice">{{ productInfo.productPrice }}</div>
    </div>
    <cart-button message="В корзину" @button-pressed="$emit('add-to-cart', productInfo)"></cart-button>
  </div>
</template>

<script>
import CartButton from "./addToCartButton";

export default {
  name: "productCard",
  data() {
    return {
      isFavorite: false,
      productInfo: {
        productImage: "/product_images/product1.png",
        productType: "Ботинки",
        productName: "Louis Vuitton 270",
        productPrice: "2 990 ₽",
      },
    }
  },
  components: {CartButton}
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

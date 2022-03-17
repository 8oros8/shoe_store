<template>
  <div class="cardWrapper">
    <img src="../assets/product_images/product1.png">
    <div class="productInfo">
      <div class="productType">Ботинки<img class="favoriteButton" @click="isFavorite = !isFavorite" v-if="isFavorite" src="../assets/logos/favoriteStar.png"><img class="favoriteButton" @click="isFavorite = !isFavorite" v-else src="../assets/logos/notFavoriteStar.png"></div>
      <div class="productName">Louis Vuitton 270 </div>
      <div class="productPrice">2 990 ₽</div>
    </div>
    <Button></Button>
  </div>
</template>

<script>
import Button from '/components/addToCartButton.vue'

export default {
  name: "Card",
  data() {
    return {
      isFavorite: false
    }
  },
  components: {Button}
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
}
.productType {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #223263;
}
.favoriteButton {
  width: 15px;
  height: 15px;
}
.favoriteButton:hover {
  cursor: pointer;
}
.productName {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: #223263;
}
.productPrice {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.5px;
  color: #33A0FF;
}
</style>

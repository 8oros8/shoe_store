<template>
  <div class="productCard">
    <img class="productCard__image" src="https://picsum.photos/270/260">
    <div class="productCard__info">
      <div class="productCard__type">{{ productInfo.category.name }}<img class="productCard__favoriteButton productCard__favoriteButton_active" @click="isFavorite = !isFavorite" v-if="isFavorite" src="../static/logos/favoriteStar.png"><img class="productCard__favoriteButton productCard__favoriteButton_inactive" @click="isFavorite = !isFavorite" v-else src="../static/logos/notFavoriteStar.png"></div>
      <div class="productCard__name">{{ productInfo.producer.name }}</div>
      <div class="productCard__price">{{ productInfo.price + ' ₽'}}</div>
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
      imgURL: 'http://localhost:1337' + this.productInfo.main_image.url
    }
  },
  props: {
    productInfo: Object,
  },
  components: {CartButton}
}
</script>

<style lang="scss" scoped>
@import "../assets/main";

.productCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin-top: 4%;
  padding-bottom: 24px;
  background-color: #FFFFFF;
  box-shadow: 0 0 35px rgba(125, 137, 171, 0.15);
  border-radius: 7px;
  @include _967 {
    width: 45%;
  }
  @include _600 {
    width: 95%;
  }
  @include _300 {
    width: 95%;
  }
  &__image {
    display: flex;
    width: 100%;
    height: 55%;
  }
  &__info {
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: space-around;
    margin-bottom: 16px;
    margin-top: 24px;
  }
  &__type {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #223263;
  }
  &__favoriteButton {
    display: flex;
    width: 15px;
    height: 15px;
    &:hover {
      cursor: pointer;
    }
  }
  &__name {
    display: flex;
    font-style: normal;
    font-family: Poppins, OpenSans, sans-serif;
    font-weight: 700;
    line-height: 27px;
    color: #223263;
  }
  &__price {
    display: flex;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0.5px;
    color: $default-blue;
  }
}
</style>

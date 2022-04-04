<template>
  <div class="header">
    <div class="header__logos">
      <div class="header__leftLogos">
        <img src="../static/logos/black_logo.png" class="header__logoImg">
        <div>BlackWall Store</div>
      </div>
      <div class="header__rightLogos">
        <div class="header__subtotal">{{ "₽ " + subtotal }}</div>
        <NuxtLink to="/cart" class="header__cartImg">
          <img v-if="subtotal == 0" src="../static/logos/emptyCart.png" class="header__cartImg_empty">
          <div v-else class="header__cartImg_filled">
            <img src="../static/logos/emptyCart.png" class="header__filledCartImg">
            <div class="header__redCircle">
              <img class="header__redCircle__img" src="../static/logos/redCartCircle.png">
              <div class="header__redCircle__itemCount">{{itemCount}}</div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="header__menu">
      <div class="header__menu__content">
        <div class="header__menu__menuItem">ГЛАВНАЯ</div>
        <NuxtLink to="/" class="header__menu__menuItem">КАТАЛОГ</NuxtLink>
        <NuxtLink to="/cart" class="header__menu__menuItem">ДОСТАВКА И ОПЛАТА</NuxtLink>
        <div class="header__menu__menuItem">О НАС</div>
        <div class="header__menu__menuItem">КОНТАКТЫ</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    subtotal: String,
    itemCount: Number,
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/main";

.header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  width: 63vw;
  height: 135px;
  &__logos {
    display: flex;
    align-items: center;
    width: 100%;
    height: 76px;
    justify-content: space-between;
    border-bottom: solid 2px #DBDBDB;
  }
  &__leftLogos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 196px;
    height: 44px;
    color: black;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    @include _967 {
      font-size: 16px;
    }
    @include _600 {
      font-size: 14px;
    }
    @include _300 {
      font-size: 10px;
    }
  }
  &__logoImg {
    height: 100%;
  }
  &__rightLogos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 47px;
    width: 191px;
    color: black;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  }
  &__subtotal {
    opacity: 0.5;
  }
  &__cartImg {
    display: flex;
    justify-content: center;
    height: 100%;
    text-decoration: none;
    &_empty {
    height: 24px;
    width: 24px;
    margin-right: 25px;
    margin-top: 15px;
  }
    &_filled {
     display: flex;
     align-items: center;
     justify-content: center;
     margin-right: 24px;
     margin-top: 5px;
   }
  }
  &__filledCartImg {
    position: absolute;
    width: 24px;
    height: 24px;
  }
}
.header__redCircle {
  display: flex;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
  left: 10px;
  bottom: 10px;
  &__img {
    position: absolute;
    width: 20px;
    height: 20px;
  }
  &__itemCount {
    position: absolute;
    color: #FFFFFF;
    font-family: Poppins, sans-serif;
    font-size: 10px;
    font-weight: 700;
  }
}

.header__menu {
  width: 100%;
  margin-top: 29px;
  &__content {
    display: flex;
    justify-content: space-between;
    margin-right: 12%;
    @include _967 {
      margin-right: 0;
    }
    @include _600 {
      margin-right: 0;
    }
    @include _300 {
      margin-right: 0;
    }
  }
  &__menuItem {
    display: flex;
    color: $default-black;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.03em;
    font-style: normal;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      color: $default-blue;
    }
    @include _967 {
      font-size: 18px;
    }
    @include _600 {
      font-size: 12px;
    }
    @include _300 {
      font-size: 10px;
    }
  }
}
</style>

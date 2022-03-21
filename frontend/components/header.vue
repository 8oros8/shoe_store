<template>
  <div class="header">
    <div class="logosWrapper">
      <div class="leftLogos">
        <img src="../assets/logos/black_logo.png" class="logoImg">
        <div>BlackWall Store</div>
      </div>
      <div class="rightLogos">
        <div>₽ 2 990.00</div>
        <NuxtLink to="/cart" class="cartImg"><img src="../assets/logos/cart_logo.png" class="cartImg"></NuxtLink>
      </div>
    </div>
    <div class="menuWrapper">
      <div class="menu">
        <div class="menuItem">ГЛАВНАЯ</div>
        <NuxtLink to="/" class="menuItem">КАТАЛОГ</NuxtLink>
        <NuxtLink to="/cart" class="menuItem">ДОСТАВКА И ОПЛАТА</NuxtLink>
        <div class="menuItem">О НАС</div>
        <div class="menuItem">КОНТАКТЫ</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

.header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  width: 63vw;
  height: 135px;
}
.logosWrapper {
  display: flex;
  align-items: center;
  width: 100%;
  height: 76px;
  justify-content: space-between;
  border-bottom: solid 2px #DBDBDB;
}
.leftLogos {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 196px;
  height: 44px;
  color: black;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
}
.rightLogos {
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
.rightLogos > div {
  opacity: 0.5;
}
.logoImg {
  height: 100%;
}
.cartImg {
  height: 100%;
}
.menuWrapper {
  width: 100%;
  margin-top: 29px;
}
.menu {
  display: flex;
  justify-content: space-between;
  margin-right: 12%;
}
.menuItem {
  display: flex;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.03em;
  font-style: normal;
  color: #282A2C;
  text-decoration: none;
}
.menuItem:hover {
  cursor: pointer;
  color: #33A0FF;
}
</style>

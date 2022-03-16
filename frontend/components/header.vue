<template>
  <div class="header">
    <div class="logosWrapper">
      <div class="leftLogos">
        <img src="../assets/logos/black_logo.png" class="logoImg">
        <div>BlackWall Store</div>
      </div>
      <div class="rightLogos">
        <div>₽ 2 990.00</div>
        <img src="../assets/logos/cart_logo.png" class="cartImg">
      </div>
    </div>
    <div class="menuWrapper">
      <div class="menuItem">ГЛАВНАЯ</div>
      <div class="menuItem">КАТАЛОГ</div>
      <div class="menuItem">ДОСТАВКА И ОПЛАТА</div>
      <div class="menuItem">О НАС</div>
      <div class="menuItem">КОНТАКТЫ</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style>

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
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.menuItem {
  display: flex;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.03em;
  font-style: normal;
}
.menuItem:hover {
  cursor: pointer;
  color: #33A0FF;
}
</style>

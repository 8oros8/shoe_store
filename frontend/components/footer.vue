<template>
  <div class="footer">
    <div class="footerContentWrapper">
      <div class="leftFooter">
        <div><img src="../assets/logos/blue_logo.png" class="leftFooterLogo"><div>BlackWall store</div></div>
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</div>
      </div>
      <div class="rightFooter">
        <div>Contact Us</div>
        <div class="contactInfo">
          <div>+4 161 64  1729 55</div>
          <div>info@wall.black</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

.footer {
  display: flex;
  justify-content: center;
  background-color: #282A2C;
  width: 100vw;
  height: 280px;
}
.footerContentWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 63vw;
  height: 100%;
}
.footerContentWrapper > div {
  color: #F4F4F4;
}
.leftFooter {
  display: flex;
  flex-direction: column;
  width: 223px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
}
.leftFooter > div {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.leftFooter > div > div {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
}
.leftFooter > div > img {
  height: 40px;
  width: 40px;
  margin-right: 14px;
}
.rightFooter {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
}
.rightFooter > div {
  margin-bottom: 19px;
}
.contactInfo {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  margin: 0;
}
.contactInfo > div {
  margin-bottom: 10px;
  margin-bottom: 10px;
}

</style>

<template>
  <div class="footer">
    <div class="footerBody">
      <div class="footerBody__leftFooter">
        <div class="footerBody__headerLogoWrapper"><img src="../static/logos/blue_logo.png" class="footerBody__blueLogo"><div class="footerBody__header">BlackWall store</div></div>
        <div class="footerBody__textInfo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</div>
      </div>
      <div class="footerBody__rightFooter">
        <div>Contact Us</div>
        <div class="footerBody__contactInfo">
          <div class="footerBody__phone">{{ contacts.phone }}</div>
          <div class="footerBody__email">{{ contacts.email }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      contacts: [],
    }
  },
  methods: {
    async fetchContacts() {
      this.contacts = await this.$axios.$get('/contacts')
    },
  },
  mounted() {
    this.fetchContacts()
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/main";

.footer {
  display: flex;
  justify-content: center;
  background-color: $default-black;
  width: 100vw;
  height: 280px;
  .footerBody {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 63vw;
    height: 100%;
    color: #F4F4F4;
    &__leftFooter {
      display: flex;
      flex-direction: column;
      width: 223px;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
    }
    &__headerLogoWrapper {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }
    &__blueLogo {
      height: 40px;
      width: 40px;
      margin-right: 14px;
    }
    &__header {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 27px;
    }
    &__textInfo {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }
    &__rightFooter {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
    }
    &__contactInfo {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      margin: 19px 0 0;
    }
    &__phone{
      margin-bottom: 10px;
    }
    &__email {
      margin-bottom: 10px;
    }
  }
}

</style>

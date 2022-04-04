<template>
    <div class="defaultLayout">
      <Header :subtotal="subtotal.toLocaleString()" :itemCount="itemCount"></Header>
      <Nuxt />
      <Footer></Footer>
    </div>
</template>

<script>
import Header from '/components/header.vue'
import Footer from '/components/footer.vue'

export default {
  layout: 'default',
  components: {Header, Footer},
  computed: {
    subtotal () {
      return this.$store.getters["shoppingCart/subtotal"]
    },
    itemCount () {
      return this.$store.getters["shoppingCart/itemCount"]
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/main";

.defaultLayout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
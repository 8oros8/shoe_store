<template>
  <div class="defaultLayout">
    <Header :subtotal="subtotal.toLocaleString()"></Header>
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
  },
}
</script>

<style>
@import "../assets/fonts.css";

* {
  font-family: 'Poppins', 'OpenSans';
}
body {
  margin: 0;
}
.defaultLayout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
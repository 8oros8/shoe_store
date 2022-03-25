<template>
  <div class="defaultLayout">
    <Header :subtotal="subtotal.toLocaleString()"></Header>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
<<<<<<< HEAD
import Header from '/components/header.vue'
import Footer from '/components/footer.vue'

export default {
  layout: 'default',
  components: {Header, Footer},
  computed: {
    items () {
      return this.$store.state.shoppingCart.list
    },
=======
import Header from "../components/header";
import Footer from "../components/footer";
export default {
  components: {Footer, Header},
  computed: {
>>>>>>> axios_fetching_products
    subtotal () {
      return this.$store.getters["shoppingCart/subtotal"]
    },
  },
}
<<<<<<< HEAD


=======
>>>>>>> axios_fetching_products
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
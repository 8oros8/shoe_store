<template>
  <div class="wrapper">
    <Header :subtotal="subtotal.toLocaleString()"></Header>
    <div class="bodyWrapper">
      <Sidebar></Sidebar>
      <products-wrapper
          :items="items"
          :addItem="addItem"
          v-on:add-to-cart="addItem"
      ></products-wrapper>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '/components/header.vue'
import Footer from '/components/footer.vue'
import Sidebar from '/components/sidebar.vue'
import productsWrapper from '/components/productsWrapper.vue'
export default {
  name: 'IndexPage',
  components: {Header, Footer, productsWrapper, Sidebar},
  computed: {
    items () {
      return this.$store.state.todos.list
    },
    subtotal () {
      let subtotal = 0
      for (let item of this.$store.state.todos.list) {
        let price = item.productPrice.split(' ').filter(element => !isNaN(element)).join('')
        price = +price
        subtotal += price
      }
      return subtotal
    },
  },
  methods: {
    addItem (itemInfo) {
      this.$store.commit('todos/add', itemInfo)
    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.bodyWrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 102px;
  width: 63vw;
}
</style>

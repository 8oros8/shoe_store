<template>
  <div class="wrapper">
    <Header></Header>
    <div class="bodyWrapper">
      <Sidebar></Sidebar>
      <products-wrapper></products-wrapper>
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
  components: {Header, Footer, productsWrapper, Sidebar}
}
</script>

<style>
.wrapper {
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
}
.bodyWrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 102px;
  width: 63vw;
}
</style>

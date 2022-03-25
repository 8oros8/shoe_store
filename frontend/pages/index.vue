<template>
    <div class="bodyWrapper">
      <Sidebar
          :currentCategory="currentCategory"
          @chooseCategory="currentCategory=$event"></Sidebar>
      <products-wrapper
          :allItemsList="allItemsList"
          :addItem="addItem"
          v-on:add-to-cart="addItem"
      ></products-wrapper>
    </div>
</template>

<script>
import Sidebar from '/components/sidebar.vue'
import productsWrapper from '/components/productsWrapper.vue'
export default {
  name: 'IndexPage',
  components: {productsWrapper, Sidebar},
  data () {
    return {
      currentCategory: null,
      allItemsList: [],
    }
  },
  methods: {
    addItem (itemInfo) {
      this.$store.commit('shoppingCart/add', itemInfo)
    },
    changeCategory (chosenCategory) {
      // fetch data by chose ID
    },
    async fetchItems() {
      const allItems = await this.$axios.$get('/products')
      for (let item of allItems) {
        this.allItemsList.push(item)
      }
    },
  },
  mounted() {
    this.fetchItems()
  }
}
</script>

<style scoped>
.bodyWrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 102px;
  width: 63vw;
}
</style>

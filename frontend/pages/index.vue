<template>
    <div class="bodyWrapper">
      <Sidebar
          :currentCategory="currentCategory"
          @chooseCategory="changeCategory"
      ></Sidebar>
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
      if (this.currentCategory !== chosenCategory) {
        this.currentCategory = chosenCategory
        this.fetchItems(chosenCategory)
      }
    },
    async fetchItems(chosen) {
      if (chosen === null) {
        this.allItemsList = []
        const allItems = await this.$axios.$get('/products')
        for (let item of allItems) {
          this.allItemsList.push(item)
        }
      }
      else {
        this.allItemsList = []
        let fetchRoute = '/products/category/' + chosen.id
        const selectedCategoryItems = await this.$axios.get(fetchRoute)
        for (let item of selectedCategoryItems.data) {
          this.allItemsList.push(item)
        }
      }
    },
  },
  mounted() {
    this.fetchItems(null)
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

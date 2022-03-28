<template>
    <div class="bodyWrapper">
      <Sidebar
          :currentCategory="currentCategory"
          @chooseCategory="changeCategory"
      ></Sidebar>
      <products-wrapper
          :allItemsList="allItemsList"
          :addItem="addItem"
          :sortItems="sortItems"
          :selected="selected"
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
      defaultListState: [],
      selected: 'По умолчанию',
    }
  },
  methods: {
    addItem (itemInfo) {
      this.$store.commit('shoppingCart/add', itemInfo)
    },
    changeCategory (chosenCategory) {
      if (this.currentCategory !== chosenCategory) {
        this.selected = 'По умолчанию'
        let defaultSorting = { message: 'По умолчанию' }
        this.sortItems(defaultSorting)
        this.currentCategory = chosenCategory
        this.fetchItems(chosenCategory)
      }
    },
    sortItems (option) {
      this.selected = option.message
      if (option.message === 'Сначала дешевые') {
        this.allItemsList.sort(function (a,b) {
          if (a.price > b.price) {
            return 1
          }
          if (a.price < b.price) {
            return -1
          }
          return 0
        })
      }
      if (option.message === 'Сначала дорогие') {
        this.allItemsList.sort(function (a,b) {
          if (a.price > b.price) {
            return -1
          }
          if (a.price < b.price) {
            return 1
          }
          return 0
        })
      }
      if (option.message === 'По умолчанию') {
        this.allItemsList = []
        for (let item of this.defaultListState) {
          this.allItemsList.push(item)
        }
      }
    },
    async fetchItems(chosen) {
      if (chosen === null) {
        this.allItemsList = []
        this.defaultListState = []
        const allItems = await this.$axios.$get('/products')
        for (let item of allItems) {
          this.allItemsList.push(item)
          this.defaultListState.push(item)
        }
      }
      else {
        this.allItemsList = []
        this.defaultListState = []
        let fetchRoute = '/products/category/' + chosen.id
        const selectedCategoryItems = await this.$axios.get(fetchRoute)
        for (let item of selectedCategoryItems.data) {
          this.allItemsList.push(item)
          this.defaultListState.push(item)
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

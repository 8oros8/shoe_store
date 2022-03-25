<template>
  <div class="categoriesSidebar">
    <div v-if="currentCategory !== null" class="currentCategory"> {{ currentCategory.name }}</div>
    <div class="categoriesHeader">Категории</div>
    <div class="categoryItem"
         :class="{active: currentCategory === null}"
         @click="$emit('chooseCategory', null)">Все</div>
    <div class="categoryItem"
         v-for="category in categories"
         @click="$emit('chooseCategory', category)"
         :class="{active: category === currentCategory}"
    >
      {{ category.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      categories: [],
    }
  },
  methods: {
    async fetchCategories() {
      const allCategories = await this.$axios.$get('/categories')
      for (let category of allCategories) {
        this.categories.push(category)
      }
    },
  },
  mounted() {
    this.fetchCategories()
  },
  props: {
    currentCategory: Object,
  },
}
</script>

<style scoped>
.categoriesSidebar {
  display: flex;
  flex-direction: column;
  width: 15%;
}
.currentCategory {
  display: flex;
  width: 120px;
  height: 40px;
  font-family: Inter;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  color: #282A2C;
}
.categoriesHeader {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-top: 37px;
  margin-bottom: 24px;
}
.categoryItem {
  display: flex;
  align-items: center;
  justify-content: left;
  cursor: pointer;
  padding: 7% 15% 7% 15%;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
}
.categoryItem.active {
  background: rgba(51, 160, 255, 0.15);
  border-radius: 4px;
}
.categoryItem:hover {
  background: rgba(51, 160, 255, 0.15);
  border-radius: 4px;
}
</style>

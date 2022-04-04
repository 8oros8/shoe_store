<template>
  <div class="categoriesSidebar">
    <div v-if="currentCategory !== null" class="categoriesSidebar__currentCategory"> {{ currentCategory.name }}</div>
    <div class="categoriesSidebar__header">Категории</div>
    <div class="categoriesSidebar__categoryItem"
         :class="{categoriesSidebar__categoryItem_active: currentCategory === null}"
         @click="$emit('chooseCategory', null)">Все</div>
    <div class="categoriesSidebar__categoryItem"
         v-for="category in categories"
         :class="{categoriesSidebar__categoryItem_active: category === currentCategory}"
         @click="$emit('chooseCategory', category)">{{ category.name }}</div>
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

<style lang="scss" scoped>
@import "../assets/main";

.categoriesSidebar {
  display: flex;
  flex-direction: column;
  width: 15%;
  &__currentCategory {
  display: flex;
  width: 120px;
  height: 40px;
  font-family: Inter;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  color: $default-black;
    @include _967 {
      font-size: 24px;
    }
    @include _600 {
      font-size: 20px;
    }
    @include _300 {
      font-size: 16px;
    }
  }
  &__header {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    margin-top: 37px;
    margin-bottom: 24px;
    @include _967 {
      font-size: 16px;
    }
    @include _600 {
      font-size: 12px;
    }
    @include _300 {
      font-size: 10px;
    }
  }
  &__categoryItem {
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
    @include _967 {
      font-size: 14px;
    }
    @include _600 {
      font-size: 12px;
    }
    @include _300 {
      font-size: 10px;
    }
    &:hover {
      background: rgba(51, 160, 255, 0.15);
      border-radius: 4px;
    }
    &_active {
       background: rgba(51, 160, 255, 0.15);
       border-radius: 4px;
     }
  }

}

</style>

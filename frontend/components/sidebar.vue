<template>
  <div class="categoriesSidebar">
    <div class="currentCategory">Текущая категория</div>
      Категории
      <div class="categoriesItem">Ботинки</div>
      <div class="categoriesItem">Ботинки</div>
      <div class="categoriesItem">Сапоги</div>
      <div class="categoriesItem">Ботинки</div>
      <div class="categoriesItem">Ботинки</div>
      <div class="categoriesItem">Ботинки</div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>
.categoriesSidebar {
  display: flex;
  flex-direction: column;
  width: 19%;
}
</style>

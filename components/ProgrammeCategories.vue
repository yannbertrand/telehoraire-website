<script setup lang="ts">
defineProps<{
  categories: string[];
}>();
</script>

<template>
  <div class="categories">
    <span v-for="category of categories" :key="category" class="category">{{
      category
    }}</span>
  </div>
</template>

<style>
.categories {
  display: flex;
  flex-wrap: wrap;
  gap: var(--pico-grid-column-gap);
}

.category {
  background-color: var(--pico-secondary-background);
  border-radius: var(--pico-border-radius);
  color: var(--pico-secondary-inverse);
  display: inline-block;
  font-size: calc(var(--pico-font-size) * 0.7);
  padding: calc(var(--pico-spacing) / 4) calc(var(--pico-spacing));
}
</style>

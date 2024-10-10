<script setup lang="ts">
const { data } = await useFetch('/api/now');

const programmeImages = computed(() => {
  if (!data.value) return [];

  return data.value.programmes
    .map((programme) => {
      if (!programme.icon || programme.icon.length === 0) {
        return '';
      }

      return programme.icon;
    })
    .filter((image) => image !== '');
});
</script>

<template>
  <div class="hidden">
    <!-- Nuxt Image: Pre download and optimize icons server side -->
    <ProgrammeLargeCover
      v-for="icon of programmeImages"
      :key="icon[0].src"
      :icon
      :preload="false"
      :lazy-load="false"
    />
  </div>
</template>

<style>
.hidden {
  display: none;
}
</style>

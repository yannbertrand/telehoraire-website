<script setup lang="ts">
withDefaults(defineProps<{ width?: number; height?: number }>(), {
  width: 80,
  height: 80,
});
</script>

<template>
  <NuxtImg
    src="/canal-plus.svg"
    alt=""
    :width
    :height
    preload
    class="canal-plus-channel-cover"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .canal-plus-channel-cover {
    filter: grayscale(20%) brightness(80%);
  }
}
</style>

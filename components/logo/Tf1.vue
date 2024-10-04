<script setup lang="ts">
withDefaults(defineProps<{ width?: number; height?: number }>(), {
  width: 80,
  height: 80,
});
</script>

<template>
  <NuxtImg
    src="/tf1.svg"
    alt="TF1"
    :width
    :height
    preload
    class="tf1-channel-cover"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .tf1-channel-cover {
    filter: grayscale(20%) saturate(80%);
  }
}
</style>

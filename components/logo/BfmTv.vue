<script setup lang="ts">
withDefaults(defineProps<{ width?: number; height?: number }>(), {
  width: 80,
  height: 80,
});
</script>

<template>
  <NuxtImg
    src="/bfm-tv.svg"
    alt=""
    :width
    :height
    class="bfm-tv-channel-cover"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .bfm-tv-channel-cover {
    filter: grayscale(20%) saturate(80%) brightness(80%);
  }
}
</style>

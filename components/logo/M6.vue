<script setup lang="ts">
withDefaults(defineProps<{ width?: number; height?: number }>(), {
  width: 80,
  height: 80,
});
</script>

<template>
  <NuxtImg
    src="/m6.svg"
    alt=""
    :width
    :height
    preload
    class="m6-channel-cover"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .m6-channel-cover {
    filter: grayscale(20%) saturate(80%) brightness(80%);
  }
}
</style>

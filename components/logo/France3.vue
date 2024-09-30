<script setup lang="ts">
withDefaults(defineProps<{ width?: number; height?: number }>(), {
  width: 80,
  height: 80,
});
</script>

<template>
  <NuxtImg
    src="/france3.svg"
    alt=""
    :width
    :height
    preload
    class="france3-channel-cover"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .france3-channel-cover {
    filter: invert(100%) hue-rotate(180deg);
  }
}
</style>

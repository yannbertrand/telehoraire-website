<script setup lang="ts">
withDefaults(defineProps<{ width?: number; height?: number }>(), {
  width: 80,
  height: 80,
});
</script>

<template>
  <NuxtImg
    src="/tfx.svg"
    alt=""
    :width
    :height
    loading="lazy"
    class="tfx-channel-cover"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .tfx-channel-cover {
    filter: grayscale(20%) saturate(80%) brightness(80%);
  }
}
</style>

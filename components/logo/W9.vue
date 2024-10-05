<script setup lang="ts">
withDefaults(defineProps<{ width?: number; height?: number }>(), {
  width: 80,
  height: 80,
});
</script>

<template>
  <NuxtImg
    src="/w9.svg"
    alt=""
    :width
    :height
    loading="lazy"
    class="w9-channel-cover"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .w9-channel-cover {
    filter: saturate(90%) brightness(80%);
  }
}
</style>

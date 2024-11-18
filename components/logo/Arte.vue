<script setup lang="ts">
withDefaults(defineProps<{ width?: number; height?: number }>(), {
	width: 80,
	height: 80,
});
</script>

<template>
  <NuxtImg
    src="/arte.svg"
    alt=""
    :width
    :height
    loading="lazy"
    class="arte-channel-cover"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .arte-channel-cover {
    filter: grayscale(20%) saturate(80%);
  }
}
</style>

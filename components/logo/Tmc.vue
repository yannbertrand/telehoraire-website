<script setup lang="ts">
withDefaults(defineProps<{ width?: number; height?: number }>(), {
	width: 80,
	height: 80,
});
</script>

<template>
  <NuxtImg
    src="/tmc.svg"
    alt=""
    :width
    :height
    loading="lazy"
    class="tmc-channel-cover"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .tmc-channel-cover {
    filter: grayscale(20%) brightness(80%);
  }
}
</style>

<script setup lang="ts">
withDefaults(defineProps<{ width?: number; height?: number }>(), {
	width: 80,
	height: 80,
});
</script>

<template>
  <NuxtImg
    src="/c8.svg"
    alt=""
    :width
    :height
    loading="lazy"
    class="channel-cover--c8"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .channel-cover--c8 {
    filter: grayscale(20%) brightness(80%);
  }
}
</style>

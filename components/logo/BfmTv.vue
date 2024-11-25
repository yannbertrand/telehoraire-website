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
    loading="lazy"
    class="channel-cover--bfm-tv"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .channel-cover--bfm-tv {
    filter: grayscale(20%) saturate(80%) brightness(80%);
  }
}
</style>

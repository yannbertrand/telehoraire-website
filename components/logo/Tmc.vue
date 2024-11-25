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
    class="channel-cover--tmc"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .channel-cover--tmc {
    filter: grayscale(20%) brightness(80%);
  }
}
</style>

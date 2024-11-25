<script setup lang="ts">
withDefaults(defineProps<{ width?: number; height?: number }>(), {
	width: 80,
	height: 80,
});
</script>

<template>
  <NuxtImg
    src="/tf1.svg"
    alt=""
    :width
    :height
    preload
    class="channel-cover--tf1"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .channel-cover--tf1 {
    filter: grayscale(20%) saturate(80%) brightness(80%);
  }
}
</style>

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
    loading="lazy"
    class="channel-cover--m6"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .channel-cover--m6 {
    filter: grayscale(20%) saturate(80%) brightness(80%);
  }
}
</style>

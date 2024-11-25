<script setup lang="ts">
withDefaults(defineProps<{ width?: number; height?: number }>(), {
	width: 80,
	height: 80,
});
</script>

<template>
  <NuxtImg
    src="/canal-plus.svg"
    alt=""
    :width
    :height
    loading="lazy"
    class="channel-cover--canal-plus"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .channel-cover--canal-plus {
    filter: grayscale(20%) brightness(80%);
  }
}
</style>

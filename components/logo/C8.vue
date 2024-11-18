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
    class="c8-channel-cover"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .c8-channel-cover {
    filter: grayscale(20%) brightness(80%);
  }
}
</style>

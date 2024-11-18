<script setup lang="ts">
withDefaults(defineProps<{ width?: number; height?: number }>(), {
	width: 80,
	height: 80,
});
</script>

<template>
  <NuxtImg
    src="/france4.svg"
    alt=""
    :width
    :height
    loading="lazy"
    class="france4-channel-cover"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .france4-channel-cover {
    filter: invert(100%) hue-rotate(180deg) brightness(80%);
  }
}
</style>

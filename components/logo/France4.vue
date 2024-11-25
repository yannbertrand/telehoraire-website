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
    class="channel-cover--france4"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .channel-cover--france4 {
    filter: invert(100%) hue-rotate(180deg) brightness(80%);
  }
}
</style>

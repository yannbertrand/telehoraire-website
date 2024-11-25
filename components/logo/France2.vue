<script setup lang="ts">
withDefaults(defineProps<{ width?: number; height?: number }>(), {
	width: 80,
	height: 80,
});
</script>

<template>
  <NuxtImg
    src="/france2.svg"
    alt=""
    :width
    :height
    preload
    class="channel-cover--france2"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .channel-cover--france2 {
    filter: invert(100%) hue-rotate(180deg) brightness(80%);
  }
}
</style>

<script setup lang="ts">
withDefaults(defineProps<{ width?: number; height?: number }>(), {
	width: 80,
	height: 80,
});
</script>

<template>
  <NuxtImg
    src="/france5.svg"
    alt=""
    :width
    :height
    loading="lazy"
    class="channel-cover--france5"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .channel-cover--france5 {
    filter: invert(100%) hue-rotate(180deg) brightness(80%);
  }
}
</style>

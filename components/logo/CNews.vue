<script setup lang="ts">
withDefaults(defineProps<{ width?: number; height?: number }>(), {
	width: 80,
	height: 80,
});
</script>

<template>
  <NuxtImg
    src="/cnews.svg"
    alt=""
    :width
    :height
    loading="lazy"
    class="channel-cover--cnews"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .channel-cover--cnews {
    filter: saturate(90%) brightness(80%);
  }
}
</style>

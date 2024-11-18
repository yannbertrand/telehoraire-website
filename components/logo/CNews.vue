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
    class="cnews-channel-cover"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .cnews-channel-cover {
    filter: saturate(90%) brightness(80%);
  }
}
</style>

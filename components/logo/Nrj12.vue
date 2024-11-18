<script setup lang="ts">
withDefaults(defineProps<{ width?: number; height?: number }>(), {
	width: 80,
	height: 80,
});
</script>

<template>
  <NuxtImg
    src="/nrj12.svg"
    alt=""
    :width
    :height
    loading="lazy"
    class="nrj12-channel-cover"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .nrj12-channel-cover {
    filter: grayscale(20%) saturate(80%) brightness(80%);
  }
}
</style>

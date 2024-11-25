<script setup lang="ts">
withDefaults(defineProps<{ width?: number; height?: number }>(), {
	width: 80,
	height: 80,
});
</script>

<template>
  <NuxtImg
    src="/cstar.svg"
    alt=""
    :width
    :height
    loading="lazy"
    class="channel-cover--cstar"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .channel-cover--cstar {
    filter: saturate(90%) brightness(80%);
  }
}
</style>

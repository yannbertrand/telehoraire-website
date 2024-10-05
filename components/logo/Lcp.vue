<script setup lang="ts">
withDefaults(defineProps<{ width?: number; height?: number }>(), {
  width: 80,
  height: 80,
});
</script>

<template>
  <NuxtImg
    src="/lcp.svg"
    alt=""
    :width
    :height
    loading="lazy"
    class="lcp-channel-cover"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .lcp-channel-cover {
    filter: invert(100%) brightness(80%);
  }
}
</style>

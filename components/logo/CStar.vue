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
    class="cstar-channel-cover"
  />
</template>

<style>
@media (prefers-color-scheme: dark) {
  .cstar-channel-cover {
    filter: saturate(90%) brightness(80%);
  }
}
</style>

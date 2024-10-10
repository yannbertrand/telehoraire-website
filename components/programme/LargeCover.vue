<script setup lang="ts">
import type { Icon } from '~/server/types.js';

defineProps<{
  icon: Icon[];
  preload: boolean;
}>();
</script>

<template>
  <NuxtImg
    :src="icon[0].src"
    alt=""
    :preload
    :loading="preload ? 'eager' : 'lazy'"
    class="programme-large-illustration"
  />
</template>

<style>
.programme-large-illustration {
  max-width: 480px;
  aspect-ratio: 16/9;
  height: auto;
  object-fit: cover;
}

@media (prefers-color-scheme: dark) {
  .programme-large-illustration {
    filter: grayscale(20%) saturate(90%);
  }
}
</style>

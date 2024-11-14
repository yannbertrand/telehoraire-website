<script setup lang="ts">
import type { Icon } from '~/server/types.js';

const props = defineProps<{
  icon: Icon[];
  preload: boolean;
}>();
</script>

<template>
  <NuxtImg
    :src="props.icon[0].src"
    alt=""
    width="60"
    height="140"
    :preload
    :loading="preload ? 'eager' : 'lazy'"
    class="programme-small-cover"
  />
</template>

<style>
.programme-small-cover {
  width: 60px;
  height: 140px;
  object-fit: cover;
  border-radius: var(--pico-border-radius);
}

@media (prefers-color-scheme: dark) {
  .programme-small-cover {
    filter: grayscale(20%) saturate(90%);
  }
}
</style>

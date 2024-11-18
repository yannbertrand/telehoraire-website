<script setup lang="ts">
import type { Icon } from "~/server/types.js";

defineProps<{
	icon: Icon[];
	preload: boolean;
	lazyLoad: boolean;
}>();
</script>

<template>
  <NuxtImg
    :src="icon[0].src"
    alt=""
    :preload
    :loading="lazyLoad ? 'lazy' : undefined"
    class="programme-large-illustration"
  />
</template>

<style>
.programme-large-illustration {
  max-width: var(--programme-max-width);
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

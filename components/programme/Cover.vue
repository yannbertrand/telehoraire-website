<script setup lang="ts">
const props = defineProps<{
  icon: {
    src: string;
  }[];
  preload: boolean;
}>();
</script>

<template>
  <NuxtImg
    :src="props.icon[0].src"
    alt=""
    width="60"
    height="140"
    format="jpg"
    :preload
    :loading="preload ? 'eager' : 'lazy'"
    class="programme-cover"
  />
</template>

<style>
.programme-cover {
  width: 60px;
  height: 140px;
  object-fit: cover;
  border-radius: var(--pico-border-radius);
}

@media (prefers-color-scheme: dark) {
  .programme-cover {
    filter: grayscale(20%) saturate(90%);
  }
}
</style>

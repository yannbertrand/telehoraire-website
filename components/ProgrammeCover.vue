<script setup lang="ts">
const props = defineProps<{
  icon: {
    src: string;
  }[];
}>();
</script>

<template>
  <img
    v-if="props.icon && props.icon.length > 0"
    :src="props.icon[0].src"
    alt=""
    width="60"
    height="140"
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
</style>

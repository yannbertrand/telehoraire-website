<script setup lang="ts">
const props = defineProps<{
  start: string;
  stop: string;
}>();

const $start = new Date(props.start);
const $stop = new Date(props.stop);

const total = $stop.getTime() - $start.getTime();
const progress = Date.now() - $start.getTime();
</script>

<template>
  <ClientOnly>
    <progress :value="progress" :max="total" />
    <template #fallback>
      <progress value="0" max="100" />
    </template>
  </ClientOnly>
</template>

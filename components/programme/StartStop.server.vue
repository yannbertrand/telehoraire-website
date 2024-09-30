<script setup lang="ts">
const props = defineProps<{
  start: string;
  stop: string;
}>();

function getStartStop() {
  const $start = new Date(props.start);
  const $stop = new Date(props.stop);
  const dateTimeFormat = new Intl.DateTimeFormat('fr-FR', {
    timeStyle: 'short',
  });
  return dateTimeFormat.formatRange($start, $stop);
}
</script>

<template>
  {{ getStartStop() }}
</template>

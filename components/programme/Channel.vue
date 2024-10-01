<script setup lang="ts">
defineProps<{
  channel: string;
}>();
</script>

<template>
  <LogoTf1 v-if="channel === 'TF1.fr'" :width="60" :height="60" />
  <LogoFrance2 v-else-if="channel === 'France2.fr'" :width="60" :height="60" />
  <LogoFrance3 v-else-if="channel === 'France3.fr'" :width="60" :height="60" />
  <span v-else>{{ channel }}</span>
</template>

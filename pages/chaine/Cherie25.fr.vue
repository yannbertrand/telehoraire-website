<script setup lang="ts">
const channelId = "Cherie25.fr";

const { data } = await useFetch(`/api/prime/${channelId}`);
</script>

<template>
  <NuxtLayout name="telehoraire">
    <template #title>Ce soir sur {{ channelId }}</template>
    <template #last-update>{{ data?.lastUpdate }}</template>

    <ProgrammeChannel :channel="channelId" class="channel-logo" />

    <ProgrammeDetails
      v-if="data && data.programmes"
      v-for="(programme, index) of data.programmes"
      :key="programme.start"
      :programme="programme"
      :shouldPreload="index < 3"
    />
  </NuxtLayout>
</template>

<style>
.channel-logo {
  margin-bottom: var(--pico-block-spacing-vertical);
}
</style>

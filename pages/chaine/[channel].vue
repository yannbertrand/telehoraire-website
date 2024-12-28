<script setup lang="ts">
const route = useRoute();

const channelId = `${route.params.channel}`;

const { data } = await useFetch(`/api/prime/${channelId}`);
</script>

<template>
  <NuxtLayout name="telehoraire">
    <template #title>Ce soir sur {{ data?.channel?.displayName }}</template>
    <template #last-update>{{ data?.lastUpdate }}</template>

    <ProgrammeChannel :channel-id="channelId" class="channel-logo" />

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

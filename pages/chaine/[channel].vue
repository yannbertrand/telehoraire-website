<script setup lang="ts">
const route = useRoute();

const channelId = `${route.params.channel}`;

const { data } = await useFetch(`/api/prime/${channelId}`);
</script>

<template>
  <h1><NuxtLink to="/">Téléhoraire</NuxtLink></h1>

  <hr />

  <div class="channel-title-section">
    <hgroup class="channel-title">
      <h2>{{ channelId }}</h2>
      <p>Ce soir</p>
    </hgroup>
    <ProgrammeChannel :channel="channelId" />
  </div>

  <ProgrammeDetails
    v-if="data && data.programmes"
    v-for="(programme, index) of data.programmes"
    :key="programme.start"
    :programme="programme"
    :shouldPreload="index < 3"
  />
</template>

<style>
.channel-title-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: var(--pico-spacing);
  margin-bottom: var(--pico-block-spacing-vertical);
}
.channel-title {
  height: 100%;
  margin: 0;
}
</style>

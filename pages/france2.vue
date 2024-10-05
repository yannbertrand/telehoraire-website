<script setup>
const { data, error } = await useAsyncData('france2PrimeData', () =>
  $fetch('https://yannbertrand.github.io/telehoraire-api/France2.fr.prime.json')
);
</script>

<template>
  <h1><NuxtLink to="/">Téléhoraire</NuxtLink></h1>

  <hr />

  <div class="channel-title-section">
    <hgroup class="channel-title">
      <h2>{{ data.channels[0].displayName }}</h2>
      <p>Ce soir</p>
    </hgroup>

    <LogoFrance2 />
  </div>

  <ProgrammeDetails
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

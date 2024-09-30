<script setup>
import France3Logo from '~/components/logo/France3.vue';
import ProgrammeDetails from '~/components/ProgrammeDetails.vue';

const { data, error } = await useAsyncData('france3PrimeData', () =>
  $fetch('https://yannbertrand.github.io/telehoraire-api/France3.fr.prime.json')
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

    <France3Logo />
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

@media (prefers-color-scheme: dark) {
  .france3-channel-cover {
    filter: invert(100%) hue-rotate(180deg);
  }
}
</style>

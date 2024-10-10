<script setup lang="ts">
import type { Programme } from '~/server/types.js';

const { data } = await useFetch('/api/now');

const programmesGroupedByChannel = computed(() => {
  if (!data.value) return {};

  const now = new Date();
  const nbOfProgrammesPerChannel: { [channelId: string]: number } = {};
  const nextProgrammes = data.value.programmes.filter((programme) => {
    const stop = new Date(programme.stop);
    if (!nbOfProgrammesPerChannel[programme.channel]) {
      nbOfProgrammesPerChannel[programme.channel] = 0;
    }
    nbOfProgrammesPerChannel[programme.channel]++;

    return stop >= now;
  });

  const programmesGroupedByChannel = Object.groupBy(
    nextProgrammes,
    (programme) => programme.channel
  );

  return programmesGroupedByChannel as { [channelId: string]: Programme[] };
});

const programmeImages = computed(() => {
  if (!data.value) return [];

  return data.value.programmes
    .map((programme) => {
      if (!programme.icon || programme.icon.length === 0) {
        return '';
      }

      return programme.icon;
    })
    .filter((image) => image !== '');
});
</script>

<template>
  <hgroup class="heading">
    <h1 class="heading-title">Téléhoraire > Programmes en cours</h1>
    <p>Le programme télé accessible librement</p>
  </hgroup>

  <div v-if="data">
    <ClientOnly>
      <template
        v-if="programmesGroupedByChannel"
        v-for="(programmes, channel) of programmesGroupedByChannel"
      >
        <h2 class="prime-channel">{{ channel }}</h2>

        <div class="prime-programmes-container">
          <div class="prime-programmes" tabindex="0">
            <ProgrammeSummary
              v-for="programme of programmes.slice(0, 5)"
              :key="programme.start"
              :programme="programme"
              :shouldPreload="false"
              class="programme"
            />
          </div>
        </div>
      </template>
    </ClientOnly>

    <hr />
  </div>

  <div class="hidden">
    <!-- Nuxt Image: Pre download and optimize icons server side -->
    <ProgrammeLargeCover
      v-for="icon of programmeImages"
      :key="icon[0].src"
      :icon
      :preload="false"
    />
  </div>
</template>

<style scoped>
.heading {
  margin-bottom: var(--pico-block-spacing-vertical);
}
.heading-title {
  margin-bottom: calc(0.25 * var(--pico-block-spacing-vertical));
}
.prime-channel {
  margin-top: calc(1.5 * var(--pico-block-spacing-vertical));
  margin-bottom: calc(2 * var(--pico-block-spacing-vertical));
}
.prime-programmes-container {
  --top-spacing: calc(-2 * var(--pico-block-spacing-vertical));
  --bottom-spacing: calc(-0.5 * var(--pico-block-spacing-vertical));

  margin-top: calc(var(--top-spacing) - var(--pico-block-spacing-vertical));
  margin-bottom: var(--bottom-spacing);

  --min-horizontal-spacing: var(--pico-spacing);
  --left-spacing: calc(-1 * var(--min-horizontal-spacing));
  --right-spacing: calc(-1 * var(--min-horizontal-spacing));

  margin-left: var(--left-spacing);
  margin-right: var(--left-spacing);
}
.prime-programmes {
  display: flex;
  padding-top: calc(-1 * var(--top-spacing));
  padding-bottom: calc(-1 * var(--bottom-spacing));
  padding-left: calc(-1 * var(--left-spacing));
  padding-right: calc(-1 * var(--right-spacing));
  gap: var(--pico-spacing);
  overflow-y: auto;
}
.programme {
  flex: 1 0 90%;
}
.hidden {
  display: none;
}
</style>

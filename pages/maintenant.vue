<script setup lang="ts">
const { data } = await useFetch("/api/now");

function getChannelDisplayName(channelId: string) {
	return data.value?.channels.find((channel) => channel.id === channelId)
		?.displayName;
}
</script>

<template>
  <hgroup class="heading">
    <h1 class="heading-title">Téléhoraire > Programmes en cours</h1>
    <p>Le programme télé accessible librement</p>
  </hgroup>

  <div v-if="data">
    <ClientOnly>
      <template
        v-if="data.programmesGroupedByChannel"
        v-for="(programmes, channel, index) of data.programmesGroupedByChannel"
      >
        <h2 class="prime-channel">{{ getChannelDisplayName(channel) }}</h2>

        <div class="prime-programmes-container">
          <div class="prime-programmes" tabindex="0">
            <ProgrammeSummary
              v-for="programme of programmes?.slice(0, 5)"
              :key="programme.start"
              :programme="programme"
              :should-preload="false"
              :should-lazy-load="index >= 2"
              class="programme"
            />
          </div>
        </div>
      </template>
    </ClientOnly>

    <hr />
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
  --top-spacing: calc(-1 * var(--pico-block-spacing-vertical));
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
</style>

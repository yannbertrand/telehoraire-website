<script setup lang="ts">
const { data } = await useFetch("/api/prime");

function getChannelDisplayName(channelId: string) {
	return data.value?.channels.find((channel) => channel.id === channelId)
		?.displayName;
}
</script>

<template>
  <NuxtLayout name="telehoraire">
    <template #title>Ce soir à la télé</template>
    <template #last-update>{{ data?.lastUpdate }}</template>

    <div v-if="data">
      <template
        v-if="data && data.programmesGroupedByChannel"
        v-for="(programmes, channel, index) of data.programmesGroupedByChannel"
      >
        <h2 class="channel">
          <NuxtLink
            :to="{ name: 'chaine-channel', params: { channel } }"
            class="channel-link"
            >{{ getChannelDisplayName(channel) }}</NuxtLink
          >
        </h2>

        <div class="programmes-container">
          <div class="programmes" tabindex="0">
            <ProgrammeSummary
              v-for="programme of programmes"
              :key="programme.start"
              :programme="programme"
              :should-preload="index < 2"
              :should-lazy-load="index >= 2"
              class="programme"
            />
          </div>
        </div>
      </template>

      <hr />
    </div>

    <p class="github-link">
      Voir
      <NuxtLink
        to="https://github.com/yannbertrand/telehoraire-website"
        external
        >le projet GitHub <GithubLogo /></NuxtLink
      >.
    </p>
  </NuxtLayout>
</template>

<style scoped>
.channel {
  margin-top: calc(1.5 * var(--pico-block-spacing-vertical));
  margin-bottom: calc(2 * var(--pico-block-spacing-vertical));
  .channel-link {
    padding: var(--pico-spacing);
  }
}

.programmes-container {
  --top-spacing: calc(-1 * var(--pico-block-spacing-vertical));
  --bottom-spacing: calc(-0.5 * var(--pico-block-spacing-vertical));

  margin-top: calc(var(--top-spacing) - var(--pico-block-spacing-vertical));
  margin-bottom: var(--bottom-spacing);

  --min-horizontal-spacing: var(--pico-spacing);
  --left-spacing: calc(-1 * var(--min-horizontal-spacing));
  --right-spacing: calc(-1 * var(--min-horizontal-spacing));

  margin-left: var(--left-spacing);
  margin-right: var(--left-spacing);

  .programmes {
    display: flex;
    padding-top: calc(-1 * var(--top-spacing));
    padding-bottom: calc(-1 * var(--bottom-spacing));
    padding-left: calc(-1 * var(--left-spacing));
    padding-right: calc(-1 * var(--right-spacing));
    gap: var(--pico-spacing);
    overflow-y: auto;

    .programme {
      flex: 1 0 90%;
    }
  }
}
</style>

<script setup lang="ts">
const { data } = await useFetch('/api/prime');
</script>

<template>
  <hgroup class="heading">
    <h1 class="heading-title">Téléhoraire</h1>
    <p>Le programme télé accessible librement</p>
  </hgroup>

  <div v-if="data">
    <p>Dernière mise à jour : {{ data.lastUpdate }}</p>

    <template
      v-if="data && data.programmesGroupedByChannel"
      v-for="(programmes, channel, index) of data.programmesGroupedByChannel"
    >
      <h2 class="prime-channel">{{ channel }}</h2>

      <div class="prime-programmes-container">
        <div class="prime-programmes" tabindex="0">
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

  <article class="programmes-channel">
    <h2>Les programmes par chaine</h2>

    <ul class="channels">
      <li class="channel-item">
        <NuxtLink to="tf1" class="channel-link" noPrefetch>
          <LogoTf1 />
          <div>TF1</div>
        </NuxtLink>
      </li>
      <li class="channel-item">
        <NuxtLink to="france2" class="channel-link" noPrefetch>
          <LogoFrance2 />
          <div>France 2</div>
        </NuxtLink>
      </li>
      <li class="channel-item">
        <NuxtLink to="france3" class="channel-link" noPrefetch>
          <LogoFrance3 />
          <div>France 3</div>
        </NuxtLink>
      </li>
    </ul>
  </article>

  <p class="github-link">
    Voir
    <NuxtLink to="https://github.com/yannbertrand/telehoraire-website" external
      >le projet GitHub <GithubLogo /></NuxtLink
    >.
  </p>
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
.programmes-channel {
  margin-top: calc(2 * var(--pico-block-spacing-vertical));
}
.channels {
  padding: 0;
}
.channel-item {
  list-style: none;
  text-align: center;
}
.channel-link {
  display: block;
  padding: var(--pico-spacing);
}
</style>

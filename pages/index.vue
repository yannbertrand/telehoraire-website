<script setup lang="ts">
import Tf1Logo from '~/components/logo/Tf1.vue';
import France2Logo from '~/components/logo/France2.vue';
import France3Logo from '~/components/logo/France3.vue';
import GithubLogo from '~/components/GithubLogo.vue';

const { data, error } = await useAsyncData('tntPrimeData', () =>
  $fetch('https://yannbertrand.github.io/telehoraire-api/tnt.prime.fr.json')
);
</script>

<template>
  <hgroup class="heading">
    <h1 class="heading-title"><NuxtLink to="/">Téléhoraire</NuxtLink></h1>
    <p>Le programme télé accessible librement</p>
  </hgroup>

  <div class="prime-programmes">
    <ProgrammeSummary
      v-for="(programme, index) of data.programmes"
      :key="programme.start"
      :programme="programme"
      :shouldPreload="index < 3"
      class="programme"
    />
  </div>

  <hr />

  <article class="programmes-channel">
    <h2>Les programmes par chaine</h2>

    <ul class="channels">
      <li class="channel-item">
        <NuxtLink to="tf1" class="channel-link">
          <Tf1Logo />
          <div>TF1</div>
        </NuxtLink>
      </li>
      <li class="channel-item">
        <NuxtLink to="france2" class="channel-link">
          <France2Logo />
          <div>France 2</div>
        </NuxtLink>
      </li>
      <li class="channel-item">
        <NuxtLink to="france3" class="channel-link">
          <France3Logo />
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
  margin-bottom: calc(0.5 * var(--pico-block-spacing-vertical));
}
.heading-title {
  margin-bottom: calc(0.25 * var(--pico-block-spacing-vertical));
}
.prime-programmes {
  display: flex;
  flex-wrap: wrap;
  gap: var(--pico-spacing);
  justify-content: space-evenly;
}
.programme {
  flex: 1 1 auto;
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

<script setup lang="ts">
import Tf1Logo from '~/components/logo/Tf1.vue';
import France2Logo from '~/components/logo/France2.vue';
import France3Logo from '~/components/logo/France3.vue';
import GithubLogo from '~/components/GithubLogo.vue';
</script>

<template>
  <hgroup class="heading">
    <h1 class="heading-title"><NuxtLink to="/">Téléhoraire</NuxtLink></h1>
    <p>Le programme télé accessible librement</p>
  </hgroup>

  <p class="github-link">
    Voir
    <NuxtLink to="https://github.com/yannbertrand/telehoraire-website" external
      >le projet GitHub <GithubLogo /></NuxtLink
    >.
  </p>

  <article>
    <h2>TNT</h2>

    <ul class="grid channels">
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
</template>

<style scoped>
.heading {
  margin-bottom: calc(0.5 * var(--pico-block-spacing-vertical));
}
.heading-title {
  margin-bottom: calc(0.25 * var(--pico-block-spacing-vertical));
}
.github-link {
  margin-bottom: var(--pico-block-spacing-vertical);
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

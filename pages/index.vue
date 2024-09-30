<script setup lang="ts">
import GithubLogo from '~/components/GithubLogo.vue';
</script>

<template>
  <hgroup>
    <h1><NuxtLink to="/">Téléhoraire</NuxtLink></h1>
    <p>Le programme télé accessible librement</p>
  </hgroup>

  <p>
    Voir
    <NuxtLink to="https://github.com/yannbertrand/telehoraire-website" external
      >le projet GitHub <GithubLogo /></NuxtLink
    >.
  </p>

  <h2>TNT</h2>

  <article>
    <ul>
      <li><NuxtLink to="tf1">TF1</NuxtLink></li>
      <li><NuxtLink to="france2">France 2</NuxtLink></li>
      <li><NuxtLink to="france3">France 3</NuxtLink></li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import type { Programme } from '~/server/types.js';

const router = useRouter();

function getProgramme() {
  return history.state.programme as Programme;
}
</script>

<template>
  <h1><NuxtLink to="/">Téléhoraire</NuxtLink></h1>
  <button @click="router.back()">Revenir en arrière</button>

  <hr />

  <ClientOnly>
    <ProgrammeDetails :programme="getProgramme()" :shouldPreload="true" />
  </ClientOnly>
</template>

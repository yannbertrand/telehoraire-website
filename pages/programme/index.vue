<script setup lang="ts">
import type { Programme } from "~/server/types.js";

const router = useRouter();

if (router.options.history.state.programme == null) {
	router.replace("/");
}
</script>

<template>
  <h1><NuxtLink to="/">Téléhoraire</NuxtLink></h1>
  <button @click="router.back()">Revenir en arrière</button>

  <hr />

  <ClientOnly>
    <ProgrammeDetails
      v-if="router.options.history.state.programme"
      :programme="router.options.history.state.programme as Programme"
      :shouldPreload="false"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
import type { Programme } from "~/server/types.js";

const router = useRouter();

if (router.options.history.state.programme == null) {
	router.replace("/");
}
</script>

<template>
  <NuxtLayout name="telehoraire">
    <template #title>Détails d'un programme</template>

    <button class="go-back-button" @click="router.back()">
      Revenir en arrière
    </button>

    <ClientOnly>
      <ProgrammeDetails
        v-if="router.options.history.state.programme"
        :programme="router.options.history.state.programme as Programme"
        :shouldPreload="false"
      />
    </ClientOnly>
  </NuxtLayout>
</template>

<style>
.go-back-button {
  margin-bottom: var(--pico-block-spacing-vertical);
}
</style>

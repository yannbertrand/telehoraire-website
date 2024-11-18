<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'fr',
  },
});
</script>

<template>
  <main class="container">
    <slot />
  </main>
</template>

<style>
:root {
  --pico-block-spacing-vertical: 2rem;
  --programme-max-width: 360px;
}
.container {
  padding-top: var(--pico-spacing);
  padding-bottom: var(--pico-spacing);
}
</style>

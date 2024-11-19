<script setup lang="ts">
useHead({
	htmlAttrs: {
		lang: "fr",
	},
});
</script>

<template>
  <header class="heading">
    <hgroup class="heading-titles">
      <h1 class="heading-title"><NuxtLink to="/">Téléhoraire</NuxtLink></h1>
      <p v-if="$slots.title"><slot name="title"></slot></p>
    </hgroup>
  </header>

  <main class="container">
    <p v-if="$slots['last-update']">
      Dernière mise à jour&nbsp;: <slot name="last-update"></slot>
    </p>

    <hr />

    <slot />
  </main>
</template>

<style>
:root {
  --pico-block-spacing-vertical: 2rem;
  --programme-max-width: 360px;
}

[data-theme='light'],
:root:not([data-theme='dark']) {
  --pico-header-background: rgba(255, 255, 255, 0.75);
  --pico-header-border-color: rgba(220, 220, 220, 0.9);
}

/* Dark color scheme (Auto) */
/* Automatically enabled if user has Dark mode enabled */
@media only screen and (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    --pico-header-background: rgba(19, 23, 31, 0.75);
    --pico-header-border-color: rgba(32, 38, 50, 0.9);
  }
}

/* Dark color scheme (Forced) */
/* Enabled if forced with data-theme="dark" */
[data-theme='dark'] {
  --pico-header-background: rgba(19, 23, 31, 0.75);
  --pico-header-border-color: rgba(32, 38, 50, 0.9);
}

.heading {
  position: sticky;
  top: 0;
  padding: var(--pico-spacing);
  z-index: 2;
  box-shadow: var(--pico-card-box-shadow);
  backdrop-filter: blur(1rem);
  background-color: var(--pico-header-background);
  border-bottom: var(--pico-border-width) solid var(--pico-header-border-color);
}
.heading-titles {
  margin: 0;
}
.container {
  padding-top: var(--pico-spacing);
  padding-bottom: var(--pico-spacing);
}
</style>

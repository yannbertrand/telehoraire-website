<script setup lang="ts">
useHead({
	htmlAttrs: {
		lang: "fr",
	},
});

const isMenuOpened = ref(false);
</script>

<template>
  <NuxtLoadingIndicator
    color="repeating-linear-gradient(to right,var(--pico-color-blue-500) 0%, var(--pico-color-azure-500) 100%)"
  />

  <header class="heading">
    <hgroup class="titles">
      <h1 class="title"><NuxtLink to="/">Téléhoraire</NuxtLink></h1>
      <p v-if="$slots.title"><slot name="title"></slot></p>
    </hgroup>
    <button @click="isMenuOpened = true" aria-label="Ouvrir le menu">
      <BurgerLogo />
    </button>
  </header>

  <main class="container">
    <template v-if="$slots['last-update']">
      <p>Dernière mise à jour&nbsp;: <slot name="last-update"></slot></p>

      <hr />
    </template>

    <slot />

    <dialog :open="isMenuOpened" class="menu">
      <button
        @click="isMenuOpened = false"
        class="close-button"
        aria-label="Fermer le menu"
      >
        <CloseButton />
      </button>

      <h1>Menu</h1>
      <ul class="links">
        <li class="link"><NuxtLink to="/">Accueil</NuxtLink></li>
        <li class="link">
          <NuxtLink to="/maintenant">En cours</NuxtLink>
        </li>
        <li class="link external">
          <NuxtLink
            to="https://github.com/yannbertrand/telehoraire-website"
            target="_blank"
            no-rel
            >GitHub <GithubLogo
          /></NuxtLink>
        </li>
      </ul>
    </dialog>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--pico-spacing);
  top: 0;
  padding: var(--pico-spacing);
  z-index: 2;
  box-shadow: var(--pico-card-box-shadow);
  backdrop-filter: blur(1rem);
  background-color: var(--pico-header-background);
  border-bottom: var(--pico-border-width) solid var(--pico-header-border-color);

  .titles {
    margin: 0;
  }
}

.container {
  padding-top: var(--pico-spacing);
  padding-bottom: var(--pico-spacing);
}

.menu {
  display: flex;
  flex-direction: column;

  .close-button {
    position: absolute;
    top: calc(var(--pico-spacing) + 4px);
    right: var(--pico-spacing);
  }

  .links {
    padding: 0;

    .link {
      list-style-type: none;
      font-size: 1.5rem;

      a {
        display: block;
        padding: calc(var(--pico-spacing) / 4);
      }
    }

    .external {
      margin-top: var(--pico-spacing);
    }
  }
}
</style>

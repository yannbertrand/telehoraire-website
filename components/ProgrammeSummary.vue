<script setup lang="ts">
import type { Programme } from '~/server/types.js';

const { programme } = defineProps<{
  programme: Programme;
  shouldPreload: boolean;
}>();
</script>

<template>
  <article class="programme">
    <div class="programme-cover" v-if="programme.icon">
      <ProgrammeLargeCover
        :icon="programme.icon"
        :preload="shouldPreload"
        class="programme-illustration"
      />
      <div class="programme-channel">
        <ProgrammeChannel :channel="programme.channel" />
      </div>
    </div>
    <ProgrammeChannel
      v-else
      :channel="programme.channel"
      class="programme-cover-only-channel"
    />

    <div class="programme-content">
      <h3 class="programme-title">
        <span v-html="programme.title"></span>
        <ProgrammeEpisodeNumber
          v-if="programme.episodeNum"
          :episodeNum="programme.episodeNum"
        />
      </h3>

      <ProgrammeCategories :categories="programme.category" />

      <p v-if="programme.subTitle" class="programme-subtitle">
        {{ programme.subTitle }}
      </p>
    </div>

    <footer>
      {{ programme.startStop }}
      <ProgrammeProgress :start="programme.start" :stop="programme.stop" />
    </footer>
  </article>
</template>

<style scoped>
.programme {
  max-width: 480px;
  height: 100%;
  padding-top: 0;
}

.programme-cover {
  position: relative;
}
.programme-cover .programme-illustration {
  width: 110%;
  margin-left: calc(-1 * var(--pico-block-spacing-horizontal));
  margin-right: calc(-1 * var(--pico-block-spacing-horizontal));
  border-top-left-radius: var(--pico-border-radius);
  border-top-right-radius: var(--pico-border-radius);
}
.programme-cover .programme-channel {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: calc(0.7 * var(--pico-spacing)) var(--pico-spacing);
  margin: auto;
  background: rgba(255, 255, 255, 0.8);
  border-radius: var(--pico-border-radius);
}
@media (prefers-color-scheme: dark) {
  .programme-cover .programme-channel {
    background: rgba(19, 23, 31, 0.8);
  }
}

.programme-cover-only-channel {
  padding-top: var(--pico-block-spacing-vertical);
  margin-bottom: calc(-0.75 * var(--pico-block-spacing-vertical));
}

.programme-content {
  margin-top: var(--pico-block-spacing-vertical);
}
.programme-content .programme-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--pico-spacing);
}
.programme-content .programme-subtitle {
  margin-top: var(--pico-typography-spacing-vertical);
  margin-bottom: 0;
}
</style>

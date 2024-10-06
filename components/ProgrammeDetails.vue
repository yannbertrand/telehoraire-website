<script setup lang="ts">
import type { Programme } from '~/server/types.js';

defineProps<{ programme: Programme; shouldPreload: boolean }>();
</script>

<template>
  <article>
    <div class="programme-content">
      <ProgrammeCover
        v-if="programme.icon"
        :icon="programme.icon"
        :preload="shouldPreload"
      />

      <div>
        <hgroup>
          <h3 class="programme-title">
            <span v-html="programme.title"></span>
            <ProgrammeEpisodeNumber
              v-if="programme.episodeNum"
              :episodeNum="programme.episodeNum"
            />
          </h3>
          <p v-html="programme.subTitle"></p>
        </hgroup>

        <ProgrammeCategories :categories="programme.category" />

        <p class="programme-description" v-html="programme.desc"></p>
      </div>
    </div>

    <footer>
      {{ programme.startStop }}
      <ProgrammeProgress :start="programme.start" :stop="programme.stop" />
    </footer>
  </article>
</template>

<style>
.programme-content {
  display: flex;
  flex-direction: row;
  gap: var(--pico-spacing);
}
.programme-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--pico-spacing);
}
.programme-description {
  padding-top: var(--pico-spacing);
  color: var(--pico-muted-color);
}
</style>

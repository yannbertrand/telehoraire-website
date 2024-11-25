<script setup lang="ts">
import type { Programme } from "~/server/types.js";

defineProps<{ programme: Programme; shouldPreload: boolean }>();
</script>

<template>
  <article class="programme-details">
    <div>
      <div>
        <hgroup>
          <h3 class="title">
            <span v-html="programme.title"></span>
            <ProgrammeEpisodeNumber
              v-if="programme.episodeNum"
              :episodeNum="programme.episodeNum"
            />
          </h3>
          <p v-html="programme.subTitle"></p>
        </hgroup>

        <ProgrammeCategories :categories="programme.category" />

        <ProgrammeLargeCover
          v-if="programme.icon"
          :icon="programme.icon"
          :preload="shouldPreload"
          :lazy-load="false"
          class="cover"
        />

        <p class="description" v-html="programme.desc"></p>
      </div>
    </div>

    <footer class="footer">
      {{ programme.startStop }}
      <ProgrammeProgress :start="programme.start" :stop="programme.stop" />
    </footer>
  </article>
</template>

<style>
.programme-details {
  --programme-max-width: 140px;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--pico-spacing);
  }
  .cover {
    float: right;
    margin-top: var(--pico-spacing);
    margin-left: var(--pico-spacing);
    margin-bottom: var(--pico-spacing);
  }
  .description {
    padding-top: var(--pico-spacing);
    color: var(--pico-muted-color);
  }
  .footer {
    clear: right;
  }
}
</style>

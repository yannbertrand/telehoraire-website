<script setup lang="ts">
import ProgrammeCategories from '~/components/programme/Categories.vue';
import ProgrammeCover from '~/components/programme/Cover.vue';
import ProgrammeEpisodeNumber from '~/components/programme/EpisodeNumber.vue';
import ProgrammeProgress from '~/components/programme/Progress.vue';
import ProgrammeStartStop from '~/components/programme/StartStop.server.vue';

defineProps<{ programme: any; shouldPreload: boolean }>();
</script>

<template>
  <article>
    <div class="programme-content">
      <div class="programme-images">
        <ProgrammeChannel :channel="programme.channel" />
        <ProgrammeCover
          v-if="programme.icon"
          :icon="programme.icon"
          :preload="shouldPreload"
        />
      </div>

      <div class="programme-info">
        <hgroup class="programme-heading">
          <h3 class="programme-title">
            <span>{{ programme.title }}</span>
            <ProgrammeEpisodeNumber
              v-if="programme.episodeNum"
              :episodeNum="programme.episodeNum"
            />
          </h3>
          <p>{{ programme.subTitle }}</p>
        </hgroup>

        <ProgrammeCategories :categories="programme.category" />
      </div>
    </div>

    <footer>
      <ProgrammeStartStop :start="programme.start" :stop="programme.stop" />
      <ProgrammeProgress :start="programme.start" :stop="programme.stop" />
    </footer>
  </article>
</template>

<style scoped>
.programme-content {
  display: flex;
  flex-direction: row;
  gap: var(--pico-spacing);
}
.programme-images {
  display: flex;
  flex-direction: column;
  gap: var(--pico-spacing);
  flex: 0 0 auto;
}
.programme-info {
  flex: 1 1 auto;
}
.programme-heading {
  width: 100%;
}
.programme-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--pico-spacing);
}
</style>

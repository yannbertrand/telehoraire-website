<script setup>
import ProgrammeCategories from '~/components/ProgrammeCategories.vue';
import ProgrammeCover from '~/components/ProgrammeCover.vue';
import ProgrammeEpisodeNumber from '~/components/ProgrammeEpisodeNumber.vue';
import ProgrammeProgress from '~/components/ProgrammeProgress.vue';
import ProgrammeStartStop from '~/components/ProgrammeStartStop.server.vue';

const { data, error } = await useAsyncData('channelData', () =>
  $fetch('https://yannbertrand.github.io/telehoraire-api/TF1.fr.prime.json')
);
</script>

<template>
  <h1>Téléhoraire</h1>

  <hr />

  <div class="channel-title-section">
    <hgroup class="channel-title">
      <h2>{{ data.channels[0].displayName }}</h2>
      <p>Ce soir</p>
    </hgroup>

    <NuxtImg
      v-if="data.channels[0].icon && data.channels[0].icon.length > 0"
      :src="data.channels[0].icon[0].src"
      alt=""
      width="90"
      height="90"
      preload
    />
  </div>

  <article v-for="(programme, index) of data.programmes" :key="programme.start">
    <div class="programme-content">
      <ProgrammeCover
        v-if="programme.icon"
        :icon="programme.icon"
        :preload="index < 3"
      />

      <div>
        <hgroup>
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

        <p class="programme-description">{{ programme.desc }}</p>
      </div>
    </div>

    <footer>
      <ProgrammeStartStop :start="programme.start" :stop="programme.stop" />
    </footer>
    <ProgrammeProgress :start="programme.start" :stop="programme.stop" />
  </article>
</template>

<style>
.channel-title-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: var(--pico-spacing);
  margin-bottom: var(--pico-spacing);
}
.channel-title {
  height: 100%;
  margin: 0;
}
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

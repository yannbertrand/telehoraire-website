<script setup lang="ts">
const props = defineProps<{
  episodeNum: {
    system: 'xmltv_ns' | 'onscreen';
    _value: string;
  }[];
}>();

function getEpisodeNumber(episodeNum) {
  if (episodeNum && episodeNum.length > 0) {
    const onscreenEpisodeNum = episodeNum.find(
      ({ system }) => system === 'onscreen'
    );

    if (onscreenEpisodeNum !== undefined) {
      return onscreenEpisodeNum._value;
    }
  }
}

const episodeNumber = getEpisodeNumber(props.episodeNum);
</script>

<template>
  <span class="programme-episode-number">{{ episodeNumber }}</span>
</template>

<style>
.programme-episode-number {
  font-size: calc(var(--pico-font-size) * 0.7);
  height: 100%;
}
</style>

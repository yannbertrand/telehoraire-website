<script setup lang="ts">
const props = defineProps<{
  episodeNum: {
    system: 'xmltv_ns' | 'onscreen';
    _value: string;
  }[];
}>();

function getEpisodeNumber(episodeNum) {
  if (episodeNum && episodeNum.length > 0) {
    const xmltvNsEpisodeNum = episodeNum.find(
      ({ system }) => system === 'xmltv_ns'
    );
    const onscreenEpisodeNum = episodeNum.find(
      ({ system }) => system === 'onscreen'
    );

    if (xmltvNsEpisodeNum !== undefined) {
      return formatEpisodeNumberNs(xmltvNsEpisodeNum._value);
    } else if (onscreenEpisodeNum !== undefined) {
      return onscreenEpisodeNum._value;
    }
  }
}

function formatEpisodeNumberNs(xmltvNsEpisodeNumber) {
  const parts = xmltvNsEpisodeNumber.split('.');
  if (parts.length !== 3) {
    return undefined;
  }

  const seasonNumber = `${
    Number.parseInt(parts[0].split('/')[0]) + 1
  }`.padStart(2, '0');
  const episodeNumber = `${
    Number.parseInt(parts[1].split('/')[0]) + 1
  }`.padStart(2, '0');

  let result = `S${seasonNumber}E${episodeNumber}`;
  if (parts[2].length > 0) {
    result += ` (${parts[2]})`;
  }

  return result;
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

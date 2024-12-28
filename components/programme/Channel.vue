<script setup lang="ts">
defineProps<{
	channelId: string;
}>();
</script>

<template>
  <LogoTf1 v-if="channelId === 'TF1'" :width="60" :height="22" />
  <LogoFrance2 v-else-if="channelId === 'France2'" :width="40" :height="35" />
  <LogoFrance3 v-else-if="channelId === 'France3'" :width="40" :height="35" />
  <LogoCanalPlus
    v-else-if="channelId === 'CanalPlus'"
    :width="60"
    :height="60"
  />
  <LogoFrance5 v-else-if="channelId === 'France5'" :width="40" :height="35" />
  <LogoM6 v-else-if="channelId === 'M6'" :width="50" :height="37" />
  <LogoArte v-else-if="channelId === 'Arte'" :width="18" :height="74" />
  <LogoC8 v-else-if="channelId === 'C8'" :width="60" :height="31" />
  <LogoW9 v-else-if="channelId === 'W9'" :width="60" :height="29" />
  <LogoTmc v-else-if="channelId === 'TMC'" :width="60" :height="22" />
  <LogoTfx v-else-if="channelId === 'NT1'" :width="60" :height="22" />
  <LogoNrj12 v-else-if="channelId === 'NRJ12'" :width="40" :height="41" />
  <LogoLcp
    v-else-if="channelId === 'LaChaineParlementaire'"
    :width="50"
    :height="27"
  />
  <LogoFrance4 v-else-if="channelId === 'France4'" :width="40" :height="35" />
  <LogoBfmTv v-else-if="channelId === 'BFMTV'" :width="45" :height="45" />
  <LogoCNews v-else-if="channelId === 'CNews'" :width="70" :height="18" />
  <LogoCStar v-else-if="channelId === 'CStar'" :width="70" :height="20" />
  <span v-else>{{ channelId }}</span>
</template>

<script setup lang="ts">
defineProps<{
	channel: string;
}>();
</script>

<template>
  <LogoTf1 v-if="channel === 'TF1.fr'" :width="60" :height="22" />
  <LogoFrance2 v-else-if="channel === 'France2.fr'" :width="40" :height="35" />
  <LogoFrance3 v-else-if="channel === 'France3.fr'" :width="40" :height="35" />
  <LogoCanalPlus
    v-else-if="channel === 'CanalPlus.fr'"
    :width="60"
    :height="60"
  />
  <LogoFrance5 v-else-if="channel === 'France5.fr'" :width="40" :height="35" />
  <LogoM6 v-else-if="channel === 'M6.fr'" :width="50" :height="37" />
  <LogoArte v-else-if="channel === 'Arte.fr'" :width="18" :height="74" />
  <LogoC8 v-else-if="channel === 'C8.fr'" :width="60" :height="31" />
  <LogoW9 v-else-if="channel === 'W9.fr'" :width="60" :height="29" />
  <LogoTmc v-else-if="channel === 'TMC.fr'" :width="60" :height="22" />
  <LogoTfx v-else-if="channel === 'NT1.fr'" :width="60" :height="22" />
  <LogoNrj12 v-else-if="channel === 'NRJ12.fr'" :width="40" :height="41" />
  <LogoLcp
    v-else-if="channel === 'LaChaineParlementaire.fr'"
    :width="50"
    :height="27"
  />
  <LogoFrance4 v-else-if="channel === 'France4.fr'" :width="40" :height="35" />
  <LogoBfmTv v-else-if="channel === 'BFMTV.fr'" :width="45" :height="45" />
  <LogoCNews v-else-if="channel === 'CNews.fr'" :width="70" :height="18" />
  <LogoCStar v-else-if="channel === 'CStar.fr'" :width="70" :height="20" />
  <span v-else>{{ channel }}</span>
</template>

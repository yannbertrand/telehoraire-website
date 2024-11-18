<script setup lang="ts">
import type { Icon } from "~/server/types.js";

const { data } = await useFetch("/api/now");

const programmeImages = computed(() => {
	if (!data.value) return [];

	return Object.values(data.value.programmesGroupedByChannel)
		.filter((programmes) => programmes !== undefined)
		.flatMap((programmes): Icon[][] => {
			const icons = programmes.map((programme): Icon[] => {
				if (!programme.icon || programme.icon.length === 0) {
					return [{ src: "" }];
				}

				return programme.icon;
			});

			return icons;
		})
		.filter((icon) => icon[0].src !== "");
});

function getLargeKey(icon: Icon[]): string {
	return `${icon[0].src}-large`;
}
</script>

<template>
  <!-- Nuxt Image: Pre download and optimize icons server side -->
  <ProgrammeLargeCover
    v-for="icon of programmeImages"
    :key="getLargeKey(icon)"
    :icon
    :preload="false"
    :lazy-load="false"
  />
  <ProgrammeCover
    v-for="icon of programmeImages"
    :key="icon[0].src"
    :icon
    :preload="false"
  />
</template>

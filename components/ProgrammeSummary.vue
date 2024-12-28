<script setup lang="ts">
import type { Programme } from "~/server/types.js";

// biome-ignore lint/suspicious/noExplicitAny: generic function
function deepToRaw<T extends Record<string, any>>(sourceObj: T): T {
	// biome-ignore lint/suspicious/noExplicitAny: generic function
	const objectIterator = (input: any): any => {
		if (Array.isArray(input)) {
			return input.map((item) => objectIterator(item));
		}
		if (isRef(input) || isReactive(input) || isProxy(input)) {
			return objectIterator(toRaw(input));
		}
		if (input && typeof input === "object") {
			return Object.keys(input).reduce((acc, key) => {
				acc[key as keyof typeof acc] = objectIterator(input[key]);
				return acc;
			}, {} as T);
		}
		return input;
	};

	return objectIterator(sourceObj);
}

const { programme } = defineProps<{
	programme: Programme;
	shouldPreload: boolean;
	shouldLazyLoad: boolean;
}>();

const historyUnsafeProgramme = deepToRaw(programme);
</script>

<template>
  <article class="programme">
    <div class="cover" v-if="programme.icon">
      <ProgrammeLargeCover
        :icon="programme.icon"
        :preload="shouldPreload"
        :lazy-load="shouldLazyLoad"
        class="illustration"
      />
      <div class="channel">
        <ProgrammeChannel :channel-id="programme.channel" />
      </div>
    </div>
    <ProgrammeChannel
      v-else
      :channel-id="programme.channel"
      class="cover-only-channel"
    />

    <div class="content">
      <hgroup>
        <h3 class="title">
          <RouterLink
            :to="{
              name: 'programme',
              state: {
                programme: historyUnsafeProgramme,
              },
            }"
            ><span v-html="programme.title"></span
          ></RouterLink>
          <ProgrammeEpisodeNumber
            v-if="programme.episodeNum"
            :episodeNum="programme.episodeNum"
          />
        </h3>

        <p
          v-if="programme.subTitle"
          class="subtitle"
          v-html="programme.subTitle"
        ></p>
      </hgroup>

      <ProgrammeCategories :categories="programme.category" />
    </div>

    <footer>
      {{ programme.startStop }}
      <ProgrammeProgress :start="programme.start" :stop="programme.stop" />
    </footer>
  </article>
</template>

<style scoped>
.programme {
  max-width: var(--programme-max-width);
  height: 100%;
  padding-top: 0;

  .cover {
    position: relative;

    .illustration {
      width: calc(100% + 2 * var(--pico-block-spacing-horizontal));
      margin-left: calc(-1 * var(--pico-block-spacing-horizontal));
      margin-right: calc(-1 * var(--pico-block-spacing-horizontal));
      border-top-left-radius: var(--pico-border-radius);
      border-top-right-radius: var(--pico-border-radius);
    }

    .channel {
      position: absolute;
      top: 10px;
      left: 10px;
      padding: calc(0.7 * var(--pico-spacing)) var(--pico-spacing);
      margin: auto;
      background: rgba(255, 255, 255, 0.8);
      border-radius: var(--pico-border-radius);

      @media (prefers-color-scheme: dark) {
        background: rgba(19, 23, 31, 0.8);
      }
    }
  }

  .cover-only-channel {
    padding-top: var(--pico-block-spacing-vertical);
    margin-bottom: calc(-0.75 * var(--pico-block-spacing-vertical));
  }

  .content {
    margin-top: var(--pico-block-spacing-vertical);

    .title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--pico-spacing);
    }

    .description {
      margin-top: var(--pico-typography-spacing-vertical);
      margin-bottom: 0;
      font-size: calc(0.8 * var(--pico-font-size));
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
</style>

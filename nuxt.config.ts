import { formatChannelId } from "./server/helpers/format-channel-id.js";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		baseURL: "/telehoraire-website/",
		head: {
			title: "Téléhoraire",
		},
	},
	css: ["@picocss/pico/css/pico.css", "@picocss/pico/css/pico.colors.css"],
	modules: ["@nuxt/image"],

	image: {
		domains: ["img.bouygtel.fr", "static-cdn.tv.sfr.net"],
	},

	hooks: {
		// fetch async routes to prerender
		"prerender:routes": async (ctx) => {
			const data = await (
				await fetch(new URL("tnt.prime.fr.json", process.env.SOURCE_API_URL))
			).json();
			if (data?.channels?.length > 0) {
				for (const channel of data.channels) {
					ctx.routes.add(`/chaine/${formatChannelId(channel.id)}`);
				}
			}
		},
	},

	experimental: {
		componentIslands: true,
	},

	devtools: { enabled: true },
	compatibilityDate: "2024-04-03",
});

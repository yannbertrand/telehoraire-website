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

	experimental: {
		componentIslands: true,
	},

	devtools: { enabled: true },
	compatibilityDate: "2024-04-03",
});

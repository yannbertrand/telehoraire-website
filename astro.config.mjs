// @ts-check
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://yannbertrand.github.io",
	base: "telehoraire-website",
	env: {
		schema: {
			SOURCE_API_URL: envField.string({ context: "server", access: "secret" }),
			TZ: envField.string({ context: "client", access: "public" }),
		},
	},
	image: {
		domains: ["img.bouygtel.fr", "static-cdn.tv.sfr.net"],
	},
});

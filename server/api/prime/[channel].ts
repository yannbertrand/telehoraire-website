import { formatProgramme } from "~/server/helpers/format-programme.js";
import { groupProgrammesByChannel } from "~/server/helpers/group-programmes-by-channel.js";
import { fetchApi } from "../../helpers/fetch-api.js";

export default defineEventHandler(async (event) => {
	const channel = getRouterParam(event, "channel");

	const { data, lastUpdate } = await fetchApi("tnt.prime.fr.json");
	if (!channel) {
		throw new Error("Chaine manquante");
	}
	const formattedProgrammes = data.programmes.map(formatProgramme);

	const programmesGroupedByChannel =
		groupProgrammesByChannel(formattedProgrammes);
	if (!programmesGroupedByChannel[channel]) {
		throw new Error(`Chaine "${channel}" introuvable`);
	}
	return {
		programmes: programmesGroupedByChannel[channel],
		lastUpdate,
	};
});

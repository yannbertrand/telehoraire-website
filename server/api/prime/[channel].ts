import { formatProgramme } from "~/server/helpers/format-programme.js";
import { groupProgrammesByChannel } from "~/server/helpers/group-programmes-by-channel.js";
import { fetchApi } from "../../helpers/fetch-api.js";

export default defineEventHandler(async (event) => {
	const wantedChannel = getRouterParam(event, "channel");

	const { data, lastUpdate } = await fetchApi("tnt.prime.fr.json");
	const availableChannels = data.channels.map((channel) => channel.id);
	if (!wantedChannel || !availableChannels.includes(wantedChannel)) {
		throw new Error("Chaine manquante");
	}
	const formattedProgrammes = data.programmes.map(formatProgramme);

	const programmesGroupedByChannel =
		groupProgrammesByChannel(formattedProgrammes);
	if (!programmesGroupedByChannel[wantedChannel]) {
		console.warn(`Chaine "${wantedChannel}" sans programmes`);
		programmesGroupedByChannel[wantedChannel] = [];
	}
	return {
		programmes: programmesGroupedByChannel[wantedChannel],
		lastUpdate,
	};
});

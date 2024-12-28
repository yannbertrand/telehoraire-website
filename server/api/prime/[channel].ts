import { formatChannel } from "~/server/helpers/format-channel.js";
import { formatProgramme } from "~/server/helpers/format-programme.js";
import { groupProgrammesByChannel } from "~/server/helpers/group-programmes-by-channel.js";
import { fetchApi } from "../../helpers/fetch-api.js";

export default defineEventHandler(async (event) => {
	const wantedChannel = getRouterParam(event, "channel");

	const { data, lastUpdate } = await fetchApi("tnt.prime.fr.json");
	const availableChannels = data.channels.map(formatChannel);
	if (
		!wantedChannel ||
		!availableChannels.map((channel) => channel.id).includes(wantedChannel)
	) {
		throw createError({
			statusCode: 404,
			message: `Chaine "${wantedChannel}" non trouvée`,
		});
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
		channel: availableChannels.find((channel) => channel.id === wantedChannel),
		lastUpdate,
	};
});

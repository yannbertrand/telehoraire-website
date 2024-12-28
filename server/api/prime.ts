import { fetchApi } from "../helpers/fetch-api.js";
import { formatChannel } from "../helpers/format-channel.js";
import { formatProgramme } from "../helpers/format-programme.js";
import { groupProgrammesByChannel } from "../helpers/group-programmes-by-channel.js";

export default defineEventHandler(async () => {
	const { data, lastUpdate } = await fetchApi("tnt.prime.fr.json");

	const formattedChannels = data.channels.map(formatChannel);
	const formattedProgrammes = data.programmes.map(formatProgramme);

	const programmesGroupedByChannel =
		groupProgrammesByChannel(formattedProgrammes);

	return {
		programmesGroupedByChannel,
		channels: formattedChannels,
		lastUpdate,
	};
});

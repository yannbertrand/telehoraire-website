import { fetchApi } from "../helpers/fetch-api.js";
import { formatProgramme } from "../helpers/format-programme.js";
import { groupProgrammesByChannel } from "../helpers/group-programmes-by-channel.js";

export default defineEventHandler(async () => {
	const { data, lastUpdate } = await fetchApi("tnt.prime.fr.json");

	const formattedProgrammes = data.programmes.map(formatProgramme);

	const programmesGroupedByChannel = groupProgrammesByChannel(
		formattedProgrammes,
		data.channels,
	);

	return { programmesGroupedByChannel, lastUpdate };
});

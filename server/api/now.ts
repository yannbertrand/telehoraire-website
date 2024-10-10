import { fetchApi } from "../helpers/fetch-api.js";
import { formatProgramme } from "../helpers/format-programme.js";
import { groupProgrammesByChannel } from "../helpers/group-programmes-by-channel.js";

export default defineEventHandler(async () => {
	const { data, lastUpdate } = await fetchApi("tnt.fr.json");

	const now = new Date();
	const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
	const nextProgrammes = data.programmes.filter((programme) => {
		const start = new Date(programme.start);
		const stop = new Date(programme.stop);

		return now <= stop && start <= tomorrow;
	});

	const formattedProgrammes = nextProgrammes.map(formatProgramme);

	const programmesGroupedByChannel = groupProgrammesByChannel(
		formattedProgrammes,
		data.channels,
	);

	return { programmesGroupedByChannel, lastUpdate };
});

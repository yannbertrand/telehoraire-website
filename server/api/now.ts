import { fetchApi } from "../helpers/fetch-api.js";
import { formatProgramme } from "../helpers/format-programme.js";

export default defineEventHandler(async () => {
	const { data, lastUpdate } = await fetchApi("tnt.fr.json");

	const nextProgrammes = data.programmes.filter((programme) => {
		const today = new Date();
		const programmeStopDate = new Date(programme.stop);
		return programmeStopDate >= today;
	});

	const formattedProgrammes = nextProgrammes.map(formatProgramme);

	return { programmes: formattedProgrammes, lastUpdate };
});

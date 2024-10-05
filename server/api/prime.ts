import type { EndpointData, Programme, Channel } from "../types.js";

export default defineEventHandler(async () => {
	let lastUpdate = "";
	const data = await $fetch<EndpointData>(
		"https://yannbertrand.github.io/telehoraire-api/tnt.prime.fr.json",
		{
			onResponse: ({ response }) => {
				const lastModifiedHeader = response.headers.get("last-modified");
				if (lastModifiedHeader != null) {
					lastUpdate = new Date(lastModifiedHeader).toLocaleString("fr-Fr", {
						dateStyle: "full",
						timeStyle: "short",
					});
				}
			},
		},
	);

	const mappedProgrammes = data.programmes.map((programme) => {
		const $start = new Date(programme.start);
		const $stop = new Date(programme.stop);
		const dateTimeFormat = new Intl.DateTimeFormat("fr-FR", {
			timeStyle: "short",
		});

		return {
			...programme,
			startStop: dateTimeFormat.formatRange($start, $stop),
		};
	});

	const programmesGroupedByChannel = Object.groupBy(
		mappedProgrammes,
		(programme) => getChannelDisplayName(programme, data.channels),
	);

	return { programmesGroupedByChannel, lastUpdate };
});

function getChannelDisplayName(
	programme: Programme,
	channels: Channel[],
): string {
	const foundChannel = channels.find(
		(channel) => channel.id === programme.channel,
	);

	if (foundChannel === undefined) {
		throw new Error(`Channel with id "${programme.channel}" not found`);
	}

	return foundChannel.displayName;
}

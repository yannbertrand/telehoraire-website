import type { Programme } from "../types.ts";
import { formatChannelId } from "./format-channel-id.ts";
import { getProgrammeId } from "./get-programme-id.ts";

export function formatProgramme(programme: Programme) {
	const $start = new Date(programme.start);
	const $stop = new Date(programme.stop);
	const dateTimeFormat = new Intl.DateTimeFormat("fr-FR", {
		timeStyle: "short",
	});

	return {
		id: getProgrammeId(programme),
		channel: formatChannelId(programme.channel),
		title: programme.title,
		start: programme.start,
		stop: programme.stop,
		startStop: dateTimeFormat.formatRange($start, $stop),
		desc: programme.desc,
		category: programme.category,
		subTitle: programme.subTitle,
		icon: programme.icon,
		episodeNum: programme.episodeNum,
	};
}

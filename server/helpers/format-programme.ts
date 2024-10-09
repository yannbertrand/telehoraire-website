import type { Programme } from "../types.js";

export function formatProgramme(programme: Programme) {
	const $start = new Date(programme.start);
	const $stop = new Date(programme.stop);
	const dateTimeFormat = new Intl.DateTimeFormat("fr-FR", {
		timeStyle: "short",
	});

	return {
		...programme,
		startStop: dateTimeFormat.formatRange($start, $stop),
	};
}

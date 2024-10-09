import type { Channel, Programme } from "../types.js";
import { getChannelDisplayName } from "./get-channel-display-name.js";

export function groupProgrammesByChannel(
	programmes: Programme[],
	channels: Channel[],
) {
	return Object.groupBy(programmes, (programme) =>
		getChannelDisplayName(programme, channels),
	);
}

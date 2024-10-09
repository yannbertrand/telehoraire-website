import type { Channel, Programme } from "../types.js";

export function getChannelDisplayName(
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

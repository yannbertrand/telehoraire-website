import type { Channel } from "../types.ts";
import { formatChannelId } from "./format-channel-id.js";

export function formatChannel(channel: Channel) {
	return {
		id: formatChannelId(channel.id),
		displayName: channel.displayName,
		icon: channel.icon,
	};
}

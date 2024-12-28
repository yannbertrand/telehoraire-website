import type { Programme } from "../types.js";

export function groupProgrammesByChannel(programmes: Programme[]) {
	return Object.groupBy(programmes, (programme) => programme.channel);
}

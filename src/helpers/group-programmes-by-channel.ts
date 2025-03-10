import type { Programme } from "../types.ts";

export function groupProgrammesByChannel(programmes: Programme[]) {
	return Object.groupBy(programmes, (programme) => programme.channel);
}

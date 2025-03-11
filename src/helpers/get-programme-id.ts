import hashSum from "hash-sum";
import type { Programme } from "../types.ts";

export function getProgrammeId(programme: Programme) {
	return hashSum(programme);
}

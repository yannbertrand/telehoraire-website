import { createHash } from "node:crypto";
import type { Programme } from "../types.ts";

export function getProgrammeId(programme: Programme) {
	const hash = createHash("md5");

	hash.update(JSON.stringify(programme));
	return hash.copy().digest("hex");
}

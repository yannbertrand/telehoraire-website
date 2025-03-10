import { SOURCE_API_URL } from "astro:env/server";
import type { EndpointData } from "../types.ts";

export async function fetchApi(
	endpoint: string,
): Promise<{ data: EndpointData; lastUpdate: string }> {
	const url = new URL(endpoint, SOURCE_API_URL);
	const response = await fetch(url.toString());
	const lastUpdate = getLastModifiedDateTime(response.headers);
	const data = await response.json();

	return { data, lastUpdate };
}

function getLastModifiedDateTime(headers: Headers): string {
	const lastModifiedHeader = headers.get("last-modified");
	if (lastModifiedHeader != null) {
		return new Date(lastModifiedHeader).toLocaleString("fr-Fr", {
			dateStyle: "full",
			timeStyle: "short",
		});
	}
	return "";
}

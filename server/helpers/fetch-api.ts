import type { EndpointData } from "../types.js";

export async function fetchApi(
	endpoint: string,
): Promise<{ data: EndpointData; lastUpdate: string }> {
	const url = new URL(endpoint, process.env.SOURCE_API_URL);
	let lastUpdate = "";
	const data = await $fetch<EndpointData>(url.toString(), {
		onResponse: ({ response }) => {
			lastUpdate = getLastModifiedDateTime(response.headers);
		},
	});

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

import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import ProgrammeCategories from "./ProgrammeCategories.astro";

test("Card with slots", async () => {
	const container = await AstroContainer.create();
	const result = await container.renderToString(ProgrammeCategories, {
		props: { categories: ["Hello World"] },
	});

	expect(result).toContain("Hello World");
	expect(result).toContain("hello-world");
});

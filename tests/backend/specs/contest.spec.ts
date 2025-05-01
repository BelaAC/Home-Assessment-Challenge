import { test, expect } from "@playwright/test";
import { getContestType, getRandomContestType } from "../src/utils/pokeapi";
import { expectedContestTypeStructure } from "../src/utils/testData";

test.describe("Contest Type API Tests", () => {
  test("Should return valid contest type data for a random contest type @api @contest", async ({
    request,
  }) => {
    const contestType = getRandomContestType();
    const response = await getContestType(request, contestType);
    expect(response.status()).toBe(200);

    const data = await response.json();

    // Check basic properties
    for (const prop of expectedContestTypeStructure.basic) {
      expect(data).toHaveProperty(prop);
    }

    // Check berry flavor structure
    expect(data.berry_flavor).toHaveProperty("name");
    expect(data.berry_flavor).toHaveProperty("url");
    expect(typeof data.berry_flavor.name).toBe(
      expectedContestTypeStructure.berry_flavor.name
    );
    expect(typeof data.berry_flavor.url).toBe(
      expectedContestTypeStructure.berry_flavor.url
    );
    expect(data.berry_flavor.url).toMatch(
      /^https:\/\/pokeapi\.co\/api\/v2\/berry-flavor\/\d+\/$/
    );

    // Check names array structure
    expect(Array.isArray(data.names)).toBe(true);
    if (data.names.length > 0) {
      const expectedNameStructure = expectedContestTypeStructure.names[0];
      for (const nameEntry of data.names) {
        // Check basic properties
        expect(nameEntry).toHaveProperty("name");
        expect(nameEntry).toHaveProperty("color");
        expect(nameEntry).toHaveProperty("language");
        expect(typeof nameEntry.name).toBe(expectedNameStructure.name);
        expect(typeof nameEntry.color).toBe(expectedNameStructure.color);

        // Check language object structure
        expect(nameEntry.language).toHaveProperty("name");
        expect(nameEntry.language).toHaveProperty("url");
        expect(typeof nameEntry.language.name).toBe(
          expectedNameStructure.language.name
        );
        expect(typeof nameEntry.language.url).toBe(
          expectedNameStructure.language.url
        );
      }
    }

    console.log(
      "Successfully validated the structure of the contest type data"
    );
  });
});

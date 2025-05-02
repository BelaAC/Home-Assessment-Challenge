import { test, expect } from "@playwright/test";
import { getLocation, getRandomLocation } from "../src/utils/pokeapi";
import { expectedLocationStructure } from "../src/utils/testData";

test.describe("/location Endpoint Scenarios", () => {
  test("[TC-007] Should return a valid location for a given ID or name @api @location", async ({
    request,
  }) => {
    const locationName = getRandomLocation();
    const response = await getLocation(request, locationName);
    expect(response.status()).toBe(200);

    const data = await response.json();

    // Validate basic properties
    for (const prop of expectedLocationStructure.basic) {
      expect(data).toHaveProperty(prop);
    }

    // Validate region
    expect(data).toHaveProperty(
      "region",
      expect.objectContaining({
        name: expect.any(String),
        url: expect.any(String),
      })
    );

    // Validate game indices
    expect(data).toHaveProperty("game_indices");
    // It's acceptable for game_indices to be empty
    expect(Array.isArray(data.game_indices)).toBe(true);

    // Validate areas
    expect(data).toHaveProperty("areas");
    expect(Array.isArray(data.areas)).toBe(true);

    console.log("Successfully validated the structure of the location data");
  });
});

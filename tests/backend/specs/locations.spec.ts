import { test, expect } from "@playwright/test";
import { getLocation, getRandomLocation } from "../src/utils/pokeapi";
import { expectedLocationStructure } from "../src/utils/testData";

test.describe("/location Endpoint Scenarios", () => {
  test("Should return a valid location for a given ID or name @api @location", async ({
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
    expect(data.game_indices.length).toBeGreaterThan(0);

    // Validate areas
    expect(data).toHaveProperty("areas");
    expect(data.areas.length).toBeGreaterThan(0);

    console.log("Successfully validated the structure of the location data");
  });
});

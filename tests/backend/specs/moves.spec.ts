import { test, expect } from "@playwright/test";
import { expectedMoveStructure } from "../src/utils/testData";
import { getRandomMove, getMove } from "../src/utils/pokeapi";

test.describe("/moves Endpoint Scenarios", () => {
  test("[TC-008] Should return valid structure for a known move @api @moves", async ({
    request,
  }) => {
    const moveName = getRandomMove();
    const response = await getMove(request, moveName);
    expect(response.status()).toBe(200);

    const data = await response.json();

    // Validate basic properties
    for (const prop of expectedMoveStructure.basic) {
      expect(data).toHaveProperty(prop);
    }

    // Validate nested properties
    for (const [key, nestedProps] of Object.entries(
      expectedMoveStructure.nested
    )) {
      expect(data).toHaveProperty(key);
      for (const nestedProp of nestedProps) {
        expect(data[key]).toHaveProperty(nestedProp);
      }
    }

    // Optional properties can be present or null; if present, validate their structure
    for (const optionalProp of expectedMoveStructure.optional) {
      if (data[optionalProp] !== undefined && data[optionalProp] !== null) {
        expect(data).toHaveProperty(optionalProp);
      }
    }
    console.log("Successfully validated the structure of the move data");
  });
});

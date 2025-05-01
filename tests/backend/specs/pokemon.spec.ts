import { test, expect } from "@playwright/test";
import { expectedStructure } from "../src/utils/testData";
import { getPokemon, getRandomPokemon } from "../src/utils/pokeapi";

test.describe("/pokemon Endpoint Scenarios", () => {
  test("Should return valid structure for a known Pokémon @api @pokemon", async ({
    request,
  }) => {
    // Get a random Pokémon name from the list of known Pokémon
    const pokemonName = getRandomPokemon();
    const response = await getPokemon(request, pokemonName);

    expect(response.status()).toBe(200);

    const data = await response.json();

    // Check basic properties
    for (const prop of expectedStructure.basic) {
      expect(data).toHaveProperty(prop);
    }

    // Check types structure
    expect(Array.isArray(data.types)).toBe(true);
    if (data.types.length > 0) {
      for (const typeEntry of data.types) {
        for (const prop of expectedStructure.types.properties) {
          expect(typeEntry).toHaveProperty(prop);
        }
        for (const nestedProp of expectedStructure.types.nested.type) {
          expect(typeEntry.type).toHaveProperty(nestedProp);
          expect(typeof typeEntry.type[nestedProp]).toBe("string");
        }
      }
    }

    // Check abilities structure
    expect(Array.isArray(data.abilities)).toBe(true);
    if (data.abilities.length > 0) {
      for (const abilityEntry of data.abilities) {
        for (const prop of expectedStructure.abilities.properties) {
          expect(abilityEntry).toHaveProperty(prop);
        }
        for (const nestedProp of expectedStructure.abilities.nested.ability) {
          expect(abilityEntry.ability).toHaveProperty(nestedProp);
          expect(typeof abilityEntry.ability[nestedProp]).toBe("string");
        }
      }
    }

    // Check moves structure
    expect(Array.isArray(data.moves)).toBe(true);
    if (data.moves.length > 0) {
      for (const moveEntry of data.moves) {
        for (const prop of expectedStructure.moves.properties) {
          expect(moveEntry).toHaveProperty(prop);
        }
        for (const nestedProp of expectedStructure.moves.nested.move) {
          expect(moveEntry.move).toHaveProperty(nestedProp);
          expect(typeof moveEntry.move[nestedProp]).toBe("string");
        }
      }
    }

    // Check sprite URLs
    for (const spriteProp of expectedStructure.sprites.properties) {
      if (data.sprites[spriteProp]) {
        expect(data.sprites[spriteProp]).toMatch(
          expectedStructure.sprites.urlPattern
        );
      }
    }
    console.log("Successfully validated the structure of the Pokémon data");
  });

  test("Should return a 404 error for a non-existent Pokémon @api @pokemon", async ({
    request,
  }) => {
    const nonExistentPokemon = "non-existent-pokemon";
    const response = await getPokemon(request, nonExistentPokemon);
    expect(response.status()).toBe(404);
    console.log(
      "Successfully validated the 404 error for a non-existent Pokémon"
    );
  });
});

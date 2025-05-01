import { APIRequestContext } from "@playwright/test";
import { config } from "./config";
import {
  knownContestTypes,
  knownLocations,
  knownMoves,
  knownPokemon,
} from "./testData";

const BASE_URL = config.baseURLPokeAPI;

/**
 * Utility to select a random element from an array
 * @param list - The array to pick from
 * @returns A random element from the array
 */
function getRandomItem<T>(list: T[]): T {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

/**
 * Get a random Pokémon name from the list of known Pokémon
 * @returns A random Pokémon name
 */
export function getRandomPokemon(): string {
  return getRandomItem(knownPokemon);
}

/**
 * Get a random move name from the list of known moves
 * @returns A random move name
 */
export function getRandomMove(): string {
  return getRandomItem(knownMoves);
}

/**
 * Get a random contest type from the list of known contest types
 * @returns A random contest type
 */
export function getRandomContestType(): string {
  return getRandomItem(knownContestTypes);
}

/**
 * Get a random item from the list of known items
 * @returns A random item
 */
export function getRandomLocation(): string {
  return getRandomItem(knownLocations);
}

/**
 * Get a Pokémon by name
 * @param request - The API request context
 * @param pokemonName - The name of the Pokémon
 * @returns The response object
 */
export async function getPokemon(
  request: APIRequestContext,
  pokemonName: string
) {
  const response = await request.get(`${BASE_URL}/pokemon/${pokemonName}`);
  return response;
}

/**
 * Get a move by name
 * @param request - The API request context
 * @param moveName - The name of the move
 * @returns The response object
 */
export async function getMove(request: APIRequestContext, moveName: string) {
  const response = await request.get(`${BASE_URL}/move/${moveName}`);
  return response;
}

/**
 * Get a contest type by name
 * @param request - The API request context
 * @param contestTypeName - The name of the contest type
 * @returns The response object
 */
export async function getContestType(
  request: APIRequestContext,
  contestTypeName: string
) {
  const response = await request.get(
    `${BASE_URL}/contest-type/${contestTypeName}`
  );
  return response;
}

/**
 * Get a location by name
 * @param request - The API request context
 * @param locationName - The name of the location
 * @returns The response object
 */
export async function getLocation(
  request: APIRequestContext,
  locationName: string
) {
  const response = await request.get(`${BASE_URL}/location/${locationName}`);
  return response;
}

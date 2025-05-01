/**
 * List of valid search words for the bakery store
 */
export const searchWords = ["banana", "chocolate", "cinnamon"] as const;

/**
 * Type for valid search words
 */
export type SearchWord = (typeof searchWords)[number];

/**
 * Gets a random search word from the list
 * @returns A random search word
 */
export function getRandomSearchWord(): SearchWord {
  const randomIndex = Math.floor(Math.random() * searchWords.length);
  return searchWords[randomIndex];
}

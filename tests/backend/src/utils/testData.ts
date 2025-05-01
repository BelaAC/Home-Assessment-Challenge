/**
 * List of known Pokémon names
 * @type {Array}
 */
export const knownPokemon = [
  "pikachu",
  "bulbasaur",
  "charizard",
  "mewtwo",
  "snorlax",
];

/**
 * List of known moves
 * @type {Array}
 */
export const knownMoves = [
  "pound",
  "tackle",
  "thunder-punch",
  "earthquake",
  "ice-beam",
];

/**
 * List of known locations
 * @type {Array}
 */
export const knownLocations = ["canalave-city", "black-city"];

/**
 * List of known contest types
 * @type {Array}
 */
export const knownContestTypes = ["cool", "beauty", "cute", "smart", "tough"];

/**
 * Expected response structure for move data
 * @type {Object}
 * @property {Array} basic - Basic properties expected in the response
 * @property {Object} nested - Nested properties expected in the response
 * @property {Array} optional - Optional properties expected in the response
 */
export const expectedMoveStructure = {
  basic: [
    "id",
    "name",
    "accuracy",
    "effect_chance",
    "pp",
    "priority",
    "power",
    "type",
    "damage_class",
    "generation",
  ],
  nested: {
    type: ["name", "url"],
    damage_class: ["name", "url"],
    generation: ["name", "url"],
  },
  optional: [
    "contest_combos",
    "contest_type",
    "contest_effect",
    "effect_entries",
    "effect_changes",
    "flavor_text_entries",
    "learned_by_pokemon",
    "meta",
    "names",
    "past_values",
    "stat_changes",
    "super_contest_effect",
    "target",
    "machines",
  ],
};

/**
 * Expected response structure for contest type data
 * @type {Object}
 * @property {Array} basic - Basic properties expected in the response
 * @property {Object} berry_flavor - Expected structure for berry flavor
 * @property {Array} names - Expected structure for names
 */
export const expectedContestTypeStructure = {
  basic: ["id", "name", "berry_flavor", "names"],
  berry_flavor: {
    name: "string",
    url: "string",
  },
  names: [
    {
      name: "string",
      color: "string",
      language: {
        name: "string",
        url: "string",
      },
    },
  ],
};

/**
 * Expected response structure for item data
 * @type {Object}
 * @property {Array} basic - Basic properties expected in the response
 * @property {Object} nested - Nested properties expected in the response
 * @property {Array} optional - Optional properties expected in the response
 */
export const expectedItemStructure = {
  basic: [
    "id",
    "name",
    "cost",
    "fling_power",
    "fling_effect",
    "attributes",
    "category",
    "effect_entries",
    "flavor_text_entries",
    "game_indices",
    "names",
    "sprites",
    "held_by_pokemon",
    "baby_trigger_for",
    "machines",
  ],
  nested: {
    fling_effect: ["name", "url"],
    category: ["name", "url"],
    effect_entries: ["effect", "short_effect", "language"],
    flavor_text_entries: ["flavor_text", "language"],
    game_indices: ["game_index", "generation"],
    names: ["name", "language"],
    sprites: ["default"],
    held_by_pokemon: ["pokemon", "url"],
    baby_trigger_for: ["url"],
    machines: ["machine", "version_group"],
  },
  optional: [
    "effect_entries",
    "flavor_text_entries",
    "game_indices",
    "names",
    "sprites",
    "held_by_pokemon",
    "baby_trigger_for",
    "machines",
  ],
};

/**
 * Expected response structure for location data
 * @type {Object}
 * @property {Array} basic - Basic properties expected in the response
 * @property {Object} region - Expected structure for region
 * @property {Array} game_indices - Expected structure for game indices
 * @property {Array} areas - Expected structure for areas
 */
export const expectedLocationStructure = {
  basic: ["id", "name", "region", "game_indices", "areas"],
  region: {
    name: "string",
    url: "string",
  },
  game_indices: ["game_index", "generation"],
  areas: ["name", "url"],
};

/**
 * Expected response structure for Pokémon data
 * @type {Object}
 * @property {Array} basic - Basic properties expected in the response
 * @property {Object} types - Expected structure for types
 * @property {Object} abilities - Expected structure for abilities
 * @property {Object} moves - Expected structure for moves
 * @property {Object} sprites - Expected structure for sprites
 */
export const expectedStructure = {
  basic: [
    "id",
    "name",
    "height",
    "weight",
    "types",
    "abilities",
    "moves",
    "sprites",
  ],
  types: {
    properties: ["type"],
    nested: { type: ["name"] },
  },
  abilities: {
    properties: ["ability"],
    nested: { ability: ["name"] },
  },
  moves: {
    properties: ["move"],
    nested: { move: ["name"] },
  },
  sprites: {
    properties: ["front_default", "back_default"],
    urlPattern: /^https:\/\/.*\.png$/,
  },
};

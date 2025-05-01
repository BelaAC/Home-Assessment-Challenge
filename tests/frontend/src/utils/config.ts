import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  baseUrl: "https://monkey-bakery.myshopify.com/",
  password: process.env.SHOPIFY_PASSWORD || "",
  apiBaseUrl: "https://pokeapi.co/api/v2/",
  authStoragePath: "auth.json",
};

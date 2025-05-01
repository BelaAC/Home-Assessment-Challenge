import { BrowserContext, chromium, Locator } from "@playwright/test";
import { config } from "./config";

/**
 * Creates a new context with authentication
 * @returns {Promise<BrowserContext>}
 */
export async function createBrowserContext(): Promise<BrowserContext> {
  const browser = await chromium.launch();
  const browserContext = await browser.newContext({
    storageState: config.authStoragePath,
  });
  return browserContext;
}

/**
 * Fills an input field with the given value
 * @param locator - The locator for the input field
 * @param value - The value to fill in the input field
 * @throws Error if the input field is not found or not visible
 */
export async function fillInput(locator: Locator, value: string) {
  try {
    await locator.fill(value);
  } catch (error) {
    throw new Error(`Failed to fill input field: ${error}`);
  }
}

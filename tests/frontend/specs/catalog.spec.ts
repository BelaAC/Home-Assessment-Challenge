import { test, expect, Page, BrowserContext } from "@playwright/test";
import { HomePage } from "../src/pages/HomePage";
import { HeaderOption } from "../src/types/headerOption";
import { createBrowserContext } from "../src/utils/utils";
import { CatalogPage } from "../src/pages/CatalogPage";

test.describe("Catalog Scenarios", () => {
  let context: BrowserContext;
  let page: Page;

  test.beforeAll(async () => {
    context = await createBrowserContext();
    page = await context.newPage();
  });

  test("Should successfully validate catalog page @ui @catalog", async () => {
    const homePage = new HomePage(page);
    const catalogPage = new CatalogPage(page);
    await homePage.open();
    await homePage.navigateHeaderMenuOption(HeaderOption.Catalog);
    await catalogPage.validateCatalogPage();
  });

  test.afterAll(async () => {
    await context.close();
  });
});

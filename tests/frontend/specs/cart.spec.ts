import { BrowserContext, Page, test } from "@playwright/test";
import { HomePage } from "../src/pages/HomePage";
import { SearchPage } from "../src/pages/SearchPage";
import { searchFilters } from "../src/types/filterDetails";
import { createBrowserContext } from "../src/utils/utils";
import { availabilityOptions } from "../src/types/filterDetails";
import { getRandomSearchWord } from "../src/utils/searchWords";
import { ProductPage } from "../src/pages/ProductPage";
import { CartPage } from "../src/pages/CartPage";

test.describe("Cart Scenarios", () => {
  let context: BrowserContext;
  let page: Page;

  test.beforeAll(async () => {
    context = await createBrowserContext();
    page = await context.newPage();
  });

  test("[TC-003] Should successfully add product to cart via search @ui @cart", async () => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);
    const productPage = new ProductPage(page);
    await homePage.open();
    await homePage.searchProduct(getRandomSearchWord());
    await searchPage.filterBy(
      searchFilters.availability,
      availabilityOptions.inStock
    );
    const selectedProduct = await searchPage.selectProduct();
    await productPage.addProductToCart(selectedProduct);
  });

  test("[TC-004] Should successfully edit cart @ui @cart", async () => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    await homePage.open();
    const selectedProduct = await homePage.selectInStockProduct();
    await productPage.addProductToCart(selectedProduct);
    await cartPage.editCart(selectedProduct);
  });

  test.afterAll(async () => {
    await context.close();
  });
});

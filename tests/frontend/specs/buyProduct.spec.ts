import { BrowserContext, Page, test } from "@playwright/test";
import { HomePage } from "../src/pages/HomePage";
import { createBrowserContext } from "../src/utils/utils";
import { CheckoutPage } from "../src/pages/CheckoutPage";
import { OrderConfirmationPage } from "../src/pages/OrderConfirmationPage";

test.describe("Buy Product Scenarios", () => {
  let context: BrowserContext;
  let page: Page;

  test.beforeAll(async () => {
    context = await createBrowserContext();
    page = await context.newPage();
  });

  test("Should successfully buy featured product @ui @product", async () => {
    const homePage = new HomePage(page);
    const checkoutPage = new CheckoutPage(page);
    await homePage.open();
    const productDetails = await homePage.buyFeaturedProduct();
    const { userDetails, orderDetails } = await checkoutPage.successfulCheckout(
      productDetails
    );
    const orderConfirmationPage = new OrderConfirmationPage(page);
    await orderConfirmationPage.validateOrderConfirmationPage(
      userDetails,
      orderDetails,
      productDetails
    );
  });

  test("Should unsuccessfully buy product @ui @product", async () => {
    const homePage = new HomePage(page);
    const checkoutPage = new CheckoutPage(page);
    await homePage.open();
    await homePage.buyFeaturedProduct();
    await checkoutPage.unSuccessfulCheckout();
  });

  test.afterAll(async () => {
    await context.close();
  });
});

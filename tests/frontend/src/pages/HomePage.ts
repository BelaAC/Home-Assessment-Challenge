import { Page, Locator, expect } from "@playwright/test";
import { config } from "../utils/config";
import { productDetails } from "../types/productDetails";
import { HeaderOption } from "../types/headerOption";
import { pageTitles } from "../utils/constants";

export class HomePage {
  private readonly page: Page;

  // Featured product section
  private readonly featuredProductSection: Locator;
  private readonly titleLocator: Locator;
  private readonly descriptionLocator: Locator;
  private readonly priceRegularLocator: Locator;
  private readonly priceSaleLocator: Locator;
  private readonly quantityLocator: Locator;
  private readonly addToCartButtonLocator: Locator;
  private readonly buyButtonLocator: Locator;

  // Search section
  private readonly searchButtonLocator: Locator;
  private readonly searchInputLocator: Locator;

  // Cart notification
  private readonly cartNotificationLocator: Locator;
  private readonly cartNotificationTitleLocator: Locator;
  private readonly cartNotificationQuantityLocator: Locator;
  private readonly cartNotificationViewCartButtonLocator: Locator;

  // Cart section
  private readonly cartHeaderLocator: Locator;

  // Header menu
  private readonly headerMenuCategoryLocator: Locator;
  private readonly headerMenuHomeLocator: Locator;

  /**
   * Constructor for the HomePage class
   * @param page - The Playwright Page object
   */
  constructor(page: Page) {
    this.page = page;

    // Initialize Featured product section
    this.featuredProductSection = page.locator(".featured-product");
    this.titleLocator = this.featuredProductSection.locator(".product__title");
    this.descriptionLocator = this.featuredProductSection.locator(
      ".product__text.inline-richtext"
    );
    this.priceRegularLocator = this.featuredProductSection.locator(
      "span.price-item.price-item--regular"
    );
    this.priceSaleLocator = this.featuredProductSection.locator(
      "span.price-item.price-item--sale"
    );
    this.quantityLocator =
      this.featuredProductSection.locator(".quantity__input");
    this.addToCartButtonLocator = this.featuredProductSection.locator(
      ".product__form button[type='submit']"
    );
    this.buyButtonLocator = this.featuredProductSection.locator(
      "shopify-buy-it-now-button button.shopify-payment-button__button"
    );

    // Initialize Search section
    this.searchButtonLocator = page.locator(
      "[aria-label='Search'][role='button']"
    );
    this.searchInputLocator = page.locator("#Search-In-Modal");

    // Initialize Cart notification
    this.cartNotificationLocator = page.locator("#cart-notification");
    this.cartNotificationTitleLocator =
      this.cartNotificationLocator.locator("h3");
    this.cartNotificationQuantityLocator =
      this.cartNotificationLocator.locator("a");
    this.cartNotificationViewCartButtonLocator =
      this.cartNotificationLocator.locator("#cart-notification-button");

    // Initialize Cart section
    this.cartHeaderLocator = page.locator("#cart-icon-bubble");

    // Initialize Header menu
    this.headerMenuCategoryLocator = page.locator("#HeaderMenu-catalog");
    this.headerMenuHomeLocator = page.locator("#HeaderMenu-home");
  }

  /**
   * Navigates to the home page
   * @throws Error if navigation fails
   */
  async open(): Promise<void> {
    try {
      await this.page.goto(config.baseUrl);
      await this.page.waitForLoadState("networkidle");
      await this.validateHomePageTitle();
    } catch (error) {
      throw new Error(`Failed to navigate to home page: ${error}`);
    }
  }

  /**
   * Validates the home page title
   * @throws Error if the home page title is not found or not visible
   */
  async validateHomePageTitle(): Promise<void> {
    await expect(this.page).toHaveTitle(pageTitles.homePage.default);
  }

  /**
   * Get the details of the featured product - single product in home page
   * @returns The details of the featured product
   * @throws Error if product details cannot be retrieved
   */
  async getFeaturedProductDetails(): Promise<productDetails> {
    try {
      // Wait for the featured product section to be visible
      await this.featuredProductSection.waitFor({ state: "visible" });

      // Get the details of the featured product
      const [title, description, priceRegular, priceSale, quantity] =
        await Promise.all([
          this.titleLocator.textContent(),
          this.descriptionLocator.textContent(),
          this.priceRegularLocator.textContent(),
          this.priceSaleLocator.textContent(),
          this.quantityLocator.getAttribute("value"),
        ]);

      // Clean prices
      const cleanedRegularPrice =
        priceRegular?.replace(/[^\d.]/g, "").trim() ?? "";
      const cleanedSalePrice = priceSale?.replace(/[^\d.]/g, "").trim() ?? "";

      return {
        title: title?.trim() ?? "Unknown Title",
        description: description?.trim() ?? "No description available",
        priceRegular: cleanedRegularPrice || "No price regular available",
        priceSale: cleanedSalePrice || "No price sale available",
        quantity: quantity?.trim() ?? "No quantity available",
        addToCartButton: this.addToCartButtonLocator,
        buyButton: this.buyButtonLocator,
      };
    } catch (error) {
      throw new Error(`Failed to get featured product details: ${error}`);
    }
  }

  /**
   * Get the title and price of all single products in the home page
   * @returns The title and price of all single products in the home page
   * @throws Error if product details cannot be retrieved
   */
  async getSingleProductInfo(): Promise<productDetails[]> {
    return await this.page.evaluate(() => {
      const products: productDetails[] = [];

      const productCards = document.querySelectorAll(".product-card-wrapper");
      productCards.forEach((card) => {
        const title =
          card.querySelector(".card__heading a")?.textContent?.trim() || "";
        const price =
          card
            .querySelector(".price-item--sale, .price-item--regular")
            ?.textContent?.trim() || "";

        // Check if product is sold out by looking for the "Sold out" badge
        const isSoldOut =
          card.querySelector(".badge--bottom-left")?.textContent?.trim() ===
          "Sold out";

        products.push({
          title: title?.trim() ?? "",
          priceRegular: price?.trim() ?? "",
          isInStock: !isSoldOut,
        });
      });

      return products;
    });
  }

  /**
   * Buys the featured product
   * @throws Error if buy button is not found or not visible
   */
  async buyFeaturedProduct(): Promise<productDetails> {
    try {
      const featuredProductDetails = await this.getFeaturedProductDetails();

      // Ensure the buy button is in view
      await featuredProductDetails.buyButton?.scrollIntoViewIfNeeded();

      // Wait for the button to be visible and enabled
      await featuredProductDetails.buyButton?.waitFor({ state: "visible" });
      await featuredProductDetails.buyButton?.waitFor({ state: "attached" });

      // Click the buy button
      await featuredProductDetails.buyButton?.click();

      // Wait for navigation after clicking and check if the URL contains "checkouts"
      await this.page.waitForURL("**/checkouts/**");
      console.log(
        "Successfully navigated to the checkout page for: " +
          featuredProductDetails.title
      );

      // Return the product details to be used in the checkout page
      return featuredProductDetails;
    } catch (error) {
      throw new Error(`Failed to buy featured product: ${error}`);
    }
  }

  /**
   * Searches for a product by name or related words
   * @param productName - The name of the product to search for
   * @throws Error if search button is not found or not visible
   */
  async searchProduct(productName: string): Promise<void> {
    await this.searchButtonLocator.click();
    await this.searchInputLocator.waitFor({ state: "visible" });
    await this.searchInputLocator.fill(productName);
    await this.searchInputLocator.press("Enter");
    await this.page.waitForLoadState("networkidle");
    expect(this.page.url()).toContain(productName);
    console.log("Successfully searched for: " + productName);
  }

  /**
   * Validates the cart notification
   * @param productDetails - The product details
   */
  async validateCartNotification(productDetails: productDetails) {
    const cartNotificationTitle =
      await this.cartNotificationTitleLocator.textContent();
    expect(cartNotificationTitle).toContain(productDetails.title);
    const cartNotificationQuantity =
      await this.cartNotificationQuantityLocator.textContent();
    expect(cartNotificationQuantity).toContain(
      "(" + productDetails.quantity + ")"
    );
    console.log(
      "Successfully validated the cart notification for: " +
        productDetails.title
    );
  }

  /**
   * Navigates to the cart via the cart notification
   * @throws Error if cart notification is not found or not visible
   */
  async navigateToCartViaCartNotification(): Promise<void> {
    await this.cartNotificationViewCartButtonLocator.click();
    await this.page.waitForURL(config.baseUrl + "cart");
    console.log(
      "Successfully navigated to the cart page via cart notification"
    );
  }

  /**
   * Navigates to the cart via the header
   * @throws Error if cart is not found or not visible
   */
  async navigateToCartViaHeader(): Promise<void> {
    await this.cartHeaderLocator.click();
    await this.page.waitForURL(config.baseUrl + "cart");
    console.log("Successfully navigated to the cart page via header");
  }

  /**
   * Navigates to a specific header menu option
   * @param headerOption - The header menu option to navigate to
   * @throws Error if the header option is not found or not visible
   */
  async navigateHeaderMenuOption(headerOption: HeaderOption): Promise<void> {
    if (headerOption === HeaderOption.Catalog) {
      await this.headerMenuCategoryLocator.click();
      await this.page.waitForURL(config.baseUrl + "collections/all");
    } else if (headerOption === HeaderOption.Home) {
      await this.headerMenuHomeLocator.click();
      await this.page.waitForURL(config.baseUrl);
    }
    console.log("Successfully navigated to the " + headerOption + " page");
  }

  /**
   * Selects the first product from the search results that is in stock
   * @returns The details of the selected product
   */
  async selectInStockProduct(): Promise<productDetails> {
    const productInfo = await this.getSingleProductInfo();
    const inStockProduct = productInfo.find((product) => product.isInStock);

    if (!inStockProduct) {
      throw new Error("No in-stock products found");
    }

    const productLink = this.page
      .locator(`.card-wrapper:has-text("${inStockProduct.title}")`)
      .first();

    await productLink.waitFor({ state: "visible" });
    await productLink.scrollIntoViewIfNeeded();
    await productLink.click();

    return inStockProduct;
  }
}

import { expect, Locator, Page } from "@playwright/test";
import { productDetails } from "../types/productDetails";
import { HomePage } from "./HomePage";
import { CartPage } from "./CartPage";
import { pageTitles } from "../utils/constants";

export class ProductPage {
  private readonly page: Page;
  private readonly homePage: HomePage;
  private readonly cartPage: CartPage;
  private readonly productTitle: Locator;
  private readonly productPrice: Locator;
  private readonly productQuantity: Locator;
  private readonly productAddToCartButton: Locator;

  /**
   * Constructor for the ProductPage class
   * @param page - The page object
   */
  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(page);
    // Product details
    this.productTitle = this.page.locator("[class='product__title'] h1");
    this.productPrice = this.page.locator(
      "product-info span[class='price-item price-item--regular']"
    );
    this.productQuantity = this.page.locator(".quantity__input");
    this.productAddToCartButton = this.page.locator("[name='add']");
    this.cartPage = new CartPage(page);
  }

  /**
   * Adds a product to the cart
   * @param productDetails - The product details
   */
  async addProductToCart(productDetails: productDetails) {
    const product = await this.validateRightProductIsOpen(productDetails);
    await product.addToCartButton.click();
    await this.homePage.validateCartNotification(productDetails);
    await this.homePage.navigateToCartViaCartNotification();
    await this.cartPage.validateCartPage(productDetails);
  }

  /**
   * Validates that the right product is open and returns the add to cart button
   * @param productDetails - The product details
   * @returns The product details and the add to cart button
   */
  async validateRightProductIsOpen(productDetails: productDetails) {
    await this.validateProductPageTitle(productDetails);
    // Validate the product title
    const titleText = await this.productTitle.textContent();
    expect(titleText).toContain(productDetails.title);
    // Validate the product price
    const priceText = await this.productPrice.textContent();
    expect(priceText).toContain(productDetails.priceRegular);
    // Validate the product quantity, by default it is 1
    if (productDetails.quantity) {
      const quantityText = await this.productQuantity.inputValue();
      expect(quantityText).toContain(productDetails.quantity);
      productDetails.quantity = quantityText;
    } else {
      const quantityText = await this.productQuantity.inputValue();
      expect(quantityText).toContain("1");
      productDetails.quantity = quantityText;
    }
    console.log("Product details validated");
    return {
      title: productDetails.title,
      priceRegular: productDetails.priceRegular,
      quantity: productDetails.quantity,
      addToCartButton: this.productAddToCartButton,
    };
  }

  /**
   * Validates the product page title
   */
  async validateProductPageTitle(
    productDetails: productDetails
  ): Promise<void> {
    await expect(this.page).toHaveTitle(
      productDetails.title + pageTitles.productPage.default
    );
  }
}

import { Page, expect, Locator } from "@playwright/test";
import { productDetails } from "../types/productDetails";
import { pageTitles } from "../utils/constants";

export class CartPage {
  private readonly page: Page;

  // Cart items
  private readonly cartItems: Locator;
  private readonly cartTitle: Locator;
  private readonly cartTotalPrice: Locator;
  private readonly cartQuantity: Locator;
  private readonly cartQuantityPlus: Locator;
  private readonly cartQuantityMinus: Locator;

  // Checkout button
  private readonly checkoutButton: Locator;

  /**
   * Constructor for the CartPage class
   * @param page - The page object
   */
  constructor(page: Page) {
    this.page = page;

    // Cart items
    this.cartItems = this.page.locator("tbody .cart-item");
    this.cartTitle = this.page.locator(".cart-item__name");
    this.cartTotalPrice = this.page.locator(
      ".cart-item__totals.right.small-hide .cart-item__price-wrapper .price"
    );
    this.cartQuantity = this.page.locator("input.quantity__input");
    this.cartQuantityPlus = this.page.locator("[name='plus']");
    this.cartQuantityMinus = this.page.locator("[name='minus']");

    // Checkout button
    this.checkoutButton = this.page.locator("#checkout[form='cart']");
  }

  /**
   * Validates the cart page
   * @param productDetails - Single product details or array of product details
   */
  async validateCartPage(productDetails: productDetails | productDetails[]) {
    await this.validateCartPageTitle();
    await this.validateItemInCart(productDetails);
    await this.validateEstimatedTotal(productDetails);
    await expect(this.checkoutButton).toBeVisible();
  }

  /**
   * Validates the cart page title
   */
  async validateCartPageTitle() {
    await expect(this.page).toHaveTitle(pageTitles.cartPage.default);
  }

  /**
   * Validates the cart information
   * @param productDetails - Single product details or array of product details
   */
  async validateItemInCart(productDetails: productDetails | productDetails[]) {
    const products = Array.isArray(productDetails)
      ? productDetails
      : [productDetails];

    for (const product of products) {
      // Locate the row (tr) that contains the product title
      const cartItem = this.cartItems.filter({ hasText: product.title });

      // Ensure the product title is visible
      await expect(cartItem.locator(this.cartTitle)).toHaveText(
        new RegExp(product.title, "i")
      );

      // Validate price
      const priceText = await cartItem
        .locator(this.cartTotalPrice)
        .textContent();
      expect(priceText?.trim()).toBe(
        product.priceRegular.replace(" USD", "").trim()
      );

      // Validate quantity
      const quantityInput = cartItem.locator(this.cartQuantity);
      await expect(quantityInput).toHaveValue(String(product.quantity));

      console.log("Successfully validated: " + product.title + " in cart");
    }
  }

  /**
   * Validates the estimated total based on the sum of all products' prices in the cart
   * @param productDetails - Single product details or array of product details
   */
  async validateEstimatedTotal(
    productDetails: productDetails | productDetails[]
  ) {
    const products = Array.isArray(productDetails)
      ? productDetails
      : [productDetails];

    // Calculate total price from all products
    const expectedTotal = products.reduce((sum, product) => {
      const priceStr = product.priceRegular.replace(" USD", "").trim();
      const price = parseFloat(priceStr.replace(/[^0-9.]/g, ""));
      if (isNaN(price)) {
        throw new Error(
          `Invalid price format for product ${product.title}: ${priceStr}`
        );
      }
      return sum + price;
    }, 0);

    // Get actual total from the page
    const totalPriceText = await this.page
      .locator(".totals__total-value")
      .textContent();

    if (!totalPriceText) {
      throw new Error("Could not find total price on the page");
    }

    const actualTotal = parseFloat(totalPriceText.replace(/[^0-9.]/g, ""));
    if (isNaN(actualTotal)) {
      throw new Error(`Invalid total price format: ${totalPriceText}`);
    }

    // Compare totals
    expect(actualTotal).toBe(expectedTotal);
    console.log(
      "Successfully validated estimated total: $" + actualTotal.toFixed(2)
    );
  }

  /**
   * Edits the cart
   * @param productDetails - The product details
   */
  async editCart(productDetails: productDetails) {
    // Add one more product quantity to the cart
    await this.addProductQuantity(productDetails, 1);
    // Remove one product quantity from the cart
    await this.removeProductQuantity(productDetails, 1);
  }

  /**
   * Adds a product quantity to the cart
   * @param productDetails - The product details
   * @param quantity - The quantity to add
   */
  async addProductQuantity(productDetails: productDetails, quantity: number) {
    for (let i = 0; i < quantity; i++) {
      await this.cartQuantityPlus.click();
    }
    await this.page.waitForTimeout(1000);

    const currentValue = await this.cartQuantity.inputValue();
    const updatedQuantity = parseInt(currentValue, 10);

    await expect(this.cartQuantity).toHaveValue(String(updatedQuantity));

    // Validate updated price
    const unitPrice = parseFloat(
      productDetails.priceRegular.replace(" USD", "").replace(/[^0-9.]/g, "")
    );
    const expectedPrice = unitPrice * updatedQuantity;

    const priceText = await this.cartTotalPrice.textContent();
    const actualPrice = parseFloat(priceText?.replace(/[^0-9.]/g, "") || "0");

    expect(actualPrice).toBeCloseTo(expectedPrice, 2);

    console.log(
      `Successfully added ${quantity} ${
        productDetails.title
      } to cart. New quantity: ${updatedQuantity}, expected total price: $${expectedPrice.toFixed(
        2
      )}`
    );
  }

  /**
   * Removes a product quantity from the cart
   * @param productDetails - The product details
   * @param quantity - The quantity to remove
   */
  async removeProductQuantity(
    productDetails: productDetails,
    quantity: number
  ) {
    const currentValue = await this.cartQuantity.inputValue();
    const currentQuantity = parseInt(currentValue, 10);
    const expectedQuantity = currentQuantity - quantity;

    for (let i = 0; i < quantity; i++) {
      await this.cartQuantityMinus.click();
    }

    await this.page.waitForTimeout(1000);

    await expect(this.cartQuantity).toHaveValue(String(expectedQuantity));

    // Validate updated price
    const unitPrice = parseFloat(
      productDetails.priceRegular.replace(" USD", "").replace(/[^0-9.]/g, "")
    );
    const expectedPrice = unitPrice * expectedQuantity;

    const priceText = await this.cartTotalPrice.textContent();
    const actualPrice = parseFloat(priceText?.replace(/[^0-9.]/g, "") || "0");

    expect(actualPrice).toBeCloseTo(expectedPrice, 2);

    console.log(
      `Successfully removed ${quantity} ${
        productDetails.title
      } from cart. New quantity: ${expectedQuantity}, expected total price: $${expectedPrice.toFixed(
        2
      )}`
    );
  }
}

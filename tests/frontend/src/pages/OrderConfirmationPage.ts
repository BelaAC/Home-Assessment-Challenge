import { expect, FrameLocator, Locator, Page } from "@playwright/test";
import { userDetails } from "../types/userDetails";
import { orderConfirmationPage, pageTitles } from "../utils/constants";
import { orderDetails, shippingMethod } from "../types/orderDetails";
import { productDetails } from "../types/productDetails";
import { cardNumbers } from "../types/cardNumbers";
import { config } from "../utils/config";

export class OrderConfirmationPage {
  // Header elements
  private readonly orderConfirmationTitleLocator: Locator;
  private readonly orderConfirmationMapSectionLocator: Locator;
  private readonly mapOrderConfirmationTitleLocator: Locator;

  // Map section elements
  private readonly orderConfirmationMapiFrameLocator: FrameLocator;
  private readonly orderConfirmationMapSectionSubtitleLocator: Locator;
  private readonly orderConfirmationMapShippingAddressTitleLocator: Locator;
  private readonly orderConfirmationMapShippingAddressLocator: Locator;
  private readonly orderConfirmationDownloadButtonLocator: Locator;
  private readonly emailNewsAndOffersCheckboxLocator: Locator;

  // Order summary locators
  private readonly orderSummaryTitle: Locator;
  private readonly orderSummaryQuantity: Locator;
  private readonly orderSummaryPrice: Locator;
  private readonly orderSummarySubtotal: Locator;
  private readonly orderSummaryShipping: Locator;
  private readonly orderSummaryTotal: Locator;

  // Order details locators
  private readonly contactEmailLocator: Locator;
  private readonly shippingAddressLocator: Locator;
  private readonly shippingMethodLocator: Locator;
  private readonly paymentMethodLocator: Locator;
  private readonly billingAddressLocator: Locator;

  // Continue shopping button locator
  private readonly continueShoppingButtonLocator: Locator;

  constructor(private readonly page: Page) {
    // Header elements
    this.orderConfirmationTitleLocator = page.locator(".os-header__title");
    this.orderConfirmationMapSectionLocator = page.locator(
      ".content-box__row.text-container"
    );

    // Map section elements
    this.orderConfirmationMapiFrameLocator =
      page.frameLocator("iframe.map__iframe");
    this.mapOrderConfirmationTitleLocator =
      this.orderConfirmationMapSectionLocator.locator(
        ".heading-2.os-step__title"
      );
    this.orderConfirmationMapSectionSubtitleLocator =
      this.orderConfirmationMapSectionLocator.locator(
        ".os-step__special-description p"
      );
    this.orderConfirmationMapShippingAddressTitleLocator =
      this.orderConfirmationMapiFrameLocator.locator(
        "[role='dialog'] span.small-text"
      );
    this.orderConfirmationMapShippingAddressLocator =
      this.orderConfirmationMapiFrameLocator.locator(
        "[role='dialog'] span.emphasis"
      );
    this.orderConfirmationDownloadButtonLocator = page.locator(
      "[data-qr-code-handle]"
    );
    this.emailNewsAndOffersCheckboxLocator = page.locator("[method='post']");

    // Order summary locators
    this.orderSummaryTitle = page.locator(".product__description__name");
    this.orderSummaryQuantity = page.locator(
      ".product__quantity .visually-hidden"
    );
    this.orderSummaryPrice = page.locator(
      ".product__price .order-summary__price"
    );
    this.orderSummarySubtotal = page.locator(
      ".total-line--subtotal .order-summary__emphasis"
    );
    this.orderSummaryShipping = page.locator(
      ".total-line--shipping .order-summary__emphasis"
    );
    this.orderSummaryTotal = page.locator(".payment-due__price");

    // Order details locators
    this.contactEmailLocator = page.locator(
      'h3:has-text("Contact information") + p bdo'
    );

    this.shippingAddressLocator = page.locator(
      'h3:has-text("Shipping address") + address'
    );

    this.shippingMethodLocator = page.locator(
      'h3:has-text("Shipping method") + p'
    );

    this.paymentMethodLocator = page.locator(
      ".payment-method-list__item__info"
    );

    this.billingAddressLocator = page.locator(
      'h3:has-text("Billing address") + address'
    );

    // Continue shopping button locator
    this.continueShoppingButtonLocator = page.locator(
      ".step__footer__continue-btn.btn"
    );
  }

  /**
   * Validates the order confirmation page
   * @param userDetails - The user details
   * @param orderDetails - The order details
   * @param productDetails - The product details
   */
  async validateOrderConfirmationPage(
    userDetails: userDetails,
    orderDetails: orderDetails,
    productDetails: productDetails
  ): Promise<void> {
    await expect(this.page).toHaveTitle(
      pageTitles.orderConfirmationPage.default
    );
    await this.validateTitle(userDetails);
    await this.validateMap(userDetails, orderDetails);
    await this.validateOrderSummary(productDetails);
    await this.validateOrderDetails(userDetails, orderDetails);
    await this.validateContinueShoppingButton();
  }

  /**
   * Validates the title of the order confirmation page
   * @param userDetails - The user details
   */
  async validateTitle(userDetails: userDetails): Promise<void> {
    const expectedTitle = userDetails.firstName
      ? orderConfirmationPage.title.withName(userDetails.firstName)
      : orderConfirmationPage.title.default;

    await expect(this.orderConfirmationTitleLocator).toHaveText(expectedTitle);
  }

  /**
   * Validates the map section of the order confirmation page
   * @param userDetails - The user details
   * @param orderDetails - The order details
   */
  async validateMap(
    userDetails: userDetails,
    orderDetails: orderDetails
  ): Promise<void> {
    await this.orderConfirmationMapShippingAddressTitleLocator.waitFor({
      state: "visible",
    });
    await expect(
      this.orderConfirmationMapShippingAddressTitleLocator
    ).toHaveText(orderConfirmationPage.map.shippingAddressTitle);
    await expect(this.orderConfirmationMapShippingAddressLocator).toContainText(
      userDetails.address.city
    );
    await expect(this.mapOrderConfirmationTitleLocator).toHaveText(
      orderConfirmationPage.map.title
    );
    await expect(this.orderConfirmationMapSectionSubtitleLocator).toHaveText(
      orderConfirmationPage.map.subtitle
    );
    await expect(this.emailNewsAndOffersCheckboxLocator).toBeVisible();

    if (orderDetails.shippingMethod === shippingMethod.StandardShipping) {
      await expect(this.orderConfirmationDownloadButtonLocator).toBeVisible();
    }
  }

  /**
   * Validates the order summary section of the order confirmation page
   * @param productDetails - The product details
   */
  async validateOrderSummary(productDetails: productDetails): Promise<void> {
    try {
      // Wait for the order summary section to be visible
      await this.page.locator(".order-summary").waitFor({ state: "visible" });

      const productName = (await this.orderSummaryTitle.textContent())?.trim();
      expect(productName).toEqual(productDetails.title);

      const productQuantity = (
        await this.orderSummaryQuantity.textContent()
      )?.trim();
      expect(productQuantity).toEqual(productDetails.quantity);

      const productPriceRaw = await this.orderSummaryPrice.textContent();
      const productPrice = productPriceRaw?.replace(/[^\d.]/g, "").trim();

      const salePrice = parseFloat(
        productDetails.priceSale?.replace(/[^\d.]/g, "") || "0"
      );
      const regularPrice = parseFloat(
        productDetails.priceRegular?.replace(/[^\d.]/g, "") || "0"
      );

      let expectedPrice = 0;
      if (!isNaN(salePrice) && !isNaN(regularPrice)) {
        expectedPrice = Math.min(salePrice, regularPrice);
      } else if (!isNaN(salePrice)) {
        expectedPrice = salePrice;
      } else if (!isNaN(regularPrice)) {
        expectedPrice = regularPrice;
      }

      expect(productPrice).toEqual(expectedPrice.toFixed(2));

      const subtotal = (await this.orderSummarySubtotal.textContent())
        ?.replace(/[^\d.]/g, "")
        .trim();
      expect(subtotal).toEqual(expectedPrice.toFixed(2));

      const shippingRaw = await this.orderSummaryShipping.textContent();
      const shippingPrice = parseFloat(
        shippingRaw?.replace(/[^\d.]/g, "") || "0"
      );

      const totalText = await this.orderSummaryTotal.textContent();
      const total = parseFloat(totalText?.replace(/[^\d.]/g, "") || "0");
      const expectedTotal = expectedPrice + shippingPrice;

      expect(total).toBeCloseTo(expectedTotal, 2);

      console.log("Order summary validated successfully");
    } catch (error: any) {
      throw new Error(`Failed to validate order summary: ${error.message}`);
    }
  }

  /**
   * Validates the order details section of the order confirmation page
   * @param userDetails - The user details
   * @param orderDetails - The order details
   */
  async validateOrderDetails(
    userDetails: userDetails,
    orderDetails: orderDetails
  ): Promise<void> {
    try {
      await this.contactEmailLocator.scrollIntoViewIfNeeded();

      // Wait for each element in the order details section
      await this.contactEmailLocator.waitFor({ state: "visible" });
      await this.shippingAddressLocator.waitFor({ state: "visible" });
      await this.shippingMethodLocator.waitFor({ state: "visible" });
      await this.paymentMethodLocator.waitFor({ state: "visible" });
      await this.billingAddressLocator.waitFor({ state: "visible" });

      const email = (await this.contactEmailLocator.textContent())?.trim();
      expect(email).toEqual(userDetails.email);

      const shippingAddress = (await this.shippingAddressLocator.innerText())
        .replace(/\s+/g, " ")
        .trim();

      const expectedShippingAddress = [
        `${userDetails.firstName} ${userDetails.lastName}`,
        userDetails.address.address,
        userDetails.address.city,
        userDetails.address.state,
        userDetails.address.postalCode,
        "United States",
      ]
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();

      expect(shippingAddress).toEqual(expectedShippingAddress);

      const shippingMethod = (
        await this.shippingMethodLocator.textContent()
      )?.trim();
      expect(shippingMethod).toEqual(orderDetails.shippingMethod);

      const paymentMethod = (
        await this.paymentMethodLocator.textContent()
      )?.trim();
      expect(paymentMethod).toContain("ending with " + cardNumbers.approved);

      const billingAddress = (await this.billingAddressLocator.innerText())
        .replace(/\s+/g, " ")
        .trim();

      expect(billingAddress).toEqual(expectedShippingAddress);

      console.log("Order details validated successfully");
    } catch (error: any) {
      throw new Error(`Failed to validate order details: ${error.message}`);
    }
  }

  /**
   * Validates the continue shopping button
   */
  async validateContinueShoppingButton(): Promise<void> {
    await this.continueShoppingButtonLocator.click();
    await expect(this.page).toHaveURL(config.baseUrl);
  }
}

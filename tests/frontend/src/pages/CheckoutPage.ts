import { Locator, Page, expect, FrameLocator } from "@playwright/test";
import {
  generateRandomUser,
  generateRandomCardInfo,
} from "../utils/dataGenerators";
import { fillInput } from "../utils/utils";
import { productDetails } from "../types/productDetails";
import { cardNumbers } from "../types/cardNumbers";
import { userDetails } from "../types/userDetails";
import { orderDetails } from "../types/orderDetails";
import { checkoutPage, pageTitles } from "../utils/constants";

/**
 * Page Object Model for the Checkout Page.
 */
export class CheckoutPage {
  private readonly page: Page;

  // Contact information
  private readonly emailInput: Locator;
  private readonly emailCheckbox: Locator;

  // Delivery information
  private readonly countrySelect: Locator;
  private readonly stateSelect: Locator;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly postalCodeInput: Locator;
  private readonly addressInput: Locator;
  private readonly optAddressInput: Locator;
  private readonly cityInput: Locator;
  private readonly saveInfoCheckbox: Locator;

  // Shipping method
  private readonly shippingPrice: Locator;
  private readonly shippingMethod: Locator;
  // Payment information - IFrames
  private readonly cardNumberIFrame: FrameLocator;
  private readonly cardExpirationDateIFrame: FrameLocator;
  private readonly cardCvvIFrame: FrameLocator;
  private readonly cardHolderNameIFrame: FrameLocator;

  // Payment information - Inputs inside IFrames
  private readonly cardNumberInput: Locator;
  private readonly cardExpirationDateInput: Locator;
  private readonly cardCvvInput: Locator;
  private readonly cardHolderNameInput: Locator;

  // Payment method selector
  private readonly paymentMethodSelect: Locator;

  // Order summary section
  private readonly orderTitle: Locator;
  private readonly orderQuantity: Locator;
  private readonly orderSubtotal: Locator;
  private readonly orderTotal: Locator;
  private readonly orderItemPrice: Locator;

  // Checkout Pay button
  private readonly checkoutPayButton: Locator;

  // Payment error message
  private readonly paymentErrorBanner: Locator;

  /**
   * Initializes the CheckoutPage class with page and locators.
   * @param page Playwright Page instance
   */
  constructor(page: Page) {
    this.page = page;

    // Initialize Contact information locators
    this.emailInput = this.page.locator("#email");
    this.emailCheckbox = this.page.locator("#marketing_opt_in");

    // Initialize Delivery information locators
    this.countrySelect = this.page.locator(
      "#shippingAddressForm [name=countryCode]"
    );
    this.stateSelect = this.page.locator(
      "#shippingAddressForm select[name=zone]"
    );
    this.firstNameInput = this.page.locator("[name=firstName][type='text']");
    this.lastNameInput = this.page.locator("[name=lastName][type='text']");
    this.postalCodeInput = this.page.locator(
      "[name='postalCode'][type='text']"
    );
    this.addressInput = this.page.locator("[name=address1][type='text']");
    this.optAddressInput = this.page.locator("[name=address2][type='text']");
    this.cityInput = this.page.locator("[name=city][type='text']");
    this.saveInfoCheckbox = this.page.locator(
      "input#save_shipping_information"
    );

    // Initialize Shipping method locator
    this.shippingPrice = this.page.locator("#shipping_methods strong");
    this.shippingMethod = this.page.locator("#shipping_methods p");

    // Initialize Payment information IFrame locators
    this.cardNumberIFrame = this.page.frameLocator(
      "[class='card-fields-iframe'][title='Field container for: Card number']"
    );
    this.cardExpirationDateIFrame = this.page.frameLocator(
      "[class='card-fields-iframe'][title='Field container for: Expiration date (MM / YY)']"
    );
    this.cardCvvIFrame = this.page.frameLocator(
      "[class='card-fields-iframe'][title='Field container for: Security code']"
    );
    this.cardHolderNameIFrame = this.page.frameLocator(
      "[class='card-fields-iframe'][title='Field container for: Name on card']"
    );

    // Initialize Payment input locators inside IFrames
    this.cardNumberInput = this.cardNumberIFrame.locator(
      "input[placeholder='Card number']"
    );
    this.cardExpirationDateInput =
      this.cardExpirationDateIFrame.locator("[name='expiry']");
    this.cardCvvInput = this.cardCvvIFrame.locator(
      "[placeholder='Security code']"
    );
    this.cardHolderNameInput = this.cardHolderNameIFrame.locator(
      "[placeholder='Name on card']"
    );

    // Initialize Payment method selector
    this.paymentMethodSelect = this.page.locator("#payment_methods label");

    // Initialize Order summary section
    this.orderTitle = this.page.locator("[scrollbehaviour='chain'] p");
    this.orderQuantity = this.page.locator(
      "[scrollbehaviour='chain'] span:nth-child(2)"
    );
    this.orderItemPrice = this.page.locator(
      '[tabindex="0"] [role="cell"] span',
      {
        hasText: "$",
      }
    );
    this.orderSubtotal = this.page
      .locator("role=row", { hasText: "Subtotal" })
      .locator("role=cell");
    this.orderTotal = this.page.locator("[role='table'] [role='cell'] strong");

    // Initialize Checkout Pay button
    this.checkoutPayButton = this.page.locator("#checkout-pay-button");

    // Payment error message
    this.paymentErrorBanner = this.page.locator("#PaymentErrorBanner div div");
  }

  /**
   * Fills the contact form with the given email and optionally opts into marketing emails.
   * @param email User's email address
   * @param marketingOptIn Whether to opt into marketing emails
   */
  async fillContactForm(email: string, marketingOptIn?: boolean) {
    await fillInput(this.emailInput, email);
    console.log(`Email filled with: ${email}`);

    if (marketingOptIn) {
      await this.emailCheckbox.click();
      console.log("Email checkbox clicked");
    }
  }

  /**
   * Fills the delivery form with user address and delivery information.
   * @param lastName User's last name
   * @param postalCode Postal/ZIP code
   * @param address Address line 1
   * @param city City name
   * @param name First name (optional)
   * @param country Country code (optional)
   * @param state State/Province code (optional)
   * @param optionalAddress Address line 2 (optional)
   * @param saveInfo Whether to save the information for future use (optional)
   */
  async fillDeliveryForm(
    lastName: string,
    postalCode: string,
    address: string,
    city: string,
    name?: string,
    country?: string,
    state?: string,
    optionalAddress?: string,
    saveInfo?: boolean
  ): Promise<void> {
    try {
      if (country) {
        await this.countrySelect.selectOption({ label: country });
      }
      if (state) {
        await this.stateSelect.selectOption({ value: state });
      }

      await fillInput(this.firstNameInput, name ?? "");
      await fillInput(this.lastNameInput, lastName);
      await fillInput(this.postalCodeInput, postalCode);
      await fillInput(this.addressInput, address);
      await fillInput(this.optAddressInput, optionalAddress ?? "");
      await fillInput(this.cityInput, city);

      if (saveInfo) {
        await this.saveInfoCheckbox.click();
      }

      console.log("Delivery form filled with:", {
        name,
        lastName,
        postalCode,
        address,
        city,
        optionalAddress,
        saveInfo,
        country,
        state,
      });
    } catch (error) {
      throw new Error(`Failed to fill delivery form: ${error}`);
    }
  }

  /**
   * Retrieves and returns the shipping method price displayed on the checkout page.
   * @returns orderDetails object with shipping method and price
   */
  async getShippingMethod(): Promise<orderDetails> {
    try {
      // Get shipping price
      await this.shippingPrice.waitFor({ state: "visible", timeout: 10000 });
      await this.shippingPrice.scrollIntoViewIfNeeded();

      const shippingPriceRaw = await this.shippingPrice.textContent();
      const shippingPriceFormatted =
        shippingPriceRaw?.replace(/[^\d.]/g, "").trim() ?? "";
      console.log(`Shipping price: ${shippingPriceFormatted}`);

      // Get shipping method
      const shippingMethodRaw = await this.shippingMethod.textContent();
      const shippingMethod = shippingMethodRaw?.trim() ?? "";
      console.log(`Shipping method: ${shippingMethod}`);

      return {
        shippingMethod: shippingMethod,
        shippingPrice: shippingPriceFormatted,
      };
    } catch (error) {
      throw new Error(`Failed to validate shipping method: ${error}`);
    }
  }

  /**
   * Fills the payment form with randomly generated credit card information, except for the card number.
   * @param cardNumber The card number to use for the payment form
   */
  async fillPaymentForm(cardNumber: cardNumbers): Promise<void> {
    try {
      const cardInfo = generateRandomCardInfo();

      await this.cardNumberIFrame.locator("body").waitFor({ state: "visible" });
      await this.cardNumberInput.scrollIntoViewIfNeeded();
      await this.cardNumberInput.fill(cardNumber);

      await this.cardExpirationDateIFrame
        .locator("body")
        .waitFor({ state: "visible" });
      await this.cardExpirationDateInput.fill(cardInfo.cardExpirationDate);

      await this.cardCvvIFrame.locator("body").waitFor({ state: "visible" });
      await this.cardCvvInput.fill(cardInfo.cardCvv);

      console.log("Payment form filled");
    } catch (error) {
      throw new Error(`Failed to fill payment form: ${error}`);
    }
  }

  /**
   * Validates the order summary section on the checkout page.
   * @param productDetails The details of the product being purchased
   */
  async validateOrderSummary(productDetails: productDetails): Promise<void> {
    try {
      const productName = await this.orderTitle.textContent();
      expect(productName?.trim()).toEqual(productDetails.title);

      const productQuantity = await this.orderQuantity.textContent();
      expect(productQuantity?.trim()).toEqual(productDetails.quantity);

      const productPriceRaw = await this.orderItemPrice.textContent();
      const productPrice = productPriceRaw?.replace(/[^\d.]/g, "").trim();

      // Clean and parse prices
      const salePrice = parseFloat(
        productDetails.priceSale?.replace(/[^\d.]/g, "") || "0"
      );
      const regularPrice = parseFloat(
        productDetails.priceRegular?.replace(/[^\d.]/g, "") || "0"
      );

      // Determine expected price to use for validation
      let expectedPrice = 0;
      if (!isNaN(salePrice) && !isNaN(regularPrice)) {
        expectedPrice = Math.min(salePrice, regularPrice);
      } else if (!isNaN(salePrice)) {
        expectedPrice = salePrice;
      } else if (!isNaN(regularPrice)) {
        expectedPrice = regularPrice;
      }

      expect(productPrice).toEqual(expectedPrice.toFixed(2));

      const subtotal = (await this.orderSubtotal.textContent())
        ?.replace(/[^\d.]/g, "")
        .trim();
      expect(subtotal).toEqual(expectedPrice.toFixed(2));

      const shippingRaw = await this.shippingPrice.textContent();
      const shippingPrice = parseFloat(
        shippingRaw?.replace(/[^\d.]/g, "") || "0"
      );

      const totalText = await this.orderTotal.textContent();
      const total = parseFloat(totalText?.replace(/[^\d.]/g, "") || "0");
      const expectedTotal = expectedPrice + shippingPrice;

      expect(total).toBeCloseTo(expectedTotal, 2);

      console.log("Order summary validated successfully");
    } catch (error) {
      throw new Error(`Failed to validate order summary: ${error}`);
    }
  }

  /**
   * Executes the complete checkout flow by filling contact, delivery, payment information,
   * retrieving the shipping method, and validating the order summary.
   * @returns The generated user details
   */
  async successfulCheckout(
    productDetails: productDetails
  ): Promise<{ userDetails: userDetails; orderDetails: orderDetails }> {
    await this.validateCheckoutPageTitle();
    try {
      const user = generateRandomUser();

      await this.fillContactForm(user.email);
      await this.fillDeliveryForm(
        user.lastName,
        user.address.postalCode,
        user.address.address,
        user.address.city,
        user.firstName,
        "United States",
        user.address.state
      );
      const orderDetails = await this.getShippingMethod();
      await this.fillPaymentForm(cardNumbers.approved);
      await this.validateOrderSummary(productDetails);
      await this.checkoutPayButton.click();

      console.log("Checkout process completed successfully");
      return { userDetails: user, orderDetails: orderDetails };
    } catch (error) {
      throw new Error(`Checkout process failed: ${error}`);
    }
  }

  /**
   * Executes the checkout flow with an invalid card number to ensure the checkout fails.
   * @param productDetails The details of the product being purchased
   */
  async unSuccessfulCheckout(): Promise<void> {
    await this.validateCheckoutPageTitle();
    try {
      const user = generateRandomUser();

      await this.fillContactForm(user.email);
      await this.fillDeliveryForm(
        user.lastName,
        user.address.postalCode,
        user.address.address,
        user.address.city,
        user.firstName,
        "United States",
        user.address.state
      );
      await this.getShippingMethod();
      await this.fillPaymentForm(cardNumbers.declined);
      await this.checkoutPayButton.click();

      await this.validatePaymentErrorMessage();

      console.log("Unsuccessful checkout process completed");
    } catch (error) {
      throw new Error(`Checkout process failed: ${error}`);
    }
  }

  /**
   * Validates the payment error message on the checkout page.
   */
  async validatePaymentErrorMessage(): Promise<void> {
    try {
      await this.paymentErrorBanner.waitFor({ state: "visible" });
      const errorMessage = await this.paymentErrorBanner.textContent();
      expect(errorMessage?.trim()).toEqual(
        checkoutPage.paymentErrorBanner.text
      );
    } catch (error) {
      throw new Error(`Payment error message not found: ${error}`);
    }
  }

  /**
   * Validates the checkout page title
   */
  async validateCheckoutPageTitle(): Promise<void> {
    await expect(this.page).toHaveTitle(pageTitles.checkoutPage.default);
  }
}

import { Page, Locator, expect } from "@playwright/test";
import {
  availabilityOptionNumber,
  availabilityOptions,
  searchFilters,
} from "../types/filterDetails";
import { HomePage } from "./HomePage";

export class SearchPage {
  private readonly page: Page;

  // Filter section
  private readonly filterSection: Locator;
  private readonly availabilityFilter: Locator;
  private readonly priceFilter: Locator;

  // Popup section
  private readonly popupSection: Locator;
  private readonly popupAvailabilityOptions: Locator;

  // Loading spinner
  private readonly loadingSpinner: Locator;

  /**
   * Constructor for the SearchPage class
   * @param page - The page object
   */
  constructor(page: Page) {
    this.page = page;

    // Filter section
    this.filterSection = this.page.locator("#FacetsWrapperDesktop");
    this.availabilityFilter = this.filterSection
      .locator("summary")
      .locator("span", {
        hasText: "Availability",
      });
    this.priceFilter = this.filterSection.locator("summary").locator("span", {
      hasText: "Price",
    });

    // Popup section
    this.popupSection = this.page.locator(
      "[class='parent-display facets__display']"
    );
    this.popupAvailabilityOptions = this.page.locator(
      "#Filter-filter.v.availability-"
    );

    // Loading spinner
    this.loadingSpinner = this.page.locator(
      "div:nth-child(4) > .loading__spinner"
    );
  }

  /**
   * Filter the search results by the given filter type
   * @param filterType - The filter type to filter by
   * @param availabilityOption - The availability option to filter by (optional)
   */
  async filterBy(
    filterType: searchFilters,
    availabilityOption?: availabilityOptions
  ) {
    if (filterType === searchFilters.availability && availabilityOption) {
      await this.availabilityFilter.click();
      expect(this.popupSection).toBeVisible();
      await this.selectAvailabilityOption(availabilityOption);
    } else if (filterType === searchFilters.price) {
      await this.priceFilter.click();
    }
    await this.loadingSpinner.waitFor({ state: "hidden" });
    await this.page.locator("body").click();
  }

  /**
   * Selects the availability filter option by visible text
   * @param optionText - The visible text, e.g., 'In stock' or 'Out of stock'
   */
  async selectAvailabilityOption(optionText: string) {
    let fullSelector: string;
    let optionNumber: availabilityOptionNumber;

    if (optionText === availabilityOptions.inStock) {
      fullSelector = `[for='Filter-filter.v.availability-${availabilityOptionNumber.instock}']`;
      optionNumber = availabilityOptionNumber.instock;
    } else if (optionText === availabilityOptions.outOfStock) {
      fullSelector = `[for='Filter-filter.v.availability-${availabilityOptionNumber.outOfStock}']`;
      optionNumber = availabilityOptionNumber.outOfStock;
    } else {
      throw new Error(`Invalid availability option: ${optionText}`);
    }

    await this.page.waitForSelector(fullSelector);
    await this.page.locator(fullSelector).click();

    // Wait for URL to contain the filter parameter
    await this.page.waitForURL(
      `**/search?*filter.v.availability=${optionNumber}*`
    );
  }

  /**
   * Selects the first product from the search results
   * @returns The details of the selected product
   */
  async selectProduct() {
    const homePage = new HomePage(this.page);

    const productInfo = await homePage.getSingleProductInfo();
    const productLink = this.page
      .locator(`.card-wrapper:has-text("${productInfo[0].title}")`)
      .first();

    await productLink.waitFor({ state: "visible" });
    await productLink.scrollIntoViewIfNeeded();
    await productLink.click();

    return productInfo[0];
  }
}

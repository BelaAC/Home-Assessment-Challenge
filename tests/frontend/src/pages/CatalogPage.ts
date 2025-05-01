import { Page, Locator, expect } from "@playwright/test";
import { sortByOptions } from "../types/filterDetails";
import { HomePage } from "./HomePage";
import { catalogPage, pageTitles } from "../utils/constants";

export class CatalogPage {
  // Main static elements
  private readonly catalogTitleLocator: Locator;
  private readonly catalogFilterTitleLocator: Locator;
  private readonly sortByFilterLocator: Locator;
  private readonly sortByFilterOptions: Locator;
  private readonly productCountLocator: Locator;

  /**
   * Initializes the CatalogPage
   * @param page - The Playwright page instance
   */
  constructor(private readonly page: Page) {
    this.catalogTitleLocator = page.locator("#MainContent h1");
    this.catalogFilterTitleLocator = page.locator("#FacetsWrapperDesktop h2");
    this.sortByFilterLocator = page.locator("[for='SortBy']");
    this.sortByFilterOptions = page.locator("#SortBy option");
    this.productCountLocator = page.locator("#ProductCountDesktop");
  }

  /**
   * Validates the catalog page
   * @throws Error if the catalog title is not found or not visible
   */
  async validateCatalogPage(): Promise<void> {
    await this.validateCatalogPageTitle();
    await this.validateCatalogStaticElements();
    await this.validateSortByFilterOptions();
    await this.validateProductCount();
  }

  /**
   * Validates the catalog page title
   * @throws Error if the catalog title is not found or not visible
   */
  async validateCatalogPageTitle(): Promise<void> {
    await expect(this.page).toHaveTitle(pageTitles.catalogPage.default);
  }

  /**
   * Validates the static elements of the catalog page
   * @throws Error if the catalog title is not found or not visible
   */
  async validateCatalogStaticElements(): Promise<void> {
    // Validate catalog title
    await expect(this.catalogTitleLocator).toBeVisible();
    await expect(this.catalogTitleLocator).toHaveText(catalogPage.title);

    // Validate catalog filter title
    await expect(this.catalogFilterTitleLocator).toBeVisible();
    await expect(this.catalogFilterTitleLocator).toHaveText(
      catalogPage.filterFilter
    );

    // Validate sort by filter
    await expect(this.sortByFilterLocator).toBeVisible();
    await expect(this.sortByFilterLocator).toHaveText(catalogPage.sortBy);
  }

  /**
   * Validates the options of the sort by filter
   * @throws Error if the sort by filter options are not found or not visible
   */
  async validateSortByFilterOptions(): Promise<void> {
    const options = await this.sortByFilterOptions.all();
    const expectedOptions = Object.values(sortByOptions);

    expect(options.length).toBe(expectedOptions.length);

    for (let i = 0; i < options.length; i++) {
      const optionText = await options[i].textContent();
      expect(optionText?.trim()).toBe(expectedOptions[i].trim());
    }
  }

  /**
   * Validates the product count
   * @throws Error if the product count is not found or not visible
   */
  async validateProductCount(): Promise<void> {
    const productCount = await this.productCountLocator.textContent();
    const expectedCount = await this.getProductCount();
    expect(productCount).toContain(expectedCount.toString());
  }

  /**
   * Gets the single product info
   * @returns The single product info
   */
  async getProductCount(): Promise<number> {
    const homePage = new HomePage(this.page);
    const products = await homePage.getSingleProductInfo();
    return products.length;
  }
}

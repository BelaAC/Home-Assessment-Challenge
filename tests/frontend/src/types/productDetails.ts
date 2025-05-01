import { Locator } from "@playwright/test";

/**
 * Details of the product
 */
export interface productDetails {
  title: string;
  priceRegular: string;
  description?: string;
  priceSale?: string;
  quantity?: string | "1";
  isInStock?: boolean;
  addToCartButton?: Locator;
  buyButton?: Locator;
}

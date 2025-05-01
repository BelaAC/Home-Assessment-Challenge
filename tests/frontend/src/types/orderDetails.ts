/**
 * Interface representing order details
 */
export interface orderDetails {
  shippingPrice: string;
  shippingMethod: string;
}

/**
 * Enum representing different shipping methods
 */
export enum shippingMethod {
  InternationalShipping = "International Shipping",
  StandardShipping = "Standard Shipping",
}

export interface orderDetails {
  shippingPrice: string;
  shippingMethod: string;
}

export enum shippingMethod {
  InternationalShipping = "International Shipping",
  StandardShipping = "Standard Shipping",
}

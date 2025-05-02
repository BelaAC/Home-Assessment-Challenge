/**
 * Constants for page titles
 */
export const pageTitles = {
  homePage: {
    default: "Monkey Bakery",
  },
  // Hyphen-minus and not en dash
  orderConfirmationPage: {
    default: "Thank you for your purchase! - Monkey Bakery - Checkout",
  },
  cartPage: {
    default: "Your Shopping Cart – Monkey Bakery",
  },
  catalogPage: {
    default: "Products – Monkey Bakery",
  },
  // Hyphen-minus and not en dash
  checkoutPage: {
    default: "Checkout - Monkey Bakery",
  },
  productPage: {
    default: " – Monkey Bakery",
  },
};

/**
 * Constants for order confirmation page
 */
export const orderConfirmationPage = {
  title: {
    default: "Thank you!",
    withName: (firstName: string) => `Thank you, ${firstName}!`,
  },
  map: {
    title: "Your order is confirmed",
    subtitle:
      "You’ll receive a confirmation email with your order number shortly.",
    shippingAddressTitle: "Shipping address",
  },
};

/**
 * Constants for checkout page
 */
export const checkoutPage = {
  paymentErrorBanner: {
    text: "There was an issue processing your payment. Try again or use a different payment method.",
  },
};

/**
 * Constants for catalog page
 */
export const catalogPage = {
  title: "Collection: Products",
  filterFilter: "Filter:",
  sortBy: "Sort by:",
};

/**
 * Constants for cart page
 */
export const cartPage = {
  emptyStateTitle: "Your cart is empty",
  continueShoppingButton: "Continue shopping",
};

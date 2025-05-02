# ❌ Test Case: Purchase - Should unsuccessfully buy product

**ID**: TC-002  
**Feature**: Product Purchase  
**Priority**: High  
**Test Type**: UI / E2E  
**Preconditions**:

- User is logged in
- Product is available in stock
- Browser context is created
- New page is opened

**Test Steps**:

1. Initialize page objects
   1.1 HomePage object is created
   1.2 CheckoutPage object is created

2. Navigate to the home page
   2.1 Home page is opened
   2.2 Home page is visible

3. Purchase featured product
   3.1 Featured product is located
   3.2 Buy button is clicked
   3.3 Checkout page is loaded

4. Attempt checkout process
   4.1 User details are entered
   4.2 Invalid card details are entered
   4.3 Pay button is clicked
   4.4 Payment error banner is displayed

**Expected Results**:

- Home page loads successfully
- Featured product is accessible
- Checkout page loads correctly
- User details are accepted
- Invalid payment is rejected
- Error message is displayed:
  - "There was an issue processing your payment. Try again or use a different payment method."
- Payment process is halted
- User remains on checkout page
- No order confirmation is generated

**Test Data**:

- Page objects: HomePage, CheckoutPage
- User details: Generated from data generators
- Card details: Invalid test card information
- Error message: Defined in checkoutPage constants

**Postconditions**:

- Browser context is closed
- Page is closed

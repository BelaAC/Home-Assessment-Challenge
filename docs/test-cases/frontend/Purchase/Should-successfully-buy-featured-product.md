# ✅ Test Case: Purchase - Should successfully buy featured product

**ID**: TC-001  
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
   1.3 OrderConfirmationPage object is created

2. Navigate to the home page
   2.1 Home page is opened
   2.2 Home page is visible

3. Purchase featured product
   3.1 Featured product is located
   3.2 Buy button is clicked
   3.3 Product details are captured
   3.4 Checkout page is loaded

4. Complete checkout process
   4.1 User details are entered
   4.2 Valid card details are entered
   4.3 Order details are validated
   4.4 Pay button is clicked
   4.5 Order confirmation page is loaded

5. Validate order confirmation
   5.1 Order confirmation page title is correct
   5.2 User details are displayed correctly
   5.3 Order details are displayed correctly
   5.4 Product details are displayed correctly
   5.5 Address information is accurate
   5.6 Download button is visible
   5.7 Price details are correct

**Expected Results**:

- Home page loads successfully
- Featured product is accessible
- Checkout process completes successfully
- All user inputs are accepted
- Payment processing is successful
- Order confirmation page displays:
  - Correct user information
  - Accurate order details
  - Valid product information
  - Proper address details
  - Download functionality
  - Correct pricing
- All page transitions are smooth
- No errors occur during the process

**Test Data**:

- Page objects: HomePage, CheckoutPage, OrderConfirmationPage
- User details: Generated from data generators
- Card details: Valid test card information
- Product details: Captured from featured product
- Order details: Generated during checkout

**Postconditions**:

- Browser context is closed
- Page is closed

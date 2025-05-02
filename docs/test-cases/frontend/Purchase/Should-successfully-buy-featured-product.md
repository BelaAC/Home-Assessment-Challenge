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

   1. HomePage object is created
   2. CheckoutPage object is created
   3. OrderConfirmationPage object is created

2. Navigate to the home page

   1. Home page is opened
   2. Home page is visible

3. Purchase featured product

   1. Featured product is located
   2. Buy button is clicked
   3. Product details are captured
   4. Checkout page is loaded

4. Complete checkout process

   1. User details are entered
   2. Valid card details are entered
   3. Order details are validated
   4. Pay button is clicked
   5. Order confirmation page is loaded

5. Validate order confirmation

   1. Order confirmation page title is correct
   2. User details are displayed correctly
   3. Order details are displayed correctly
   4. Product details are displayed correctly
   5. Address information is accurate
   6. Download button is visible
   7. Price details are correct

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

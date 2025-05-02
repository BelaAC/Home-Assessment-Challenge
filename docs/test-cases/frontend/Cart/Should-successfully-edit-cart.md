# ✅ Test Case: Cart - Should successfully edit cart

**ID**: TC-004  
**Feature**: Cart  
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
   2. ProductPage object is created
   3. CartPage object is created

2. Navigate to the home page

   1. Home page is opened
   2. Home page is visible

3. Select an in-stock product

   1. In-stock product is identified
   2. Product is selected
   3. Product details page is visible

4. Add product to cart

   1. Add to cart action is performed
   2. Cart popup is visible
   3. Product is added to cart successfully

5. Edit cart contents

   1. Cart page is visible
   2. Cart page title is correct
   3. Product is visible in cart
   4. Product quantity is updated
   5. Product price is recalculated
   6. Product is removed from cart
   7. Cart empty message is visible

**Expected Results**:

- Home page loads successfully
- In-stock product selection works correctly
- Cart addition is completed successfully
- Cart editing functions work as expected:
  - Quantity updates are reflected
  - Price calculations are correct
  - Product removal works
  - Empty cart state is handled
- All page transitions are smooth
- No errors occur during the process

**Test Data**:

- Page objects: HomePage, ProductPage, CartPage
- Product selection: In-stock product from home page
- Cart operations: Quantity update and removal

**Postconditions**:

- Browser context is closed
- Page is closed

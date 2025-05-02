# ✅ Test Case: Cart - Should successfully add product to cart via search

**ID**: TC-003  
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
   1.1 HomePage object is created
   1.2 SearchPage object is created
   1.3 ProductPage object is created

2. Navigate to the home page
   2.1 Home page is opened
   2.2 Home page is visible

3. Search for a product
   3.1 Random search word is generated
   3.2 Search is performed
   3.3 Search results page is visible
   3.4 Search results page title is correct
   3.5 Products are visible in search results

4. Filter search results
   4.1 Filter by availability is selected
   4.2 In stock filter is applied
   4.3 Filtered results are visible
   4.4 In stock products are displayed

5. Select a product
   5.1 First available product is selected
   5.2 Product details page is visible
   5.3 Product details are displayed correctly

6. Add product to cart
   6.1 Add to cart action is performed
   6.2 Cart popup is visible
   6.3 Product is added to cart successfully

**Expected Results**:

- Home page loads successfully
- Search functionality works correctly
- Filtering by availability works as expected
- Product selection is successful
- Cart addition is completed
- All page transitions are smooth
- No errors occur during the process

**Test Data**:

- Search word: Randomly generated from searchWords utility
- Filter type: Availability
- Filter option: In stock
- Page objects: HomePage, SearchPage, ProductPage

**Postconditions**:

- Browser context is closed
- Page is closed

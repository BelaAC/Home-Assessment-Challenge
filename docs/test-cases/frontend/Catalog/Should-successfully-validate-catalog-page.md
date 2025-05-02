# ✅ Test Case: Catalog - Should successfully validate catalog page

**ID**: TC-005  
**Feature**: Catalog  
**Priority**: High  
**Test Type**: UI / E2E  
**Preconditions**:

- User is logged in
- Browser context is created
- New page is opened

**Test Steps**:

1. Initialize page objects
   1.1 HomePage object is created
   1.2 CatalogPage object is created

2. Navigate to the home page
   2.1 Home page is opened
   2.2 Home page is visible

3. Navigate to catalog page
   3.1 Header menu is visible
   3.2 Catalog option is selected from header menu
   3.3 Catalog page is loaded

4. Validate catalog page elements
   4.1 Page title matches expected value
   4.2 Collection title is visible and correct
   4.3 Filter section is visible and functional
   4.4 Sort by dropdown is visible and functional
   4.5 Product grid is visible
   4.6 Product count is displayed correctly

**Expected Results**:

- Home page loads successfully
- Header navigation works correctly
- Catalog page loads completely
- All page elements are visible and properly formatted:
  - Page title is correct
  - Collection title is correct
  - Filter section is accessible
  - Sort functionality is available
  - Product grid displays items
  - Product count is accurate
- All page transitions are smooth
- No errors occur during the process

**Test Data**:

- Page objects: HomePage, CatalogPage
- Header option: Catalog
- Expected page elements:
  - Title: "Collection: Products"
  - Filter label: "Filter:"
  - Sort label: "Sort by:"

**Postconditions**:

- Browser context is closed
- Page is closed

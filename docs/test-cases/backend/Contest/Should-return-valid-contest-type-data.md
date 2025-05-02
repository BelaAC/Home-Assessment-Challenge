# ✅ Test Case: Contest - Should return valid contest type data for a random contest type

**ID**: TC-006  
**Feature**: Contest Type API  
**Priority**: High  
**Test Type**: API  
**Preconditions**:

- API is accessible
- Contest type data is available

**Test Steps**:

1. Get a random contest type

   1. Random contest type is selected

2. Make API request to get contest type data

   1. API request is successful
   2. Response status code is 200

3. Validate basic properties

   1. All required basic properties are present
   2. Property types match expected structure

4. Validate berry flavor structure

   1. Berry flavor object has required properties
   2. Name property is of correct type
   3. URL property is of correct type
   4. URL follows expected format

5. Validate names array structure

   1. Names array exists
   2. Each name entry has required properties
   3. Name property is of correct type
   4. Color property is of correct type
   5. Language object has required properties
   6. Language name property is of correct type
   7. Language URL property is of correct type

**Expected Results**:

- API returns valid contest type data
- All properties match expected structure
- Berry flavor data is correctly formatted
- Names array contains valid entries with proper structure
- All URLs follow the expected format
- All property types match the expected types

**Test Data**:

- Contest type: Randomly selected from available types
- Expected structure: Defined in testData.ts
- API endpoint: /api/v2/contest-type/{id}

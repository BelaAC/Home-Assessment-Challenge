# ✅ Test Case: Moves - Should return valid structure for a known move

**ID**: TC-008  
**Feature**: Moves API  
**Priority**: High  
**Test Type**: API  
**Preconditions**:

- API is accessible
- Move data is available

**Test Steps**:

1. Get a random move
   1.1 Random move is selected

2. Make API request to get move data
   2.1 API request is successful
   2.2 Response status code is 200

3. Validate basic properties
   3.1 All required basic properties are present
   3.2 Property types match expected structure

4. Validate nested properties
   4.1 Each nested object exists
   4.2 Each nested object has required properties
   4.3 Property types match expected structure

5. Validate optional properties
   5.1 Optional properties can be present or null
   5.2 If present, validate their structure
   5.3 If null, ensure it's handled correctly

**Expected Results**:

- API returns valid move data
- All basic properties match expected structure
- All nested properties contain required fields
- Optional properties are handled correctly
- All property types match the expected types
- Data structure is consistent with API documentation

**Test Data**:

- Move: Randomly selected from available moves
- Expected structure: Defined in testData.ts
- API endpoint: /api/v2/move/{id}

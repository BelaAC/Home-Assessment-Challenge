# ✅ Test Case: Pokemon - Should return valid structure for a known Pokémon

**ID**: TC-009  
**Feature**: Pokemon API  
**Priority**: High  
**Test Type**: API  
**Preconditions**:

- API is accessible
- Pokemon data is available

**Test Steps**:

1. Get a random Pokemon
   1.1 Random Pokemon is selected

2. Make API request to get Pokemon data
   2.1 API request is successful
   2.2 Response status code is 200

3. Validate basic properties
   3.1 All required basic properties are present
   3.2 Property types match expected structure

4. Validate types array
   4.1 Types array exists
   4.2 Each type entry has required properties
   4.3 Type object has required nested properties
   4.4 All type properties are of correct type

5. Validate abilities array
   5.1 Abilities array exists
   5.2 Each ability entry has required properties
   5.3 Ability object has required nested properties
   5.4 All ability properties are of correct type

6. Validate moves array
   6.1 Moves array exists
   6.2 Each move entry has required properties
   6.3 Move object has required nested properties
   6.4 All move properties are of correct type

7. Validate sprite URLs
   7.1 All sprite URLs follow expected pattern
   7.2 Optional sprites can be null

**Expected Results**:

- API returns valid Pokemon data
- All basic properties match expected structure
- Types array contains valid entries with proper structure
- Abilities array contains valid entries with proper structure
- Moves array contains valid entries with proper structure
- Sprite URLs follow the expected format
- All property types match the expected types

**Test Data**:

- Pokemon: Randomly selected from available Pokemon
- Expected structure: Defined in testData.ts
- API endpoint: /api/v2/pokemon/{id}

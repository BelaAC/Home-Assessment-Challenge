# ❌ Test Case: Pokemon - Should handle non-existent Pokemon

**ID**: TC-010
**Feature**: Pokemon API  
**Priority**: High  
**Test Type**: API  
**Preconditions**:

- API is accessible

**Test Steps**:

1. Prepare non-existent Pokemon name
   1.1 Invalid Pokemon name is selected

2. Make API request with invalid Pokemon name
   2.1 API request is made
   2.2 Response status code is 404

**Expected Results**:

- API returns 404 status code
- Error is handled gracefully

**Test Data**:

- Pokemon name: "non-existent-pokemon"
- API endpoint: /api/v2/pokemon/{id}

# Home-Assessment-Challenge

This repository contains the QA Automation Engineer Lead - Take Home Challenge, featuring both UI and API test automation using Playwright. Tests are written in TypeScript and run on GitHub Actions for:

- Frontend: https://monkey-bakery.myshopify.com/
- Backend: https://pokeapi.co/docs/v2#pokemon

## Features

- UI Automation Testing
  - E-commerce purchase flows
  - Cart management
  - Catalog navigation
  - Search functionality
- API Testing
  - Pokemon API endpoints
  - Data structure validation
  - Error handling
- Automated CI/CD Pipeline
- Comprehensive Test Reporting
- Cross-browser Testing Support
- Page Object Model implementation
- Type-safe test data generation

## Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- Git
- .env file with the following variables:
  - SHOPIFY_PASSWORD (password for the monkey-bakery)

## Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd home-assessment-challenge
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

4. Create a `.env` file in the root directory with your credentials:

```bash
SHOPIFY_PASSWORD=your_password_here
```

## Running Tests

### Run All Tests

```bash
npm test
```

### Run UI Tests Only

```bash
npm run test:ui
```

or

```bash
npx playwright test --grep @ui
```

### Run API Tests Only

```bash
npm run test:api
```

or

```bash
npx playwright test --grep @api
```

### Run Tests in Debug Mode

```bash
npm run test:debug
```

### Run Tests in Headed Mode

```bash
npm run test:headed
```

or

```bash
npx playwright test --headed
```

### View Test Reports

```bash
npm run report
```

## Project Structure

```
├── tests/
│   ├── frontend/              # UI test specifications
│   │   ├── specs/            # Test scenarios
│   │   ├── src/
│   │   │   ├── pages/        # Page Object Models
│   │   │   ├── types/        # TypeScript type definitions
│   │   │   └── utils/        # Test utilities
│   │   └── auth.setup.ts     # Authentication setup
│   ├── backend/              # API test specifications
│   │   ├── specs/            # API test scenarios
│   │   └── src/
│   │       └── utils/        # API test utilities
│   └── utils/                # Shared test utilities
├── docs/
│   └── test-cases/           # Test case documentation
│       ├── frontend/         # UI test cases
│       └── backend/          # API test cases
├── .github/
│   └── workflows/            # CI/CD configuration
├── playwright.config.ts      # Playwright configuration
└── package.json             # Project dependencies and scripts
```

## Test Cases

### Frontend Tests

- TC-001: Should successfully buy featured product
- TC-002: Should unsuccessfully buy product
- TC-003: Should successfully add product to cart via search
- TC-004: Should successfully edit cart
- TC-005: Should successfully validate catalog page

### Backend Tests

- TC-006: Should return valid contest type data
- TC-007: Should return valid location data
- TC-008: Should return valid move data
- TC-009: Should return valid Pokemon data

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration. The workflow:

- Runs on push to main and pull requests
- Executes both UI and API tests
- Generates and uploads test reports
- Stores test results as artifacts
- Deploys test reports to GitHub Pages

## Test Reports

Test reports are generated in multiple formats:

- HTML reports (interactive)
- JUnit XML reports
- Console output

Reports are available:

- Locally after test execution
- As GitHub Actions artifacts
- Through the `npm run report` command

## Notes

Hope you guys like it, Bela! :)

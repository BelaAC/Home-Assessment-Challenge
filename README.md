# Home-Assessment-Challenge

This repository contains the QA Automation Engineer Lead - Take Home Challenge, featuring both UI and API test automation using Playwright. Tests are written in TypeScript and run on GitHub Actions for:

- Frontend: https://monkey-bakery.myshopify.com/
- Backend: https://pokeapi.co/docs/v2#pokemon

## Features

- UI Automation Testing
- API Testing
- Automated CI/CD Pipeline
- Comprehensive Test Reporting
- Cross-browser Testing Support

## Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- Git

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
│   ├── frontend/         # UI test specifications
│   ├── backend/          # API test specifications
│   └── utils/            # Shared test utilities
├── .github/
│   └── workflows/        # CI/CD configuration
├── playwright.config.ts  # Playwright configuration
└── package.json         # Project dependencies and scripts
```

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration. The workflow:

- Runs on push to main and pull requests
- Executes both UI and API tests
- Generates and uploads test reports
- Stores test results as artifacts

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

Hope you guys like it! :)

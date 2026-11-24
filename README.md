# Playwright QA Automation Assignment

## Overview

This project automates key user journeys of the Swag Labs web application using Playwright and TypeScript. The framework follows a structured approach to validate authentication, product management, cart operations, checkout functionality, price calculations, and logout functionality.

The project also includes test documentation, bug reports, test plan, AI usage notes, and CI/CD integration using GitHub Actions.

---

## Objective

To validate the core functionality of the Swag Labs application through automated end-to-end testing and ensure critical business workflows function as expected across application releases.

---

## Technology Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- VS Code

---

## Project Structure

```text
Demo
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── documents
│   ├── Bug Reports
│   ├── AI notes
│   └── Test Plan.xlsx
│
├── testData
│   └── Data.json
│
├── tests
│   ├── LoginTest.spec.ts
│   ├── HomePageTest.spec.ts
│   ├── AddToCartTest.spec.ts
│   ├── RemoveItemFromCartTest.spec.ts
│   ├── PriceSortingLowToHighTest.spec.ts
│   ├── PriceSortingHighToLowTest.spec.ts
│   ├── CheckoutTest.spec.ts
│   ├── TotalPriceCheckTest.spec.ts
│   └── LogoutTest.spec.ts
│
├── utils
│   └── Reusable.ts
│
├── playwright-report
├── test-results
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Application Under Test

**Swag Labs**

URL:

```text
https://www.saucedemo.com/
```

---

## Test Coverage

### Functional Scenarios

| Test Case ID | Scenario |
|-------------|-----------|
| TC-01 | Verify user can login successfully |
| TC-02 | Verify inventory page loads correctly |
| TC-03 | Verify user can add item to cart |
| TC-04 | Verify user can remove item from cart |
| TC-05 | Verify products can be sorted Low to High |
| TC-06 | Verify products can be sorted High to Low |
| TC-07 | Verify user can proceed to checkout |
| TC-08 | Verify total price calculation |
| TC-09 | Verify successful order placement |
| TC-10 | Verify user can logout successfully |

---

## Framework Features

- Playwright Test Runner
- TypeScript Support
- Data-Driven Testing
- Reusable Helper Methods
- Assertions using Playwright Expect
- HTML Test Reports
- GitHub Actions CI/CD Integration

---

## Test Data

Test data is maintained in:

```text
testData/Data.json
```

Sample Data:

```json
{
  "username": "standard_user",
  "password": "secret_sauce"
}
```

---

## Prerequisites

Before running the tests, ensure the following are installed:

- Node.js (v18 or higher)
- Visual Studio Code
- Git

Verify installation:

```bash
node -v
npm -v
git --version
```

---

## Running Tests Locally

### Clone Repository

```bash
git clone https://github.com/vaishnavit29/playwright-qa-assignment-UI.git
```

### Navigate to Project

```bash
cd playwright-qa-assignment-UI
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

### Execute All Tests

```bash
npx playwright test
```

### Execute Specific Test

```bash
npx playwright test tests/LoginTest.spec.ts
```

### Run Tests in UI Mode

```bash
npx playwright test --ui
```

### Run Tests in Headed Mode

```bash
npx playwright test --headed
```

---

## Reporting

Generate and view the Playwright HTML Report:

```bash
npx playwright show-report
```

Report Location:

```text
playwright-report/index.html
```

---

## CI/CD

GitHub Actions is configured to automatically execute the test suite on every Pull Request.

Workflow file:

```text
.github/workflows/playwright.yml
```

---


### Workflow Steps

1. Checkout Repository
2. Setup Node.js
3. Install Dependencies
4. Install Playwright Browsers
5. Execute Test Suite
6. Publish Test Artifacts

---

## Test Plan Summary

### Scope

The following modules are covered:

- Login
- Product Inventory
- Add to Cart
- Remove from Cart
- Product Sorting
- Checkout
- Total Price Validation
- Logout

### Risks

- Login failures
- Cart operation failures
- Sorting defects
- Incorrect price calculations
- Checkout failures
- Logout and session management issues

### Automation Approach

- Tests are developed using Playwright and TypeScript.
- Reusable methods are implemented for common actions.
- Test data is externalized using JSON.
- Assertions validate page behavior and business rules.
- Execution is integrated with GitHub Actions for continuous testing.

---

## Defect Reporting

The project contains documented bug reports within:

```text
documents/Bug Reports
```

Bug reports include:

- Bug summary
- Reproduction steps
- Expected result
- Actual result
- Severity and priority

---

## AI Usage

AI tools used:

- Microsoft Copilot
- ChatGPT

AI was used to:
- Generate initial test scenarios
- Improve test case documentation
- Assist with Playwright automation structure
- Assist with GitHub Actions configuration

All generated content was manually reviewed and validated before inclusion.

---

## Author


**Vaishnavi Tandle**

QA Engineer

Skills:
- Manual Testing
- API Testing
- Playwright Automation
- TypeScript
- Postman
- GitHub Actions
- CI/CD

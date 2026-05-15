# OrangeHRM - Test Automation with Cypress

E2E (End-to-End) test automation project using Cypress and the Page Object Model (POM) pattern for the OrangeHRM system.

##  Technologies Used

- [Cypress](https://www.cypress.io/) — E2E Testing Framework
- [Node.js](https://nodejs.org/) — Runtime Environment
- [Chance.js](https://chancejs.com/) — Random Data Generator
- Page Object Model (POM) — Test Organization Pattern

##  Project Structure

cypress/
e2e/          → test files
fixtures/     → test data (JSON)
pages/        → Page Objects
support/      → global settings
cypress.config.js

##  Prerequisites

- Node.js installed (version 16 or higher)
- npm installed

##  Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/your-repository.git
```

2. Navigate to the project folder:
```bash
cd folder-name
```

3. Install dependencies:
```bash
npm install
```

##  Running the Tests

Open Cypress visual interface:
```bash
npx cypress open
```

Run tests in headless mode (terminal):
```bash
npx cypress run
```

##  Test Scenarios

- **User Info Updated** — Logs in and updates the user's personal information
- **Login Failed** — Validates error message with invalid credentials

##  Notes

- Test credentials are stored in `cypress/fixtures/user-data.json`
- The system under test is [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com)
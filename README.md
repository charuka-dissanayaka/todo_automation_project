# Playwright Todo App Automation

This project contains automated test scripts for the TodoMVC application using Playwright with TypeScript.

## Project Overview

The automation framework is designed using the Page Object Model (POM) design pattern to improve code readability, reusability, and maintainability.

The test automation covers:

- Adding todo items
- Completing todo items
- Verifying completed tasks
- Validating remaining item count
- Capturing screenshots

Application Under Test:
https://demo.playwright.dev/todomvc/

---

## Technologies Used

- Playwright
- TypeScript
- Node.js

---

## Project Structure

```bash
project-root/
│
├── pages/
│   └── TodoPage.ts
│
├── tests/
│   └── todo.spec.ts
│
├── screenshots/
│
├── package.json
├── playwright.config.ts
└── README.md

# Learning Playwright Fundamentals 2x

Playwright test automation project with cross-browser testing (Chromium) plus Allure and a custom TTA HTML reporter.

## Setup

```bash
npm install
npx playwright install
```

## Run Tests

```bash
npx playwright test
npx playwright test --headed
npx playwright test --ui
```

Run a single test file:

```bash
npx playwright test tests/05_Allure_Reporting/smapletestcase_customreport.spec.ts
```

## Test Suites

Tests are organized by chapter under `tests/`:

| Chapter | Topic | Test Files |
| --- | --- | --- |
| 06 | Multiple Elements | `250_Multi_Element`, `251_Multi_Element_Direct` |
| 07 | Web Tables | `252`–`258` |
| 08 | Select & Custom Dropdown | `259`–`261` |
| 09 | Frames & Iframes | `262`–`264` |
| 10 | Keyboard, Hover, Drag & Drop | `265`–`269` |
| 11 | JS Alerts | `270` |
| 12 | SVG Handling | `271`–`273` |
| 13 | Shadow DOM | `274` |
| 14 | File Upload | `275`, `276` |
| 15 | File Download | `277` |
| 16 | Scroll to Element | `278` |
| 17 | Expect Assertions | `279`–`283` |
| 18 | Test Hooks | `284`–`290` |
| 19 | Data Driven Testing | `291`–`304` (JSON, CSV, YAML, MySQL, XLSX, Faker) |
| 20 | Page Object Model | `305`, `306` |

## Allure Report

Tests write results to `allure-results/` via the `allure-playwright` reporter.

Generate and view the Allure report:

```bash
npm run report:allure
# or
npx allure serve allure-results
```

## Custom TTA Report

A custom HTML reporter lives in `utils/CustomReporter.ts`. Run any test with it to generate a report under `tta-report/`:

```bash
npx playwright test tests/05_Allure_Reporting/smapletestcase_customreport.spec.ts --reporter=line,./utils/CustomReporter.ts
open tta-report/index.html
```

## Project Structure

```
tests/
├── 01_Basics/
├── 02_first_tests/
├── 03_Locators_Commands/
├── 04_Session_Storage/
├── 05_Allure_Reporting/
├── 06_Multiple_Element_/
├── 07_WebTables/
├── 08_Web_Select_Frames_iframe/
├── 09_Frame_Iframe/
├── 10_Keyboard_Hover_Drag_Drop/
├── 11_JS_Alerts/
├── 12_Handle_SVG/
├── 13_Shadow_DOM/
├── 14_FileUpload/
├── 15_File_Download/
├── 16_Scroll_toElement/
├── 17_Expect_Assertions/
├── 18_Test_hooks/
├── 19_Data_Driven_Testing/
├── 20_Page_Object_Model/
├── 21_Fixture/
├── 22_Misc_Concepts/
├── 23_Advance_Framework/
└── Projects/
```

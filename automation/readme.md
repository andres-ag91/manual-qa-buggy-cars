# QA Automation Scripts

This folder contains the Google Apps Script automation developed to support the Manual QA Testing Project for the Buggy Cars Rating web application.

The scripts automate repetitive documentation tasks related to test cases and defect reporting, improving consistency and reducing manual effort.

## Automation Overview

The project includes two main automation scripts:

### 1. Translate Test Cases

**File:** `Translate-Test-Cases.gs`

This script creates a copy of the active Google Sheets spreadsheet and translates the textual content of all sheets from Spanish to English.

The script:

- Creates a duplicate of the original spreadsheet.
- Processes all sheets contained in the spreadsheet.
- Translates text values from Spanish to English.
- Converts test execution statuses:
  - `FALLO` → `FAIL`
  - `OK` → `OK`
  - `PENDIENTE` → `PENDING`
- Preserves cell background and font colors.
- Creates an English version without modifying the original spreadsheet.
- Provides a custom menu to run the translation directly from Google Sheets.

### 2. Bug Report Generator

**File:** `Generate-Bug-Reports.gs`

This script generates structured bug reports from failed test cases stored in Google Sheets.

The script supports both Spanish and English reports.

It:

- Reads the test execution data from the active sheet.
- Identifies failed test cases.
- Generates unique Bug IDs using the `BCR-XX` format.
- Extracts relevant test case information.
- Creates structured Google Docs bug reports.
- Generates reports in Spanish or English.
- Includes test data, reproduction steps, expected results, actual results, environment information and evidence references.
- Provides a custom Google Sheets menu for generating reports.

## Evidence Handling

The test evidence was captured manually using screenshots and inserted directly into the corresponding Google Sheets cells.

The automation generates a reference to the corresponding evidence in the bug report. The actual screenshots are added to the final documentation manually.

This approach keeps the automation focused on test data processing and document generation while allowing the tester to select and organize the relevant visual evidence.

## QA Workflow Integration

The automation supports the documentation workflow used in this project:

**Test Case Design → Test Execution → Failed Test Identification → Bug Report Generation → QA Documentation**

The translation script supports the creation of English test documentation, while the bug report generator automates the creation of standardized defect reports.

## Tools & Technologies

- Google Apps Script
- JavaScript
- Google Sheets
- Google Docs
- Manual Software Testing

## Purpose

The purpose of these scripts is not to replace manual testing. Instead, they automate repetitive documentation activities so that more time can be dedicated to test analysis, execution, defect identification and quality assessment.

This demonstrates the practical use of scripting and automation to improve efficiency within a manual QA workflow.

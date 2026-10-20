# Test Coverage & Execution

## Overview

This section describes the test coverage, test design approach, and execution process used to evaluate the Buggy Cars Rating web application.

The testing activities focused on authentication-related functionality, including user registration, password validation, login behavior, and post-login navigation.

The objective was to assess whether the application behaved consistently with its documented requirements and to identify functional inconsistencies.

## Test Coverage

The project includes the following testing activities:

| Testing Activity | Quantity | Description |
|---|---:|---|
| Functional Test Cases | 26 | Designed to verify application behavior against documented requirements and expected results. |
| Exploratory Tests | 4 | Conducted to investigate application behavior beyond predefined test scenarios. |
| Documented Defects | 4 | Issues recorded during the testing activities. |

## Areas Tested

The main areas covered by the test cases included:

- **User Registration:** Registration form behavior and submission.
- **Password Validation:** Password length and character requirements.
- **Frontend Validation:** Validation indicators and Register button behavior.
- **Backend Validation:** Responses returned when submitting registration data.
- **Login Functionality:** Authentication behavior using user credentials.
- **Post-Login Navigation:** Navigation after a successful login.
- **Validation Consistency:** Comparison of frontend feedback with backend responses.

## Test Design Approach

The test cases were designed based on the available requirements and expected application behavior.

The testing approach included:

- **Requirements-Based Testing:** Comparing actual application behavior against documented requirements.
- **Functional Testing:** Verifying that application features behaved as expected.
- **Boundary Value Analysis:** Examining behavior around relevant password-length boundaries.
- **Exploratory Testing:** Investigating unexpected behavior beyond predefined test scenarios.
- **Expected vs. Actual Results:** Recording differences between expected and observed behavior.

## Test Execution Process

The testing workflow followed these general steps:

1. Review the available requirements and expected application behavior.
2. Identify test scenarios and define test cases.
3. Execute the test cases against the web application.
4. Record the observed results and execution status.
5. Investigate unexpected behavior and document potential defects.
6. Prepare defect reports with relevant details and supporting evidence where available.

## Test Environment

| Component | Details |
|---|---|
| Application | Buggy Cars Rating |
| Application Type | Web Application |
| Browser | Google Chrome |
| Test Approach | Manual Functional Testing and Exploratory Testing |
| Test Documentation | Google Sheets and Google Docs |

## Detailed Test Documentation

The complete test documentation is available in Google Sheets, including the detailed test cases and recorded execution information for this portfolio project.

**[View Test Cases & Execution Results →][(https://docs.google.com/spreadsheets/d/1AjlzuHKm_yWQh6FISY07VS4zaaXM__6_xC0DLGYUVrM/edit?usp=sharing)]

## Key Observations

The testing activities identified inconsistencies involving password validation, frontend and backend behavior, and post-login navigation.

These observations were documented in individual defect reports to support clear communication of the issues and their reproduction.

For further details, see the [Defect Reports](../03-defect-reports/README.md) section.

## Tools Used

- **Google Sheets:** Test case documentation and execution records.
- **Google Docs:** Defect documentation.
- **Google Apps Script:** Supporting documentation and reporting automation.
- **Google Chrome:** Web application testing.

## Project Scope Note

This is a portfolio testing project. The test counts and findings describe the activities documented for this exercise. They do not imply that the application owner has confirmed or fixed the reported issues.

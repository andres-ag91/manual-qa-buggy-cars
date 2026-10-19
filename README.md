# Manual QA Testing – Buggy Cars Rating

![Manual QA](https://img.shields.io/badge/Testing-Manual%20QA-blue)
![Functional Testing](https://img.shields.io/badge/Testing-Functional-green)
![Defects Identified](https://img.shields.io/badge/Defects-4-red)

A practical manual software testing project focused on user registration, password validation, login functionality, and post-login navigation in the Buggy Cars web application.

This portfolio project demonstrates a structured QA workflow, from requirements analysis and test design to test execution, defect reporting, and quality assessment.

## Table of Contents

1. [Project Overview](01-project-overview/README.md)
2. [Test Coverage & Execution](02-test-coverage-execution/README.md)
3. [Defect Reports](03-defect-reports/README.md)
4. [Results & Key Takeaways](04-results-key-takeaways/README.md)

---

## 1. Project Overview

**Objective:** Evaluate the functional behavior of the Buggy Cars web application against the available requirements and acceptance criteria.

**Testing scope:**
- User registration and form validation
- Password requirements and validation feedback
- Login functionality
- Post-login navigation
- Consistency between frontend validation and backend responses

**Testing approach:** Requirements-based functional testing and exploratory testing.

**Test environment:** Web application accessed through Google Chrome.

The project follows a structured QA workflow supported by documented test cases, execution results, defect reports, and supporting evidence.

## 2. Test Coverage & Execution

The project includes **26 functional test cases and 4 exploratory tests** designed to evaluate expected behavior and investigate potential functional inconsistencies.

**Testing techniques:**
- Positive and negative testing
- Boundary value analysis
- Input validation testing
- Exploratory testing
- Expected versus actual result analysis

**Key areas covered:**
- Registration form behavior and validation
- Password length and character requirements
- Frontend validation indicators and backend responses
- Login behavior and post-login navigation

Test execution focused on comparing observed application behavior with documented requirements and acceptance criteria. Identified issues were recorded and linked to the relevant test cases to support traceability.

## 3. Defect Reports

**Four functional defects were documented** across registration, password validation, and login navigation.

| Bug ID | Defect Summary | Priority |
|---|---|---|
| BCR-01 | Registration fails with a password that appears valid under the documented requirements | High |
| BCR-02 | Register button remains enabled for a password below the minimum required length | High |
| BCR-03 | Successful login does not navigate to the expected home page | High |
| BCR-04 | Register button remains enabled when the password lacks an uppercase letter | High |

### Key Observations

- **BCR-01 — Registration failure:** The backend returns a numeric-character requirement even though that requirement is not specified in the documented criteria. The frontend displays a valid indicator.
- **BCR-02 — Password length validation:** The registration button remains enabled for a five-character password, below the documented six-character minimum.
- **BCR-03 — Login navigation:** After a successful login, the application remains on the new-user registration screen instead of navigating to the expected home page.
- **BCR-04 — Uppercase validation:** The registration button remains enabled when the password lacks an uppercase letter, although the backend subsequently rejects the submission.

Each defect was documented with reproduction steps, expected and actual results, and supporting information. Traceability was maintained between the relevant test cases and the corresponding defect reports.

## 4. Results & Key Takeaways

The testing exercise identified functional inconsistencies affecting important authentication-related workflows.

**Main findings:**
- Password validation behavior did not consistently match the documented requirements.
- Frontend validation allowed some inputs that were subsequently rejected by the backend.
- The tested post-login navigation flow did not behave as expected.

**Recommended Next Steps:**
1. Review and clarify password validation requirements.
2. Align frontend validation feedback with the agreed requirements and backend behavior.
3. Investigate and correct the post-login navigation issue.
4. Re-test affected scenarios after fixes and perform regression testing.

**QA Skills Demonstrated:**

Requirements Analysis | Test Case Design | Manual Functional Testing | Exploratory Testing | Boundary Value Analysis | Test Execution | Defect Reporting | Test Traceability | QA Documentation

**Project Conclusion:** This project demonstrates the practical application of a structured manual QA workflow, including test design, execution, defect identification, reproducible reporting, and evidence-based quality assessment.

---

### Project Resources

Supporting documentation will be linked here:

- **Test Cases & Execution Results:** Detailed test cases, expected and actual results, and execution status.
- **Defect Reports:** Full reports for defects BCR-01 through BCR-04.
- **QA Documentation:** Additional project documentation and supporting evidence.

*Links to the supporting documents will be added once the final document structure is confirmed.*

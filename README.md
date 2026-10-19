# Manual QA Testing – Buggy Cars Rating

![Manual QA](https://img.shields.io/badge/Testing-Manual%20QA-blue)
![Functional Testing](https://img.shields.io/badge/Testing-Functional-green)
![Defects Identified](https://img.shields.io/badge/Defects-4-red)

A practical manual software testing project focused on user registration, password validation, login functionality, and post-login navigation in the Buggy Cars Rating web application.

This portfolio project demonstrates a structured QA workflow, from requirements analysis and test design to test execution, defect reporting, and quality assessment.

## Table of Contents

1. [Project Overview](01-project-overview/README.md)
2. [Test Coverage & Execution](02-test-coverage-execution/README.md)
3. [Defect Reports](03-defect-reports/README.md)
4. [Results & Key Takeaways](04-results-key-takeaways/README.md)

---

## Project at a Glance

| Category | Details |
|---|---|
| Project Type | Manual Software Testing |
| Application | Buggy Cars Rating |
| Testing Approach | Requirements-Based Functional Testing and Exploratory Testing |
| Functional Test Cases | 26 |
| Exploratory Tests | 4 |
| Documented Defects | 4 |
| Test Environment | Web application accessed through Google Chrome |
| Documentation Tools | Google Sheets and Google Docs |
| Automation Tools | Google Apps Script, developed with AI assistance |

## Testing Scope

The project focused on evaluating authentication-related workflows and identifying inconsistencies between expected and observed application behavior.

Key areas included:

- User registration and form validation.
- Password length and character requirements.
- Frontend validation indicators and backend responses.
- Login functionality.
- Post-login navigation.

Testing combined predefined functional test cases with exploratory testing to investigate application behavior and document potential defects.

## Defects Identified

Four functional defects were documented during the testing exercise.

| Bug ID | Summary | Priority |
|---|---|---|
| BCR-01 | Registration fails with a password that appears valid under the documented requirements. | High |
| BCR-02 | The Register button remains enabled when the password is below the documented minimum length. | High |
| BCR-03 | Successful login does not navigate to the expected home page. | High |
| BCR-04 | The Register button remains enabled when the password lacks an uppercase letter, although the backend rejects the submission. | High |

The findings highlighted inconsistencies in password validation, differences between frontend and backend behavior, and unexpected post-login navigation.

For detailed observations and defect documentation, see [Defect Reports](03-defect-reports/README.md).

## QA Skills Demonstrated

Requirements Analysis | Test Case Design | Manual Functional Testing | Exploratory Testing | Boundary Value Analysis | Test Execution | Defect Reporting | Test Traceability | QA Documentation

## Additional Resources: QA Report Automation

To complement the manual testing documentation, this project includes automation scripts developed with AI assistance using Google Apps Script. The scripts are designed to reduce repetitive QA documentation tasks and support bilingual reporting.

**The automation scripts support two workflows:**

- **Spreadsheet Translation:** Translates test documentation in Google Sheets from Spanish to English and creates a separate copy of the spreadsheet.
- **Automated Bug Report Generation:** Extracts relevant data from Google Sheets and generates structured bug reports in Google Docs in Spanish or English.

These tools demonstrate the practical application of automation to support documentation workflows, improve consistency, and reduce repetitive manual work.

**[Explore the Report Automation Scripts →](report-automation/README.md)**

## Project Documentation

Explore each section for more information about the testing process and deliverables:

- [Project Overview](01-project-overview/README.md) — Project objectives, scope, and testing approach.
- [Test Coverage & Execution](02-test-coverage-execution/README.md) — Functional test cases, exploratory testing, and execution methodology.
- [Defect Reports](03-defect-reports/README.md) — Summaries and observations for defects BCR-01 through BCR-04.
- [Results & Key Takeaways](04-results-key-takeaways/README.md) — Findings, demonstrated skills, and recommended next steps.
- [Report Automation Scripts](report-automation/README.md) — Documentation for the translation and bug report generation scripts.

---

## Project Conclusion

This project demonstrates the practical application of a structured manual QA workflow, including test design, execution, defect identification, reproducible reporting, and evidence-based quality assessment.

It also illustrates how AI-assisted scripting can support repetitive QA documentation tasks and help maintain test materials in multiple languages.

*This is a portfolio testing project. The documented findings reflect the observations recorded during testing and do not imply that the identified defects have been fixed or independently verified by the application owner.*

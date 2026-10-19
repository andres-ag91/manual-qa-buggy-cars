# Defect Reports

## Overview

This section presents the software defects identified and documented during the Buggy Cars Rating manual testing project.

Each defect report describes an observed discrepancy between expected and actual application behavior. The reports are intended to support reproducibility, investigation, and clear communication of software quality issues.

## Documented Defects

| Defect ID | Summary | Priority |
|---|---|---|
| BCR-01 | Registration rejects a password that appears to meet the documented requirements, despite the interface indicating that the password is valid. | High |
| BCR-02 | The Register button remains enabled when the password contains fewer than the documented minimum of six characters. | High |
| BCR-03 | After a successful login, the application remains on the new-user registration screen instead of navigating to the expected home page. | High |
| BCR-04 | The Register button remains enabled when the password does not contain an uppercase letter, but the backend rejects the registration. | High |

*Priorities reflect the classifications recorded in the project's defect documentation.*

## Defect Reporting Approach

The defects were documented to make the observed behavior understandable and reproducible. The reporting process focuses on:

- A clear defect summary.
- The relevant test scenario and reproduction steps.
- Expected versus actual behavior.
- Supporting observations and evidence where available.
- A priority classification.

## Key Observations

The documented issues highlight inconsistencies between frontend validation, backend responses, and expected navigation behavior.

These findings demonstrate the importance of validating both user-interface feedback and the resulting application behavior during manual testing.

## Tools

Manual Testing | Functional Testing | Defect Reporting | Bug Reproduction | Google Sheets | Google Docs

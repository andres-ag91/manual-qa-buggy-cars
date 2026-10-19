# Defect Reports

## Overview

This section summarizes the functional defects identified during the manual testing of the Buggy Cars Rating web application.

The reports focus on inconsistencies between documented requirements, frontend validation behavior, backend responses, and post-login navigation.

Each defect is identified by a unique ID to support traceability and make the findings easier to review.

## Defect Summary

| Bug ID | Defect Summary | Priority |
|---|---|---|
| BCR-01 | Registration fails with a password that appears valid under the documented requirements. | High |
| BCR-02 | The Register button remains enabled when the password is below the documented minimum length. | High |
| BCR-03 | Successful login does not navigate to the expected home page. | High |
| BCR-04 | The Register button remains enabled when the password lacks an uppercase letter, although the backend rejects the submission. | High |

## Detailed Defect Descriptions

### BCR-01 — Registration Fails with a Password That Appears Valid

**Summary:** Registration fails even though the password appears to satisfy the documented requirements.

**Observed Behavior:** The frontend indicates that the password is valid, but registration fails. The backend response indicates an additional numeric-character requirement that is not included in the documented criteria.

**Expected Behavior:** The application should apply consistent validation rules and provide clear feedback that matches the documented password requirements.

**Area:** User Registration / Password Validation

**Priority:** High

### BCR-02 — Register Button Enabled Below Minimum Password Length

**Summary:** The Register button remains enabled when the password contains fewer characters than the documented minimum.

**Observed Behavior:** The form allows the registration attempt to proceed even though the password is below the documented minimum length of six characters.

**Expected Behavior:** The Register button should remain disabled, or the form should prevent submission, until the password satisfies the documented minimum-length requirement.

**Area:** User Registration / Frontend Validation

**Priority:** High

### BCR-03 — Successful Login Does Not Navigate to the Expected Home Page

**Summary:** The application does not navigate to the expected home page after a successful login.

**Observed Behavior:** After successful authentication, the application remains on the new-user registration screen instead of navigating to the expected home page.

**Expected Behavior:** After successful authentication, the application should navigate to the appropriate home page or expected post-login destination.

**Area:** Login / Navigation

**Priority:** High

### BCR-04 — Register Button Enabled Without an Uppercase Letter

**Summary:** The Register button remains enabled even when the password does not contain an uppercase letter.

**Observed Behavior:** The frontend allows the registration attempt, but the backend rejects the submission because the password does not meet the uppercase-letter requirement.

**Expected Behavior:** The frontend should validate the documented password requirements consistently and prevent submission until the password satisfies them.

**Area:** User Registration / Password Validation

**Priority:** High

## Common Patterns Identified

The documented defects highlight several areas for improvement:

- **Frontend and Backend Consistency:** Validation rules and responses should align across the application.
- **Password Requirement Enforcement:** Password rules should be clearly defined and applied consistently.
- **Form Validation:** Submission controls should reflect whether the entered information satisfies the requirements.
- **Navigation Behavior:** Successful authentication should lead to the expected destination.
- **User Feedback:** Validation messages should accurately explain why an operation succeeds or fails.

## Detailed Defect Documentation

The complete defect reports are available in Google Docs. The document contains the detailed information recorded for each issue, including reproduction steps, expected and actual results, and supporting evidence where available.

**[View Detailed Defect Reports →](PASTE_YOUR_GOOGLE_DOCS_LINK_HERE)**

## Defect Reporting Practices

The defects are documented using unique identifiers and structured descriptions to make the findings easier to understand and reproduce.

The reporting approach emphasizes:

- Clear defect summaries.
- Identification of the affected functionality.
- Expected versus observed behavior.
- Reproducibility and supporting evidence, where available.
- Consistent defect identification and traceability.

## Important Note

The priorities shown above reflect the classifications used in this portfolio project. They have not been independently validated against the application's production impact or confirmed by the application owner.

The documented defects represent observations from testing. This project does not claim that the defects have been fixed or that the application owner has acknowledged them.

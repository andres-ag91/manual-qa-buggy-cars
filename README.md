# Manual QA Testing – Buggy Cars

![Manual QA](https://img.shields.io/badge/Testing-Manual%20QA-blue)
![Testing Type](https://img.shields.io/badge/Testing-Functional-green)
![Defects](https://img.shields.io/badge/Defects-4-red)

A practical manual QA testing project performed on the **Buggy Cars** web application.

The project demonstrates a structured Quality Assurance workflow covering requirements analysis, test strategy, test case design, functional test execution, defect reporting, traceability, and final quality assessment.

---

## 📋 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Requirements Analysis](#2-requirements-analysis)
3. [Test Strategy](#3-test-strategy)
4. [Test Case Design](#4-test-case-design)
5. [Test Execution](#5-test-execution)
6. [Defect Reporting](#6-defect-reporting)
7. [Defect Summary & Results](#7-defect-summary--results)
8. [Test Conclusion & Quality Assessment](#8-test-conclusion--quality-assessment)
9. [Lessons Learned & QA Skills Demonstrated](#9-lessons-learned--qa-skills-demonstrated)

---

# 1. Project Overview

## 1.1 Project Description

This project was created to demonstrate the practical application of manual software testing techniques in a web application environment.

The **Buggy Cars** application was tested with a focus on user registration, password validation, and login functionality.

The testing process followed a structured QA approach, beginning with requirements analysis and continuing through test design, execution, defect identification, reporting, traceability, and final quality assessment.

## 1.2 Testing Objectives

The main objectives of the project were to:

* Analyze the available functional requirements.
* Identify testable conditions and acceptance criteria.
* Design positive, negative, and boundary test cases.
* Execute functional tests manually.
* Identify and document software defects.
* Assign defect priority based on functional impact.
* Maintain traceability between requirements, test cases, executions, and defects.
* Evaluate the overall quality of the tested functionality.

## 1.3 Testing Scope

The primary testing scope included:

* User registration.
* Password validation.
* Registration form validation.
* Login functionality.
* Post-login navigation.
* Frontend validation behavior.
* Backend validation responses.

The project focused primarily on **requirements-based functional testing**.

---

# 2. Requirements Analysis

## 2.1 Approach

The testing process began with an analysis of the available requirements and acceptance criteria.

The objective was to understand the expected behavior of the application before creating the test cases.

The requirements were analyzed to identify:

* Functional behavior.
* Input validation rules.
* Minimum and maximum conditions.
* Expected system responses.
* Positive scenarios.
* Negative scenarios.
* Boundary conditions.

## 2.2 Key Validation Areas

Particular attention was given to password validation because several functional requirements were associated with password input.

The testing considered conditions such as:

* Minimum password length.
* Uppercase character requirements.
* Password validity indicators.
* Register button state.
* Backend validation responses.

The analysis also provided a basis for identifying inconsistencies between the requirements, frontend validation, and backend behavior.

---

# 3. Test Strategy

## 3.1 Testing Approach

The testing strategy was based on a combination of **requirements-based functional testing** and **exploratory testing**.

Requirements-based testing was used to verify whether the application behaved according to the documented acceptance criteria.

Exploratory testing was used to investigate unexpected behavior and identify inconsistencies that could not be fully evaluated through positive scenarios alone.

## 3.2 Test Techniques

The following testing techniques were applied:

### Positive Testing

Valid inputs were used to verify that the application performed the expected action successfully.

### Negative Testing

Invalid inputs were used to verify that the application prevented incorrect actions and provided appropriate validation feedback.

### Boundary Value Testing

Values close to the defined limits were tested to identify validation problems around minimum requirements.

### Validation Testing

Frontend validation indicators and button states were compared with the expected requirements.

### Error Message Analysis

Backend and frontend error messages were reviewed to identify inconsistencies between displayed requirements and actual application behavior.

## 3.3 Test Environment

Testing was performed manually using a web browser against the Buggy Cars application.

The focus was placed on the functional behavior visible to an end user, including form interaction, validation, registration, login, and navigation.

---

# 4. Test Case Design

## 4.1 Test Case Design Approach

Test cases were created based on the requirements and acceptance criteria identified during the analysis phase.

The test cases were designed to cover:

* Valid inputs.
* Invalid inputs.
* Boundary conditions.
* Password validation.
* Registration behavior.
* Login behavior.
* Navigation behavior.

Each test case included:

* Test Case ID.
* Test description.
* Preconditions.
* Test steps.
* Test data.
* Expected result.
* Actual result.
* Execution status.

## 4.2 Test Coverage

The test cases were designed to provide coverage of the main authentication-related functionality within the defined scope.

Particular attention was given to password validation because this area contained multiple validation rules and ultimately resulted in several identified defects.

---

# 5. Test Execution

## 5.1 Execution Process

The designed test cases were executed manually against the Buggy Cars application.

During execution, the actual behavior of the application was compared with the expected result defined for each test case.

When the actual result differed from the expected result, the test case was marked as failed and the behavior was investigated to determine whether it represented a software defect.

## 5.2 Execution Evidence

Evidence was collected for relevant failed scenarios to support the defect reporting process.

The evidence included screenshots and observations showing the application behavior at the time the defects were identified.

The execution results were documented together with the corresponding test cases and defect reports.

---

# 6. Defect Reporting

## 6.1 Defect Reporting Process

Failed test cases were analyzed to determine whether the observed behavior represented a defect.

Each confirmed defect was documented using a structured Bug Report.

The defect reports included:

* Bug ID.
* Title.
* Description.
* Preconditions.
* Steps to reproduce.
* Expected result.
* Actual result.
* Priority.
* Supporting evidence.

## 6.2 Defect Identification

Four functional defects were identified during the test execution.

The defects were assigned unique IDs using the following format:

**BCR-01 to BCR-04**

All identified defects were classified as **High Priority** because they affect core authentication-related functionality.

---

# 7. Defect Summary & Results

## 7.1 Defect Summary

The following table summarizes the defects identified during functional testing:

| Bug ID | Title                                                                              | Priority | Source     | Status |
| ------ | ---------------------------------------------------------------------------------- | -------- | ---------- | ------ |
| BCR-01 | Registration fails with a valid password                                           | High     | Functional | Open   |
| BCR-02 | Register button is enabled for a password shorter than the minimum required length | High     | Functional | Open   |
| BCR-03 | Login succeeds but the application does not navigate to the expected home page     | High     | Functional | Open   |
| BCR-04 | Register button is enabled when the password does not contain an uppercase letter  | High     | Functional | Open   |

## 7.2 Defect Distribution

All four defects were identified during **requirements-based functional testing**.

The defects were related to:

* User registration validation.
* Password validation and visual feedback.
* Login and post-login navigation.
* Consistency between client-side validation and server-side password requirements.

The test results also revealed inconsistencies between the validation displayed by the user interface and the behavior enforced by the application backend.

For example, in some password validation scenarios, the **Register** button became enabled even though the password did not satisfy the acceptance criteria.

In other cases, the backend rejected the password with a specific policy requirement.

These inconsistencies were documented as part of the corresponding defects.

## 7.3 Representative Defects

### BCR-01 – Registration fails with a valid password

The application rejects the registration and displays the message:

> `InvalidPasswordException: Password must have numeric characters`

However, the available requirements do not specify that the password must contain a numeric character.

Additionally, the password field displays a green indicator, suggesting that the entered password is valid.

This indicates a potential inconsistency between the documented password requirements, frontend validation, and backend validation.

### BCR-02 – Register button is enabled for a password shorter than the minimum required length

When a five-character password is entered, the **Register** button remains enabled even though the acceptance criteria require a minimum password length of six characters.

The password field also displays a green indicator despite not meeting the stated minimum length.

### BCR-03 – Login succeeds but the application does not navigate to the expected home page

The system successfully validates the login credentials, but the initial screen does not change to the expected Buggy Cars home page.

Instead, the application remains on the new-user registration screen, even though the user appears to be successfully logged in.

### BCR-04 – Register button is enabled when the password does not contain an uppercase letter

The **Register** button becomes enabled when a password meets the minimum length but does not contain an uppercase letter.

After clicking **Register**, the backend rejects the registration and displays:

> `Password must have uppercase characters`

This indicates an inconsistency between the frontend validation and the password policy enforced by the application.

## 7.4 Traceability

The defect reporting process maintained traceability between the different stages of testing:

**Requirement → Test Case → Test Execution → Failed Result → Bug Report → Evidence**

The identified defects can be traced back to their corresponding test cases:

| Bug ID | Test Case    |
| ------ | ------------ |
| BCR-01 | Test Case 1  |
| BCR-02 | Test Case 7  |
| BCR-03 | Test Case 10 |
| BCR-04 | Test Case 8  |

This traceability makes it possible to identify the origin of each reported issue and provides a clear relationship between the requirement being tested, the observed behavior, and the documented defect.

## 7.5 Test Results

The functional test execution identified **four failed test cases** among the test cases executed in the documented scope.

The main issues were concentrated around **user registration, password validation, and login navigation**.

The results demonstrated the importance of validating not only the final system response but also the consistency of the application's user interface with the underlying validation rules.

In particular, several defects involved situations where the user interface indicated that an input was valid or allowed the user to continue, while the backend subsequently rejected the same input.

---

# 8. Test Conclusion & Quality Assessment

## 8.1 Overall Test Conclusion

The functional testing performed on the **Buggy Cars** application identified several issues affecting user registration, password validation, and login behavior.

A total of **four defects** were identified and documented during the test execution.

All four defects were classified as **High Priority** because they affect core authentication-related functionality and can prevent users from completing registration or accessing the expected application flow.

The testing results indicate that the application has functional issues that should be addressed before considering the tested functionality fully reliable.

## 8.2 Quality Assessment

Based on the executed test cases and identified defects, the overall quality of the tested functionality can be considered **partially acceptable but requiring corrective action**.

The main concern is not only the presence of individual defects, but also the inconsistency between the validation presented by the frontend and the rules enforced by the backend.

This type of inconsistency can negatively affect the user experience because the user receives conflicting information about what is considered a valid input.

The login flow also requires attention because successful credential validation did not result in the expected navigation behavior.

## 8.3 Release Recommendation

Based on the results obtained within the documented testing scope, the tested authentication functionality should **not be considered fully ready for release without further investigation and correction of the identified High Priority defects**.

The recommended actions are:

1. Review and correct the password validation rules.
2. Ensure that frontend validation matches the requirements and backend rules.
3. Prevent the **Register** button from becoming enabled when the entered password does not meet the required criteria.
4. Investigate the post-login navigation behavior.
5. Re-test all affected scenarios after the defects have been fixed.
6. Perform regression testing on the related registration and login functionality.

After corrective changes are implemented, the affected test cases should be executed again to verify that the reported defects have been resolved and that no related functionality has been negatively affected.

## 8.4 Testing Limitations

The conclusions presented in this portfolio are based on the functionality and scenarios included within the defined testing scope.

The testing focused primarily on **requirements-based functional testing** of user registration, password validation, and login behavior.

Therefore, the results should not be interpreted as a complete assessment of the entire Buggy Cars application.

The following areas were outside the primary scope of this test cycle:

* Performance testing.
* Security testing.
* Accessibility testing.
* Compatibility testing across a broad range of devices and browsers.
* Extensive API or backend testing.
* Long-duration or stress testing.

Additional testing would therefore be required to provide a more comprehensive assessment of the application's overall quality.

## 8.5 Final Assessment

The testing exercise successfully demonstrated the complete QA workflow from **requirement analysis through test execution, defect identification, reporting, evidence collection, and final quality assessment**.

The identified defects provided evidence of functional and validation inconsistencies that could affect the user's ability to register and access the application correctly.

The project also demonstrated the importance of maintaining traceability throughout the testing process:

**Requirement → Test Case → Test Execution → Defect → Bug Report → Evidence → Retest**

Overall, the results provide a practical example of a structured manual QA testing process and demonstrate the ability to identify, document, prioritize, and communicate software defects in a professional manner.

---

# 9. Lessons Learned & QA Skills Demonstrated

## 9.1 Lessons Learned

This testing project provided practical experience applying a structured manual QA process to a real web application.

One of the main lessons learned was the importance of understanding the requirements before designing and executing test cases.

Clearly defined acceptance criteria provided a reference point for determining whether the observed application behavior was correct or represented a defect.

The project also demonstrated that testing should not focus only on whether an action technically succeeds or fails.

The application should also provide consistent feedback to the user and behave according to the defined requirements.

Another important lesson was the value of testing **negative and boundary scenarios**.

Testing invalid passwords, minimum length requirements, and different validation conditions helped identify issues that would not necessarily be discovered through positive test cases alone.

The testing process also highlighted the importance of comparing **frontend behavior with backend responses**.

In several scenarios, the interface indicated that a password was valid while the backend rejected it because it did not satisfy additional password policy requirements.

Finally, the project reinforced the importance of clear defect documentation.

A defect report should provide enough information for another team member to understand the problem, reproduce it, evaluate its impact, and investigate a potential solution.

## 9.2 QA Skills Demonstrated

This project demonstrates practical experience with the following QA activities:

### Requirements Analysis

* Reviewing functional requirements and acceptance criteria.
* Identifying expected application behavior.
* Translating requirements into testable conditions.
* Identifying potential ambiguities and inconsistencies.

### Test Case Design

* Creating structured test cases based on requirements.
* Designing positive and negative test scenarios.
* Testing boundary conditions and validation rules.
* Defining expected results before execution.

### Test Execution

* Executing manual functional tests.
* Recording actual results.
* Identifying failed test cases.
* Comparing actual behavior against expected behavior.

### Defect Reporting

* Identifying and documenting software defects.
* Assigning unique Bug IDs.
* Defining reproduction steps.
* Documenting expected and actual results.
* Assigning defect priority.
* Collecting supporting evidence.

### Defect Analysis

* Investigating inconsistencies between frontend and backend behavior.
* Evaluating the potential impact of defects.
* Identifying relationships between requirements, test cases, and defects.

### Traceability

* Maintaining a relationship between requirements, test cases, executions, and defects.
* Linking failed test cases to their corresponding Bug Reports.
* Maintaining evidence to support reported defects.

### QA Documentation

* Creating a structured test strategy.
* Documenting test cases and results.
* Preparing defect summaries.
* Providing a final quality assessment.
* Communicating testing results in a clear and professional format.

## 9.3 Key Takeaway

The main objective of this project was not simply to find bugs, but to demonstrate a complete and structured **Quality Assurance workflow**.

The project followed the process:

**Requirements Analysis → Test Planning → Test Case Design → Test Execution → Defect Identification → Defect Reporting → Traceability → Quality Assessment**

Through this process, the project demonstrates the ability to approach software testing systematically, identify functional issues, provide clear evidence, and communicate findings in a way that can support development and quality improvement.

This project represents practical application of manual QA fundamentals in a real web application environment and serves as a foundation for continuing to develop skills in functional testing, API testing, test automation, and other areas of software quality assurance.

---

# 📎 Project Resources

The following resources contain the complete supporting documentation and evidence for this project:

### 📊 Test Cases & Test Execution

Complete test case documentation, execution results, and observations.

**[View Test Cases & Execution – Google Sheets](INSERT_LINK_HERE)**

### 🐞 Defect Reports & Evidence

Detailed documentation of the identified defects, including reproduction steps, expected and actual results, priority, and supporting evidence.

**[View Defect Reports – Google Sheets](INSERT_LINK_HERE)**

### 📄 Complete QA Documentation

Full project documentation covering the testing process from requirements analysis through final assessment.

**[View Complete QA Documentation](INSERT_LINK_HERE)**

---

## 🧪 Project Summary

| Area                  | Details                                    |
| --------------------- | ------------------------------------------ |
| Application           | Buggy Cars                                 |
| Testing Type          | Manual Functional Testing                  |
| Testing Approach      | Requirements-Based & Exploratory           |
| Defects Identified    | 4                                          |
| High Priority Defects | 4                                          |
| Primary Areas Tested  | Registration, Password Validation, Login   |
| Test Documentation    | Test Cases, Execution Results, Bug Reports |
| Traceability          | Requirements → Test Cases → Defects        |

# Test Plan

## Introduction

This test plan will guide QA team to test following user stories:

1. **New Device Login** (Registered User)
2. **Upgrade to Premium** (Individual Investor)
3. **Approval Notifications** (SMS)
4. **Departments Approval**
5. **Commercial Registration Verification Via [X]** (Corporate Investor)

### Goal
To confirm each user story meets acceptance criteria (AC), define main risks, check normal and edge cases.

## Test Items

1. **New Device Login**  
   - Check additional security (2FA or device check).

2. **Upgrade to Premium**  
   - Confirm payment process and subscription update.

3. **Approvals Notifications (SMS)**  
   - Verify SMS sending on approvals.

4. **Departments Approval**  
   - Ensure workflow with multiple departments.

5. **CR Verification**  
   - Validate corporate registration using external service.

## Scope

### In-Scope
- Functional tests for each story  
- Integration with external services (SMS, Payment, CR check)

### Out-of-Scope
- Other user stories
- External services

## Test Approach

- **Unit Testing** done by developers  
- **Integration Testing** to verify external connections  
- **System Testing** for end-to-end checks  
- **Regression Testing** to ensure no old features break  
- **UAT** with real users or stakeholders

**Risk-based** approach, focusing first on areas that can cause biggest issues.

## Test Environment

- **Staging server** close to production  
- **Browsers**: Chrome, Safari  
- **Devices**: Desktop and mobile  
- **Test Data**: Sample users (individual, corporate), mock payment info, test CR documents, test phone numbers


## Timeline
To be defined.

## Roles

- **QA Lead**: Manages overall testing plan and schedule  
- **Test Engineers**: Write test cases, run tests, log bugs  
- **Developers**: Fix bugs, run unit tests, help with environment setup  
- **Business Owner**: Gives acceptance criteria, checks final results  


## Entry and Exit Criteria

**Entry**  
- Requirements approved  
- QA environment ready  
- No critical defects blocking

**Exit**  
- All test cases done  
- No critical defects open  
- Stakeholders accept UAT

## Risks

- Integration failure with payment or SMS  
- Security issues in new device login  
- CR verification service downtime

## Deliverables

- **Test Plan** (this document)  
- **Test Cases** with steps and expected results  
- **Defect Reports** with severity and status  
- **Test Summary** with final pass/fail info


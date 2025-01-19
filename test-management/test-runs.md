# Test Runs

List of Test Runs, address edge cases and reduce risks. Each test run focuses on different aspects of the user stories.

---

## **Test Run 1: Basic Functionality**
### **Goal**
Quickly confirm that the main features for each user story work as expected (happy paths).

### **Scope**
- **New Device Login**: Verify flow works successfully.
- **Upgrade to Premium**: Ensure the user can upgrade successfully with valid inputs and payment.
- **Approval Notifications (SMS)**: Confirm that a basic approval triggers the correct SMS.
- **Departments Approval**: Test a department flow with approvals.
- **CR Verification**: Submit a valid commercial registration number and verify it results in a “Verified” status.

### **Outcome**
If basic acceptance tests pass, proceed to the next test run.

---

## **Test Run 2: Negative & Edge Cases**
### **Goal**
Test unusual situations and invalid inputs to validate error handling and system robustness.

### **Scope**
- **New Device Login**: Test incorrect OTPs, expired OTPs, and brute-force attempts.
- **Upgrade to Premium**: Verify system behavior with invalid payment data, declined payments, or payment gateway timeouts.
- **Approval Notifications (SMS)**: Handle invalid phone numbers, SMS gateway downtime, and duplicate notifications.
- **Departments Approval**: Test missing department approvals and rejection scenarios.
- **CR Verification**: Submit expired or incorrectly formatted documents, invalid registration numbers, and simulate external API downtime.

### **Outcome**
Log defects found during testing for quick fixes, especially for issues that block core functionality.

---

## **Test Run 3: Integration Checks**
### **Goal**
Confirm the application integrates correctly with external services.

### **Scope**
- **New Device Login**: Validate integration with SMS/email services for OTP delivery.
- **Upgrade to Premium**: Test payment integration (approval codes, refunds, and retries).
- **Approval Notifications (SMS)**: Verify SMS gateway communication for notifications.
- **CR Verification**: Validate API integration with the external commercial registration verification service.

### **Outcome**
Ensure smooth communication and data exchange between the application and third-party services.

---

## **Test Run 4: Regression**
### **Goal**
Ensure that new fixes and updates do not break existing functionality.

### **Scope**
- Rerun critical tests from all user stories:
  - **New Device Login**
  - **Upgrade to Premium**
  - **Approval Notifications** (SMS, Departments)
  - **CR Verification**
- Revalidate previously reported defects to confirm they are resolved.

### **Outcome**
If no significant regressions are found, go for UAT.

---

## **Test Run 5: User Acceptance Testing (UAT)**
### **Goal**
Real users or stakeholders validate the system against business requirements

### **Scope**
- Execute end-to-end business scenarios for each user story.
- Evaluate user experience, data correctness, and overall functionality.
- Gather feedback from stakeholders on any additional improvements or issues.

### **Outcome**
Stakeholders provide UAT sign-off, indicating readiness for production deployment.

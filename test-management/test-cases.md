# Test Cases for Registered User Login From a New Device

## Test Case 1: Successful Login
**Description**: Registered user can log in successfully from a new device.

- **Preconditions**:
  - User account exists in the system.
  - User has access to the phone number registered with the account.

- **Steps**:
  1. Navigate to the login page.
  2. Click on the "Login" button.
  3. Enter a valid phone number and password.
  4. Click on the "Next" button.
  5. Enter the OTP received via SMS.
  6. Click on the "Login" button.

- **Expected Results**:
  - The system validates the phone number, password, and OTP.
  - User is logged in successfully.
  - A success message is displayed.
  - SMS notification is sent to the user about the new device login.
  - The user is logged out from all other devices.
  - The user is redirected to the home page.


## Test Case 2: Invalid Phone Number
**Description**: Prevents login when an invalid phone number is entered.

- **Steps**:
  1. Navigate to the login page.
  2. Enter an invalid phone number and a valid password.
  3. Click on the "Next" button.

- **Expected Results**:
  - An error message is displayed indicating an invalid phone number.
  - The user is not allowed to proceed to OTP entry.


## Test Case 3: Invalid Password
**Description**: Prevents login when an incorrect password is entered.

- **Steps**:
  1. Navigate to the login page.
  2. Enter a valid phone number and an incorrect password.
  3. Click on the "Next" button.

- **Expected Results**:
  - An error message is displayed indicating incorrect credentials.
  - The user is not allowed to proceed to OTP entry.


## Test Case 4: OTP Validation Failure
**Description**: Prevents login when an incorrect OTP is entered.

- **Steps**:
  1. Navigate to the login page.
  2. Enter a valid phone number and password.
  3. Click on the "Next" button.
  4. Enter an incorrect OTP.
  5. Click on the "Login" button.

- **Expected Results**:
  - An error message is displayed indicating that the OTP is invalid.
  - The user is prompted to re-enter the correct OTP or request a new one.


## Test Case 5: SMS Notification on Successful Login
**Description**: Verify that an SMS notification is sent

- **Steps**:
  1. Successfully log in from a new device (follow Test Case 1).
  
- **Expected Results**:
  - An SMS notification is sent to the registered phone number informing the user of the successful login.


## Test Case 6: Logout from Other Devices
**Description**: Verify that the user is logged out from all other devices after a successful login from a new device.

- **Steps**:
  1. Log in from Device A.
  2. Log in from Device B (new device).
  3. Check the session status on Device A.

- **Expected Results**:
  - The session on Device A is terminated, and the user is logged out.


## Test Case 7 (Edge Case): Login with Blocked Account
**Description**: Verify that the system prevents login for a blocked user account.

- **Steps**:
  1. Attempt to log in with the phone number and password of a blocked account.
  
- **Expected Results**:
  - An error message is displayed indicating that the account is blocked.
  - The user is not allowed to proceed.


## Test Case 8 (Edge Case): No Internet Connection
**Description**: Login attempts when there is no internet connection.

- **Steps**:
  1. Attempt to log in without internet connection.
  
- **Expected Results**:
  - An error message is displayed indicating no internet connectivity.
  - The login attempt is not processed.  


---

# Test Cases for Individual Investor - Upgrade to Premium


## Test Case 1: Successful Upgrade to Premium
**Description**: User can successfully upgrade to a premium account.

- **Preconditions**:
  - The user is a verified individual investor.
  - The user has a regular account.

- **Steps**:
  1. Log in to the system.
  2. Navigate to the "Upgrade to Premium" section.
  3. Click on the **"Upgrade to Premium"** button.
  4. Select one of the qualification options:
     - "Assets worth 3 million SAR."
     - "Experience in the financial sector for at least 3 years."
     - "Finance or investment certification from a recognized organization."
  5. Upload the required documents for the selected qualification.
  6. Submit the documents.

- **Expected Results**:
  - The system validates the uploaded documents.
  - A notification is sent to the compliance department for review.
  - The relationship manager is notified of the request status.
  - The user receives a notification confirming successful document upload.


## Test Case 2: Validation of Missing Qualification Selection
**Description**: User cannot proceed without selecting at least one qualification type.

- **Steps**:
  1. Navigate to the "Upgrade to Premium" section.
  2. Click on the **"Upgrade to Premium"** button.
  3. Attempt to proceed without selecting a qualification type.

- **Expected Results**:
  - An error message is displayed.
  - The user cannot proceed to the document upload step.


## Test Case 3: Validation of Missing Documents
**Description**: User cannot proceed without uploading the required documents.

- **Steps**:
  1. Navigate to the "Upgrade to Premium" section.
  2. Select a qualification type.
  3. Attempt to proceed without uploading documents.

- **Expected Results**:
  - An error message is displayed.
  - The user cannot submit the request.


## Test Case 4: Compliance Review and Approval
**Description**: Compliance department can view, review, and approve the upgrade request.

- **Steps**:
  1. Submit a premium upgrade request with valid documents.
  2. Log in as a compliance department staff member.
  3. Navigate to the pending requests.
  4. Review the submitted documents.
  5. Approve or reject the request.

- **Expected Results**:
  - The compliance department can view the user's request and uploaded documents.
  - When approved, the request status is updated, and the relationship manager and user are notified.


## Test Case 5: Notification to Relationship Manager
**Description**: Relationship manager is notified about the request status.

- **Steps**:
  1. Submit a premium upgrade request with valid documents.
  2. Log in as a compliance department staff member and approve the request.
  3. Verify the relationship manager's notification inbox.

- **Expected Results**:
  - The relationship manager receives a notification about the request status.


## Test Case 6: User Notification on Document Upload
**Description**: User receives a notification upon successful document upload.

- **Steps**:
  1. Submit a premium upgrade request with valid documents.
  
- **Expected Results**:
  - The user receives a notification that documents were uploaded successfully.


## Test Case 7 (Edge Case): Rejection by Compliance Department
**Description**: Verify the process when the compliance department rejects an upgrade request.

- **Steps**:
  1. Submit a premium upgrade request with valid documents.
  2. Log in as a compliance department staff member.
  3. Review the request and reject it.
  4. Verify the notifications sent to the user and relationship manager.

- **Expected Results**:
  - The compliance department can reject the request with a reason.
  - The user and relationship manager are notified of the rejection and the reason.


### Test Case 8 (Edge Case): Document Virus or Malicious Code Detection
**Description**: Checks uploaded documents for viruses or malicious code and prevents submission if any are detected.

- **Steps**:
  1. Navigate to the "Upgrade to Premium" section.
  2. Select a qualification type.
  3. Attempt to upload a document containing a virus or malicious code.
  4. Submit the request.

- **Expected Results**:
  - The system scans the uploaded document for viruses or malicious code.
  - If a threat is detected:
    - The upload is rejected.
    - An error message is displayed.
  - If no threats are detected:
    - The document upload proceeds as expected.

---

# Test Cases for Approval Notifications

## Test Case 1: Approval Notification to Loan Requester
**Description**: Loan requester receives an SMS notification upon final approval.

- **Preconditions**:
  - The loan request has been approved by all relevant departments and the relationship manager.

- **Steps**:
  1. Ensure the loan request is approved at all stages.
  2. Finalize the approval in the system.

- **Expected Results**:
  - The system sends an SMS notification to the loan requester indicating the approval status.
  

## Test Case 2: Rejection Notification During Approval Process
**Description**: Relationship manager is notified of a rejection at any stage during the approval process.

- **Steps**:
  1. Submit a loan request for approval.
  2. Reject the loan request at any intermediate approval stage with a specified reason.
  3. Check the notification sent to the relationship manager.

- **Expected Results**:
  - The system notifies the relationship manager of the rejection.
  - The notification includes the reason for the rejection.


---

# Test Cases for Departments Approval

## Test Case 1: Approving a Loan Request in Review
**Description**: Department staff member can review and approve a loan request in their department.

- **Preconditions**:
  - The loan request is currently under review by the specific department.
  - The staff member has the necessary permissions to approve requests.

- **Steps**:
  1. Log in as a department staff member.
  2. Navigate to the list of loan requests in review.
  3. Open the details of a loan request in review.
  4. Click the **"Approve"** button.

- **Expected Results**:
  - The system marks the request as approved for the specific department.
  - A success message is displayed
  - The approval is logged with the staff member’s details and the timestamp.

## Test Case 2: Viewing Department Approvals
**Description**: Verify that the system displays a section listing all departments that have approved a loan request.

- **Preconditions**:
  - The loan request has been approved by multiple departments.

- **Steps**:
  1. Log in as a system user.
  2. Navigate to the details of a specific loan request.
  3. View the section displaying department approvals.

- **Expected Results**:
  - The section lists all departments that have approved the request.
  - Each entry includes:
    - Department name.
    - Staff member who approved the request.
    - Timestamp of the approval.


## Test Case 2 (Edge Case): Approving a Request Already Rejected
**Description**: Verify that a department staff member cannot approve a loan request that has already been rejected.

- **Steps**:
  1. Reject a loan request in review.
  2. Attempt to approve the rejected request.

- **Expected Results**:
  - The system prevents approval of rejected requests.
  - An error message is displayed.

---


# Test Cases for Corporate Investor - Commercial Registration Verification

## Test Case 1: Valid Commercial Registration Number
**Description**: Verify that the system processes a valid commercial registration number through the third-party service [X].

- **Preconditions**:
  - The system is integrated with [X].
  - A valid commercial registration number is provided.

- **Steps**:
  1. Enter a valid commercial registration number.
  2. Submit the number for verification.
  3. The system sends the registration number to [X].
  4. Wait for the result from [X].

- **Expected Results**:
  - The system receives confirmation from [X] that the number is valid.
  - The user is allowed to proceed to the validation process.


# Test Case 2: Invalid Commercial Registration Number
**Description**: Verify that the system handles an invalid commercial registration number.

- **Steps**:
  1. Enter an invalid commercial registration number.
  2. Submit the number for verification.
  3. The system sends the registration number to [X].
  4. Wait for the result from [X].

- **Expected Results**:
  - The system receives a response from [X] indicating the number is invalid.
  - An error message is displayed.
  - The user is prompted to enter a new commercial registration number.
  - After entering a new number, the system restarts the verification process with [X].


## Test Case 3: Validation of Start Date (Negative)
**Description**: Verify the system's behavior when the company start date is less than two years ago.

- **Preconditions**:
  - The system is integrated with [X].
  - A valid commercial registration number is provided, and the verification process with [X] is successful.

- **Steps**:
  1. Enter a valid commercial registration number.
  2. Submit the number for verification.
  3. The system sends the number to [X] and receives the result, including the start date.

- **Expected Results**:
  - If the start date is less than 2 years ago:
    - The system notifies the user.
  - If the start date is more than 2 years ago:
    - The user is allowed to proceed to the next step.


## Test Case 3 (Edge Case): Duplicate Commercial Registration Number
**Description**: Verify that the system handles duplicate registration numbers already verified in the system.

- **Steps**:
  1. Enter a commercial registration number already verified in the system.
  2. Submit the number for verification.

- **Expected Results**:
  - The system detects the duplicate and displays a message.

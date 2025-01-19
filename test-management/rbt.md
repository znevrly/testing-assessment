# Risk-Based Testing (RBT)

Focus on areas that can cause largerst impact or have higher chance of failure. 
Following user stories are described for possible risks.

##  New Device Login

**Risk**  
- Hackers might exploit new device flow to steal account  
- Device check might fail or block valid users

**Impact**  
- High (security breaches, user trust loss)

**Test Strategy**  
- Test with valid login, invalid login, multiple device attempts  
- Check 2FA, token expiration, token refersh, error messages  
- Perform security checks (brute force, injection attempts, session hijacking)

## Upgrade to Premium

**Risk**  
- Payment isn't succesfull 
- Subscription might not update user status

**Impact**  
- High (financial losses, user dissatisfaction)

**Test Strategy**  
- Test valid and invalid payments  
- Check subscription state changes (pre, post upgrade)  
- Verify email confirmations and correct billing


## Approvals Notifications (SMS)

**Risk**  
- SMS not delivered or sent to wrong user  
- Trigger might not fire in time for approvals

**Impact**  
- Medium (delays in workflow, confusion among stakeholders)

**Test Strategy**  
- Test real phone numbers (where possible)
- Validate message content, ensure correct phone number

## Departments Approval

**Risk**  
- Approval workflow errors may block business process  
- Missing or wrong department approvals can lead to compliance issues

**Impact**  
- Medium to High (business process interruption, possible legal risk)

**Test Strategy**  
- Verify multi-level approvals (Finance, Legal, etc.)  
- Check role-based access for each department  
- Simulate timeouts or missing approvals  
- Ensure audit log captures all approval actions

## CR Verification (Corporate)

**Risk**  
- External API downtime leads to blocked corporate accounts  
- Invalid CR doc accepted or valid doc rejected

**Impact**  
- High (regulatory compliance risk, business trust issues)

**Test Strategy**  
- Test with fake or expired CR docs  
- Check system behavior when external API is down or slow  
- Verify success and failure responses from verification service  

# Security Report for Flask App

This report lists security issues and suggested fixes. Each issue has **Risk Score**:

- **Low (1–3)**: Minor issue.  
- **Medium (4–6)**: Some impact or hard to exploit.  
- **High (7–9)**: Big impact or easy to exploit.  
- **Critical (10)**: Severe issue.  

## Issues 

### Passwords Stored in Plaintext
- **Location**: Password storage and comparison logic.
- **Risk**: **10 (Critical)**  
  Passwords are stored and compared as plaintext, exposing user credentials.
- **Fix**: Use hashed passwords (bcrypt or Argon2) with salt. Never store readable passwords.


### SQL Injection
- **Location**: [task.py#L77](https://github.com/Galileo0/Soar_Test/blob/main/task.py#L77)
- **Risk**: **10 (Critical)**  
  SQL queries use unsanitized input, allowing attackers to inject malicious queries.
- **Fix**: Use parameterized queries.

### Command Injection
- **Location**: [task.py#L155](https://github.com/Galileo0/Soar_Test/blob/main/task.py#L155)
- **Risk**: **10 (Critical)**  
  Unsanitized input is used in shell commands, allowing system compromise.
- **Fix**: Sanitize inputs and avoid direct command execution.

### Token Decoding Without Verification
- **Location**: JWT decoding logic.
- **Risk**: **10 (Critical)**  
  Tokens are decoded without checking the signature, allowing tampered tokens.
- **Fix**: Eenable signature verification otherwise it bypass JWT security.

### Hardcoded JWT Secret Key
- **Location**: Hardcoded in the source file and pushed to the repository.
- **Risk**: **10 (Critical)**  
  Secret key is hardcoded in the code and exposed in the repository.
- **Fix**: Store the key in an environment file or secure secret manager. Never commit it to Git.

### Fetching Any URL
- **Location**: [task.py#L161](https://github.com/Galileo0/Soar_Test/blob/main/task.py#L161)
- **Risk**: **8 (High)**  
  User input determines the URL to fetch, leading to SSRF attacks.
- **Fix**: Allow only trusted URLs/domains (whitelist).

### Unsanitized User Input
- **Location**: [task.py#L74](https://github.com/Galileo0/Soar_Test/blob/main/task.py#L74)
- **Risk**: **7 (High)**  
  User input is processed directly without validation, allowing attacks.
- **Fix**: Validate and sanitize all inputs before use.

### Direct Role Checks in Code
- **Location**: Permissions checked directly in endpoint logic.
- **Risk**: **7 (High)**  
  Permissions are checked directly in endpoints, making access control inconsistent.
- **Fix**: Use role-based access control (RBAC) with middleware or decorators.

### Sensitive Data in Logs
- **Location**:  
  - [task.py#L24](https://github.com/Galileo0/Soar_Test/blob/main/task.py#L24)  
  - [task.py#L31](https://github.com/Galileo0/Soar_Test/blob/main/task.py#L31)  
- **Risk**: **6 (Medium)**  
  JWT data is printed in logs. This can expose sensitive information.
- **Fix**: Only log useful messages. Avoid debug info in production.


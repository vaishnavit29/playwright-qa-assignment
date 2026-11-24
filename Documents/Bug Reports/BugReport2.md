Bug Report 2: Login Button Clickable with Empty Username and Password

Severity: Low
 Reason: Allows users to submit an invalid login request, resulting in unnecessary validation attempts.

Steps to Reproduce:
Open the login page.
Leave the Username field empty.
Leave the Password field empty.
Click the Login button.

Expected Result:
 The Login button should remain disabled until both Username and Password fields contain values.

Actual Result:
 The Login button is clickable even when both fields are empty.
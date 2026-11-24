# Bug Report 2: Login Button Clickable with Empty Username and Password

## Severity
**Medium**

### Reason
Allows users to submit an invalid login request, resulting in unnecessary validation attempts.

---

## Preconditions
- User has navigated to the Swag Labs Login page.

---

## Steps to Reproduce

1. Open the Login page.
2. Leave the **Username** field empty.
3. Leave the **Password** field empty.
4. Click the **Login** button.

---

## Expected Result

The **Login** button should remain disabled until both Username and Password fields contain valid values.

---

## Actual Result

The **Login** button is clickable even when both Username and Password fields are empty, allowing the user to submit the login form.

---

## Impact

The application allows invalid login attempts that could be prevented through basic client-side validation, resulting in unnecessary server requests and a less intuitive user experience.

---

## Status

Open
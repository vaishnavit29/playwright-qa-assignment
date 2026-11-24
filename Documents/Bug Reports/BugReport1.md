Bug Report 1: Checkout Enabled with Empty Cart

Severity: Medium
 Reason: Users can proceed with the checkout process without selecting any products, resulting in an invalid purchase flow.

Steps to Reproduce:

Login with valid credentials.
Navigate to the Cart page without adding any items.
Observe the Checkout button.
Click Checkout.

Expected Result:
 The Checkout button should be disabled, hidden, or display a validation message when the cart is empty.

Actual Result:
 The Checkout button is enabled and allows the user to proceed to the checkout page with an empty cart.
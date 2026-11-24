# Bug Report 1: Checkout Enabled with Empty Cart

## Severity
**Medium**

### Reason
Users can proceed with the checkout process without selecting any products, resulting in an invalid purchase flow.

---

## Preconditions
- User is logged in with valid credentials.
- No products have been added to the cart.

---

## Steps to Reproduce

1. Login with valid credentials.
2. Navigate to the Cart page without adding any items.
3. Observe the **Checkout** button.
4. Click **Checkout**.

---

## Expected Result

The **Checkout** button should be disabled, hidden, or display a validation message when the cart is empty.

---

## Actual Result

The **Checkout** button is enabled and allows the user to proceed to the checkout page with an empty cart.

---


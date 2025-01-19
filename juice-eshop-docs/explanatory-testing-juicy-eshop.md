# Explanatory Testing Report for Juice Eshop (Basic flows)

Note: This report does not include security issues  (and related issues).

## Basket Count Resets on Page Refresh
### Steps:
1. Add at least 1 to the basket.
2. Refresh the page.
3. Observe that the basket count is reset to 0.
4. Add a new item to the basket.
5. Observe that the basket count is recalculated correctly.

## Total Price Decimal Places
### Steps:
1. Add the following items to the basket:
   - Apple Pomace (with a price of 2% discount applied).
   - DSOMM & Juice Shop User Day Ticket.
2. Navigate to the basket page and review the total price.
3. Observe that the total price does not have fixed decimal places.

## Missing Translations
### Steps:
1. Switch the site language to Czech.
2. Browse through the pages, especially product and error messages.
3. Observe that some texts, like "We are out of stock! Sorry for the inconvenience," remain in English.

## Incorrect Translations
### Steps:
1. Switch the site language to Czech.
2. Review buttons and labels on various pages (e.g., product page, checkout page).
3. Observe grammatical errors or inconsistent use of capital letters in translations.

## Address Entry Allows Invalid Inputs
### Steps:
1. Navigate to the "Add Address" page.
2. Enter invalid data for the following fields:
   - Nonexistent or misspelled country name.
   - Invalid state or city names with typos.
3. Save the address and proceed to checkout.
4. Observe that invalid inputs are accepted, potentially causing delivery issues.

## Mobile Number Validation
### Steps:
1. Navigate to the "Add Address" page.
2. Enter a mobile number in a valid Czech format (e.g., 420608460264).
3. Attempt to save the address.
4. Observe that the system rejects valid mobile number formats.



const { test, expect } = require('@playwright/test');
require('dotenv').config();

/**
 * Handles modals like welcome banner and cookie consent.
 * @param {import('@playwright/test').Page} page - The page instance.
 */
async function handleModals(page) {
  const welcomeMessage = page.locator('text=Welcome to OWASP Juice Shop!');
  if (await welcomeMessage.isVisible()) {
    await page.locator('button[aria-label="Close Welcome Banner"]').click();
  }
  const cookieModal = page.locator('div[role="dialog"][aria-label="cookieconsent"]');
  if (await cookieModal.isVisible()) {
    await page.locator('.cc-btn.cc-dismiss').click();
  }
}

/**
 * Selects the maximum number of products per page.
 * @param {import('@playwright/test').Page} page - The page instance.
 */
async function selectMaxProductsPerPage(page) {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.locator('mat-select[aria-label="Items per page:"]').click();
  await page.waitForSelector('.mat-option');
  const options = await page.$$eval('.mat-option', options => options.map(option => option.textContent.trim()));
  const maxOption = Math.max(...options.map(Number));
  await page.locator(`.mat-option:has-text("${maxOption}")`).click();
  await page.waitForFunction(() => document.querySelectorAll('div.mat-grid-tile-content').length > 0);
}

/**
 * Verifies the product popup and interacts with the review if available.
 * @param {import('@playwright/test').Page} page - The page instance.
 */
async function verifyProductPopup(page) {
  const firstProduct = page.locator('div.mat-grid-tile-content').first();
  await firstProduct.click();
  const productDialog = page.locator('mat-dialog-container[role="dialog"]');
  await expect(productDialog).toBeVisible();
  const productImage = page.locator('mat-dialog-container img.img-thumbnail');
  await expect(productImage).toBeVisible();
  const reviewPane = page.locator('mat-expansion-panel-header');
  const reviewText = await reviewPane.locator('span').nth(1).textContent();
  if (reviewText && !reviewText.includes('(0)')) {
    await reviewPane.click();
    await page.waitForTimeout(4000); // Wait to observe 
  }
  await page.locator('button[mat-dialog-close]').click();
  await expect(productDialog).not.toBeVisible();
}

/**
 * Fills the registration form with the provided details.
 * @param {import('@playwright/test').Page} page - The page instance.
 * @param {Object} userDetails - The user details for registration.
 * @param {string} userDetails.email - The email address.
 * @param {string} userDetails.password - The password.
 * @param {string} userDetails.securityQuestion - The security question text.
 * @param {string} userDetails.securityAnswer - The answer to the security question.
 */
async function fillRegistrationForm(page, userDetails) {
  const { email, password, securityQuestion, securityAnswer } = userDetails;

  await page.locator('input#emailControl').fill(email);
  await page.locator('input#passwordControl').fill(password);
  await page.locator('input#repeatPasswordControl').fill(password);
  await page.locator('mat-select#mat-select-0').click();
  await page.locator(`mat-option:has-text("${securityQuestion}")`).click();
  await page.locator('input#securityAnswerControl').fill(securityAnswer);
  await page.locator('button#registerButton').click();
  const successMessage = page.locator('span.mat-simple-snack-bar-content');
  await expect(successMessage).toHaveText('Registration completed successfully. You can now log in.');
}

/**
 * Logs in with the given credentials.
 * @param {import('@playwright/test').Page} page - The page instance.
 * @param {string} email - The email address.
 * @param {string} password - The password.
 */
async function login(page, email, password) {
  await page.locator('input#email').fill(email);
  await page.locator('input#password').fill(password);
  await page.locator('button#loginButton').click();
}

/**
 * Adds a specified number of products to the cart.
 * @param {import('@playwright/test').Page} page - The page instance.
 * @param {number} numberOfProducts - The number of products to add.
 */
async function addProductsToCart(page, numberOfProducts) {
  for (let i = 0; i < numberOfProducts; i++) {
    const productAddButton = page.locator('mat-grid-tile').nth(i).locator('button[aria-label="Add to Basket"]');
    await productAddButton.click();
    const successPopup = page.locator('span.mat-simple-snack-bar-content', { hasText: 'Placed' });
    await expect(successPopup.first()).toBeVisible();
    await expect(successPopup.first()).toHaveText(/Placed .* into basket\./);
    const cartCounter = page.locator('span.fa-layers-counter');
    await expect(cartCounter).toHaveText((i + 1).toString());
  }
}

/**
 * Adds a new address with the provided details.
 * @param {import('@playwright/test').Page} page - The page instance.
 * @param {Object} addressDetails - The address details.
 * @param {string} addressDetails.country - The country.
 * @param {string} addressDetails.name - The name of the recipient.
 * @param {string} addressDetails.mobileNumber - The mobile number.
 * @param {string} addressDetails.zipCode - The ZIP code.
 * @param {string} addressDetails.address - The address line.
 * @param {string} addressDetails.city - The city.
 * @param {string} addressDetails.state - The state.
 */
async function addNewAddress(page, addressDetails) {
  const { country, name, mobileNumber, zipCode, address, city, state } = addressDetails;

  await page.locator('button[aria-label="Add a new address"]').click();
  await page.waitForSelector('app-address-create');
  await page.fill('#mat-input-7', country);
  await page.fill('#mat-input-8', name);
  await page.fill('#mat-input-9', mobileNumber);
  await page.fill('#mat-input-10', zipCode);
  await page.fill('#address', address);
  await page.fill('#mat-input-12', city);
  await page.fill('#mat-input-13', state);
  await page.locator('#submitButton:not([disabled])').click();
  await page.waitForSelector('app-address-select mat-table');
}

/**
 * Adds a new card with the provided details.
 * @param {import('@playwright/test').Page} page - The page instance.
 * @param {Object} cardDetails - The card details.
 * @param {string} cardDetails.name - The name on the card.
 * @param {string} cardDetails.cardNumber - The card number.
 * @param {string} cardDetails.expiryMonth - The card expiry month.
 * @param {string} cardDetails.expiryYear - The card expiry year.
 */
async function addCard(page, cardDetails) {
  const { name, cardNumber, expiryMonth, expiryYear } = cardDetails;

  await page.locator('mat-expansion-panel-header:has-text("Add new card")').click();
  await page.fill('#mat-input-14', name);
  await page.fill('#mat-input-15', cardNumber);
  await page.selectOption('#mat-input-16', { value: expiryMonth });
  await page.selectOption('#mat-input-17', { value: expiryYear });
  await page.locator('button#submitButton:not([disabled])').click();
  await page.waitForSelector('mat-cell.mat-column-Selection mat-radio-button');
  await page.locator('mat-row:has-text("************5678") mat-radio-button').click();
}

/**
 * Places an order and verifies the confirmation message.
 * @param {import('@playwright/test').Page} page - The page instance.
 */
async function placeOrder(page) {
  await page.locator('button.nextButton').click();
  await page.waitForSelector('#checkoutButton');
  await page.locator('#checkoutButton').click();
  await page.waitForSelector('h1.confirmation');
  const confirmationMessage = await page.locator('h1.confirmation').textContent();
  expect(confirmationMessage.trim()).toBe('Thank you for your purchase!');
}

test.describe('UI Tests', () => {
  test('Verify maximum products per page', async ({ page }) => {
    await page.goto('/');
    await handleModals(page);
    await selectMaxProductsPerPage(page);
    const products = await page.locator('div.mat-grid-tile-content').count();
    expect(products).toBe(37);
  });

  test('Click on first product, verify popup, and interact with review', async ({ page }) => {
    await page.goto('/');
    await handleModals(page);
    await verifyProductPopup(page);
  });

  test('Complete flow', async ({ page }) => {
    await page.goto('/#/register');
    await handleModals(page);

    const userDetails = {
      email: `testuser_${Date.now()}@example.org`,
      password: '123SecureP@ssw0rd',
      securityQuestion: 'Your eldest siblings middle name?',
      securityAnswer: 'Blue'
    };
    await fillRegistrationForm(page, userDetails);

    await login(page, userDetails.email, userDetails.password);

    await addProductsToCart(page, 5);

    await page.locator('button[aria-label="Show the shopping cart"]').click();

    await page.locator('button:has-text("Checkout")').click();

    const addressDetails = {
      country: 'Czech Republic',
      name: 'Zbynek Nevrly',
      mobileNumber: '1234567890',
      zipCode: '12345',
      address: 'Lulec 12345',
      city: 'Lulec',
      state: 'N/A'
    };
    await addNewAddress(page, addressDetails);

    await page.waitForSelector('app-address-select mat-table');
    await page.locator('mat-row:nth-of-type(1) mat-radio-button').click();
    await page.locator('button.btn-next').click();

    await page.waitForSelector('app-delivery-method mat-table');
    await page.locator('mat-row:nth-of-type(1) mat-radio-button').click();

    await page.locator('button.nextButton').click();

    const cardDetails = {
      name: 'Zbynek Nevrly',
      cardNumber: '1234567812345678',
      expiryMonth: '12',
      expiryYear: '2080'
    };
    await addCard(page, cardDetails);

    await placeOrder(page);
  });
});

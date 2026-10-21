import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://next.medusajs.com/us/store');
  await page.getByRole('link', { name: 'Thumbnail Wireless Over-Ear' }).click();
  await page.getByTestId('add-product-button').click();
  await page.getByRole('heading', { name: 'Cart' }).click();

  //cart
  await page.getByTestId('cart-item').getByTestId('product-price').click();
  await page.getByTestId('cart-subtotal').click();
  await page.getByTestId('go-to-cart-button').click();
  await expect(page.getByTestId('cart-container')).toBeVisible();
  await page.getByTestId('product-title').click();
  await page.getByTestId('product-unit-price').click();
  await expect(page.getByTestId('nav-cart-dropdown')).toBeHidden();
  await page.getByTestId('product-price').click();
  await page.getByTestId('cart-subtotal').click();
  await page.getByTestId('cart-total').click();
  await page.getByTestId('product-price').click();
  await page.getByRole('button', { name: 'Go to checkout' }).click();

  //checkout
  await page.getByTestId('shipping-first-name-input').fill('John');
  await page.getByTestId('shipping-last-name-input').fill('Doe');
  await page.getByTestId('shipping-address-input').fill('Boulevard ave 5');
  await page.getByTestId('shipping-postal-code-input').fill('12121');
  await page.getByTestId('shipping-city-input').fill('Chicago');
  await page.getByTestId('shipping-country-select').selectOption('us');
  await page.getByTestId('shipping-province-input').fill('Illnois');
  await page.getByTestId('shipping-email-input').fill('john@test.com');
  await page.getByTestId('shipping-phone-input').fill('01234567');
  await page.getByTestId('submit-address-button').click();
  await expect(page.getByTestId('delivery-options-container')).toBeVisible();
  await page.getByTestId('delivery-option-radio').click();
  await page.getByTestId('submit-delivery-option-button').click();
  await page.getByRole('radio', { name: 'Manual Payment' }).click();
  await page.getByTestId('submit-payment-button').click();
  await page.getByTestId('submit-order-button').click();
  await expect(page.getByTestId('manual-payment-error-message')).toBeVisible();
});
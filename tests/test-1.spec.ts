import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://admin.dev.bisteccare.com/');
  await page.getByRole('heading', { name: 'Sign in with your email' }).click();
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('Rafaelnadal@mailinator.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('1234rewq$RFV');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.locator('div').filter({ hasText: /^Calendar$/ }).click();
  await page.getByText('/ 15').nth(1).click();
  await page.waitForLoadState('networkidle')
  await page.getByRole('button', { name: 'New Appointment' }).click();
  await page.getByLabel('Name *').click({timeout: 10 * 1000});
  await page.getByLabel('Name *').fill('Chandima Unique Ranaweera');
  await page.getByLabel('Name *').press('Tab');
  await page.getByLabel('Phone *').fill('0714411600');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.waitForLoadState('networkidle')
  await page.getByRole('button', { name: 'Book Now' }).click({timeout: 10 * 1000});
  await page.getByRole('button', { name: 'Yes, book without doctor fee' }).click();
});
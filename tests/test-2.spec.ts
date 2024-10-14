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
  await page.getByLabel('Search By Patient ID/ Phone/').click({ timeout: 10 * 1000 });
  await page.getByLabel('Search By Patient ID/ Phone/').fill('Chandima');
  await page.getByRole('option', { name: 'Chandima Ranaweera (Phone:' }).click();
  await page.getByRole('button', { name: 'Book Now' }).click();
  await page.getByRole('button', { name: 'Yes, book without doctor fee' }).click();
  await page.getByText('Your appointment is confirmed').waitFor({state:'visible'});
  await page.screenshot({path:'confirmed.jpg'})
});
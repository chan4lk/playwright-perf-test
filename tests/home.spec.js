import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://chan4lk.github.io/');
  await page.getByRole('link', { name: 'Skills' }).click();
  await page.getByRole('link', { name: 'Open Source' }).click();
  await expect(page.getByText("Open Source Projects")).toBeVisible();
});
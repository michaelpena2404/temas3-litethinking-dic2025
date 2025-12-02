import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('playstation 5 pro');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await expect(page.getByRole('link', { name: 'PlayStation 5 Pro Console', exact: true })).toBeVisible();
  await expect(page.getByLabel('PlayStation 5 Pro Console')).toContainText('PlayStation 5 Pro Console');
  await page.getByRole('link', { name: 'PlayStation 5 Pro Console', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'PlayStation 5 Pro Console' }).locator('#productTitle')).toBeVisible();
  await expect(page.locator('#title')).toContainText('PlayStation 5 Pro Console');
  await page.getByRole('link', { name: 'Visit the PlayStation Store' }).click();
  await expect(page.getByTestId('hero-image').getByTestId('image')).toBeVisible();
});
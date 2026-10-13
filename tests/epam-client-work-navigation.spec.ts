import { test, expect } from '@playwright/test';

test('Navigate to Client Work through the Services menu', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('button').first().click();
  await page.getByRole('link', { name: 'Services', exact: true }).click();
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page).toHaveURL('https://www.epam.com/services/client-work');
  await expect(page.getByRole('heading', { name: 'Client Work', level: 1 })).toBeVisible();
});

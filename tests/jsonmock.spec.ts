import { test, expect } from '@playwright/test';

test('Intercept call & fulfill with json file', async ({ page }) => {
  await page.route('**/**/graphql', async (route) => {
    await route.fulfill({
      status: 200,
      path: 'path/to/the/file.json',
    });
  });
  // Interact with the page

});


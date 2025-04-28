import { test, expect } from '@playwright/test';

test.describe('Visual regression tests', () => {
  test('"avitologist" matches screenshot', async ({ page }) => {
    await page.goto('/avitologist');

    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('avitologist.png', {
      fullPage: true,
      timeout: 10000,
      maxDiffPixelRatio: 0.2
    });
  });
});
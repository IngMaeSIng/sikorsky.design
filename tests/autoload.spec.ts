import { test, expect } from '@playwright/test';

test.describe('Visual regression tests', () => {
  test('"autoload" matches screenshot', async ({ page }) => {
    await page.goto('/autoload');

    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('autoload.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.1
    });
  });
});
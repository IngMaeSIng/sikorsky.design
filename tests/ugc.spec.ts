import { test, expect } from '@playwright/test';

test.describe('Visual regression tests', () => {
  test('"ugc" matches screenshot', async ({ page }) => {
    await page.goto('/ugc');

    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('ugc.png', {
      fullPage: true,
      timeout: 10000,
      maxDiffPixelRatio: 0.2
    });
  });
});
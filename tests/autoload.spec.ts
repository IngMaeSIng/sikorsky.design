import { test, expect } from '@playwright/test';
import { mockImages } from "./mockImages.ts";

test.describe('Visual regression tests', () => {
  test('"autoload" matches screenshot', async ({ page }) => {
    await mockImages(page);
    await page.goto('/autoload');

    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('autoload.png', {
      fullPage: true,
      timeout: 10000,
      maxDiffPixelRatio: 0.2
    });
  });
});
import { test, expect } from '@playwright/test';
import { mockImages } from "./mockImages.ts";

test.describe('Visual regression tests', () => {
  test('homepage matches screenshot', async ({ page }) => {
    await mockImages(page);
    await page.goto('/');

    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.1
    });
  });
});
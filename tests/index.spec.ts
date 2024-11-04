import { test, expect } from '@playwright/test';

test.describe('Visual regression tests', () => {
  test('homepage matches screenshot', async ({ page }) => {
    // Navigate to your local dev server
    await page.goto('http://localhost:4321');

    // Wait for any animations/content to load
    await page.waitForLoadState('networkidle');

    // Take screenshot and compare
    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
      // Adjust threshold if needed
      maxDiffPixelRatio: 0.1
    });
  });
});
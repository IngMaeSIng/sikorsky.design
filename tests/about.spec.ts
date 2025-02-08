import { test, expect } from "@playwright/test";

test.describe("Visual regression tests", () => {
  test('"about" page matches screenshot', async ({ page }) => {
    await page.goto("/about");

    await page.waitForLoadState("networkidle");

    await expect(page).toHaveScreenshot("about.png", {
      fullPage: true,
      maxDiffPixelRatio: 0.1
    });
  });
});

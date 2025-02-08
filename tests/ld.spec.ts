import { test, expect } from "@playwright/test";

test.describe("Visual regression tests", () => {
  test('"ld" page matches screenshot', async ({ page }) => {
    await page.goto("/ld");

    await page.waitForLoadState("networkidle");

    await expect(page).toHaveScreenshot("ld.png", {
      fullPage: true,
      maxDiffPixelRatio: 0.1
    });
  });
});

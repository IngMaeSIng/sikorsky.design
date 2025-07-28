import { test, expect } from "@playwright/test";
import { mockImages } from "./mockImages.ts";

test.describe("Visual regression tests", () => {
  test('"now" page matches screenshot', async ({ page }) => {
    await mockImages(page);
    await page.goto("/now");

    await page.waitForLoadState("networkidle");

    await expect(page).toHaveScreenshot("now.png", {
      fullPage: true,
      maxDiffPixelRatio: 0.1
    });
  });
});

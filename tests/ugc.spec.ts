import { test, expect } from "@playwright/test";
import { mockImages } from "./mockImages.ts";

test.describe("Visual regression tests", () => {
  test('"ugc" matches screenshot', async ({ page }) => {
    await mockImages(page);
    await page.goto("/ugc");

    await page.waitForLoadState("networkidle");

    await expect(page).toHaveScreenshot("ugc.png", {
      fullPage: true,
      timeout: 10000,
      maxDiffPixelRatio: 0.2
    });
  });
});

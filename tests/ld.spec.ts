import { test, expect } from "@playwright/test";
import { mockImages } from "./mockImages.ts";

test.describe("Visual regression tests", () => {
  test('"ld" page matches screenshot', async ({ page }) => {
    await mockImages(page);
    await page.goto("/ld");

    await page.waitForLoadState("networkidle");

    await expect(page).toHaveScreenshot("ld.png", {
      fullPage: true,
      maxDiffPixelRatio: 0.1
    });
  });
});

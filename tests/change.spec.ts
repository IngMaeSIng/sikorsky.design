import { test, expect } from "@playwright/test";
import { mockImages } from "./mockImages.ts";

test.describe("Visual regression tests", () => {
  test('"change" page matches screenshot', async ({ page }) => {
    await mockImages(page);
    await page.goto("/change");

    await page.waitForLoadState("networkidle");

    await expect(page).toHaveScreenshot("change.png", {
      fullPage: true,
      maxDiffPixelRatio: 0.1
    });
  });
});

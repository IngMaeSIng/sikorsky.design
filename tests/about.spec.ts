import { test, expect } from "@playwright/test";
import { mockImages } from "./mockImages.ts";

test.describe("Visual regression tests", () => {
  test('"about" page matches screenshot', async ({ page }) => {
    await mockImages(page);
    await page.goto("/about");

    await page.waitForLoadState("networkidle");

    await expect(page).toHaveScreenshot("about.png", {
      fullPage: true,
      maxDiffPixelRatio: 0.1
    });
  });
});

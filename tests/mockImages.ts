import type { Page, Route } from "@playwright/test";

export async function mockImages(page: Page) {
  await page.route("**/*.{png,jpg,jpeg,webp,svg,gif,ico,avif}", async (route: Route) => {
    await route.fulfill({
      status: 200,
      body: "",
      headers: {
        "Content-Type": "image/png",
      },
    });
  });
}
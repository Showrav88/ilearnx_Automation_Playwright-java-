import { test } from '@playwright/test';
import Search from '../pages/search.js';

test.setTimeout(100000); // ⬅️ 80 seconds for all tests in this file

test.describe("ilearnx site search feature", () => {
  let search;

  test.beforeEach(async ({ page }) => {
    search = new Search(page);
    await page.goto("https://ilearnx.net/index.php", { timeout: 90000 });
  });

  test("Should able to click with Coureses text", async () => {
    await search.clickCouresesIcon();
  });
});

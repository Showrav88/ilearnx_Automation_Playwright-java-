import {test} from '@playwright/test';
import Home from '../pages/home.js';

test.setTimeout(100000); // ⬅️ 80 seconds for all tests in this file 
test.describe("ilearnx site humBurger feature", () => {
  let home; 
    test.beforeEach(async ({page}) => { 
    home = new Home(page);
    await page.goto("https://ilearnx.net/index.php", {timeout: 90000});
  }
    );  
    test("Should able to click with humBurger icon", async () => {
    await home.clickHumBurger();
  });
    test("Should able to click with Home text", async () => {
    await home.clickHumBurger();
    await home.clickHomePage();
  });
    test("Should able to click with Skills text", async () => {
    await home.clickHumBurger();
    await home.clickSkillsPage();
  });
    test("Should able to click with Coureses text", async () => {
    await home.clickHumBurger();
    await home.clickCoursesPage();
  });
    test("Should able to click with Live Coureses text", async () => {
    await home.clickHumBurger();
    await home.clickLiveCouresesPage();
  });
    test("Should able to click with Interships text", async () => {
    await home.clickHumBurger();
    await home.clickIntershipsPage();
  });   
    test("Should able to click with About Us text", async () => {
    await home.clickHumBurger();
    await home.clickAboutUsPage();
  }
    );
});
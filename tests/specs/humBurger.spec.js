import {test,expect} from '@playwright/test';
import Home from '../pages/home.js';
import { url } from 'inspector';

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
    expect(await home.locate.humBurgerClose).toBeVisible();
    console.log("humBurger icon is verified");

    
  });
  test("Should able to click Cross humBurger icon ", async () => {
    await home.clickHumBurger();
    await home.clickCrossHumBurger();
    expect(await home.locate.humBurger).toBeVisible();
    console.log("Cross humBurger icon is verified");
  });
   test("Should able to click with Home text", async ({ page }) => {
  await home.clickHumBurger();
  await home.clickHomePage();
  await page.waitForLoadState('load');
  await expect(page).toHaveURL('https://ilearnx.net/ilearnx/index.php');
  console.log("Home page URL is verified");
});

    test("Should able to click with Skills text", async ({ page }) => {
    await home.clickHumBurger();
    await home.clickSkillsPage();
    await page.waitForLoadState('load');
    await expect(page).toHaveURL('https://ilearnx.net/view/courses.php?ccat=*');
    console.log("Skills page URL is verified");
  });
    test("Should able to click with Coureses text", async ({ page }) => {
    await home.clickHumBurger();
    await home.clickCoursesPage();
     await page.waitForLoadState('load');
    await expect(page).toHaveURL('https://ilearnx.net/view/courses.php');
    console.log("Courses page URL is verified");
    
  });
    test("Should able to click with Live Coureses text", async ({ page }) => {
    await home.clickHumBurger();
    await home.clickLiveCouresesPage();
    await page.waitForLoadState('load');
    await expect(page).toHaveURL('https://ilearnx.net/view/LiveCourses.php');
    console.log("Live Courses page URL is verified");


  });
    test("Should able to click with Interships text", async ({ page }) => {
    await home.clickHumBurger();
    await home.clickIntershipsPage();
    await page.waitForLoadState('load');
    await expect(page).toHaveURL('https://ilearnx.net/view/internship.php');
    console.log("Interships page URL is verified");
  });   
    test("Should able to click with About Us text", async ({ page }) => {
    await home.clickHumBurger();
    await home.clickAboutUsPage();
    await page.waitForLoadState('load');
    await expect(page).toHaveURL('https://ilearnx.net/view/about.php');
    console.log("About Us page URL is verified");


  }
    );
});
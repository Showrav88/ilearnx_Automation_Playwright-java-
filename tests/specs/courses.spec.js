import { test, expect } from '@playwright/test';
import Courses from '../pages/courses.js';
import Home from '../pages/home.js';

test.setTimeout(100000);

test.describe("ilearnx site Courses full flow", () => {
  test("Should navigate and click all course buttons", async ({ page }) => {
    const home = new Home(page);
    const courses = new Courses(page);

    // Go to Courses page directly
    await page.goto("https://ilearnx.net/view/courses.php", { timeout: 90000 });
    await page.waitForSelector("//h2[contains(., 'OUR COURSES')]", { timeout: 20000 });

    // Verify Header
    const isHeaderVisible = await courses.verifyCoursesHeader();
    expect(isHeaderVisible).toBe(true);
    console.log("✅ Courses header is visible");

    // Sequential clicks (add awaits between for smooth flow)
    await courses.clickAllCourses();
    await courses.clickAnimationCourses();
    await courses.clickGameDevelopmentCourses();
    await courses.clickRoboticsCourses();
    await courses.clickWebDevelopmentCourses();
    await courses.clickSoftwareQualityAssuranceCourses();
    await courses.clickSQLCourses();
    await courses.clickDigitalMarketingCourses();
    await courses.clickGraphicsDesigningCourses();
    await courses.clickProfessionalPhotographyCourses();
    await courses.clickProfessionalCinematographyCourses();
    await courses.clickJobPreparationCourses();
    await courses.clickAbroadPreparationCourses();
    await courses.clickSoftwareAndToolCourses();
    await courses.clickOthersCourses();
    await courses.clickProgrammingCourses();
    await courses.clickEnglishMediumALevelCourses();
    await courses.clickEnglishMediumOLevelCourses();
    await courses.clickPersonalSkillsDevelopmentCourses();

    console.log("✅ All course buttons clicked successfully!");
  });
});

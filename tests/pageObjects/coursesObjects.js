export default class coursesObjects {
  constructor(page) {
    this.page = page;
this.coursesHeader = page.locator("//h2[contains(text(),'OUR COURSES')]"); 
this.allCourses = page.locator("//button[contains(translate(normalize-space(text()), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'ALL')]");
this.animationCourses = page.locator("//button[contains(translate(normalize-space(text()), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'ANIMATION')]");
this.gameDevelopmentCourses = page.locator("//button[contains(translate(normalize-space(text()), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'GAME DEVELOPMENT')]");this.roboticsCourses = page.locator("//button[contains(translate(normalize-space(text()), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'ROBOTICS')]");
this.webDevelopmentCourses = page.locator("//button[contains(translate(normalize-space(text()), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'WEB DEVELOPMENT')]");
this.softwareQualityAssuranceCourses = page.locator("//button[contains(translate(normalize-space(text()), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'SOFTWARE QUALITY ASSURANCE')]");
this.sqlCourses = page.locator("//button[contains(translate(normalize-space(text()), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'SQL')]");
this.digitalMarketingCourses = page.locator("//button[contains(translate(normalize-space(text()), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'DIGITAL MARKETING')]");
this.graphicsDesigningCourses = page.locator("//button[contains(translate(normalize-space(text()), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'GRAPHICS DESIGNING')]");
this.professionalPhotographyCourses = page.locator("//button[contains(translate(normalize-space(text()), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'PROFESSIONAL PHOTOGRAPHY')]");
this.professionalCinematographyCourses = page.locator("//button[contains(translate(normalize-space(text()), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'PROFESSIONAL CINEMATOGRAPHY')]");
this.jobPreparationCourses = page.locator("//button[contains(translate(normalize-space(text()), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'JOB PREPARATION')]");
this.abroadPreparationCourses = page.locator("//button[contains(translate(normalize-space(text()), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'ABROAD PREPARATION')]");
this.softwareAndToolCourses = page.locator("//button[contains(translate(normalize-space(text()), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'SOFTWARE AND TOOL')]");
this.othersCourses = page.locator("//button[contains(translate(normalize-space(text()), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'OTHERS')]");
this.programmingCourses = page.locator("//button[contains(translate(normalize-space(text()), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'PROGRAMMING')]");
this.englishMediumALevelCourses = page.locator("//button[contains(translate(normalize-space(text()), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'ENGLISH MEDIUM: A LEVEL')]");
this.englishMediumOLevelCourses = page.locator("//button[contains(translate(normalize-space(text()), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'ENGLISH MEDIUM: O LEVEL')]");
this.personalSkillsDevelopmentCourses = page.locator("//button[contains(translate(normalize-space(text()), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'PERSONAL SKILLS DEVELOPMENT')]");

  }
  }
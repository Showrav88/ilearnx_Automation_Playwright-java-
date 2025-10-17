import coursesObjects from '../pageObjects/coursesObjects.js';
export default class Courses {
  constructor(page) {
    this.page = page;
    this.locate = new coursesObjects(page);
  }
  async verifyCoursesHeader() {
    await this.locate.coursesHeader.waitFor({ state: 'visible' });
    return await this.locate.coursesHeader.isVisible();
  }
  async clickAllCourses() {
    await this.locate.allCourses.waitFor({ state: 'visible' });
    await this.locate.allCourses.click();
  }
  async clickAnimationCourses() {
    await this.locate.animationCourses.waitFor({ state: 'visible' });
    await this.locate.animationCourses.click();
  }
  async clickGameDevelopmentCourses() {
    await this.locate.gameDevelopmentCourses.waitFor({ state: 'visible' });
    await this.locate.gameDevelopmentCourses.click();
  }
  async clickRoboticsCourses() {
    await this.locate.roboticsCourses.waitFor({ state: 'visible' });
    await this.locate.roboticsCourses.click();
  }
  async clickWebDevelopmentCourses() {  
    await this.locate.webDevelopmentCourses.waitFor({ state: 'visible' });
    await this.locate.webDevelopmentCourses.click();
  }
  
  async clickSoftwareQualityAssuranceCourses() {
    await this.locate.softwareQualityAssuranceCourses.waitFor({ state: 'visible' });
    await this.locate.softwareQualityAssuranceCourses.click();
  }
  async clickSQLCourses() {
    await this.locate.sqlCourses.waitFor({ state: 'visible' });
    await this.locate.sqlCourses.click();
  } 
  
 async clickDigitalMarketingCourses() {
    await this.locate.digitalMarketingCourses.waitFor({ state: 'visible' });
    await this.locate.digitalMarketingCourses.click();
  }
   async clickGraphicsDesigningCourses() {
    await this.locate.graphicsDesigningCourses.waitFor({ state: 'visible' });
    await this.locate.graphicsDesigningCourses.click();
  }
    async clickProfessionalPhotographyCourses() { 
    await this.locate.professionalPhotographyCourses.waitFor({ state: 'visible' });
    await this.locate.professionalPhotographyCourses.click();
  }
    async clickProfessionalCinematographyCourses() {
    await this.locate.professionalCinematographyCourses.waitFor({ state: 'visible' });
    await this.locate.professionalCinematographyCourses.click();
  }
    async clickJobPreparationCourses() {
    await this.locate.jobPreparationCourses.waitFor({ state: 'visible' });
    await this.locate.jobPreparationCourses.click();
  }
    async clickAbroadPreparationCourses() {
    await this.locate.abroadPreparationCourses.waitFor({ state: 'visible' });
    await this.locate.abroadPreparationCourses.click();
  }
    async clickSoftwareAndToolCourses() {
    await this.locate.softwareAndToolCourses.waitFor({ state: 'visible' });
    await this.locate.softwareAndToolCourses.click();
  }
    async clickOthersCourses() {
    await this.locate.othersCourses.waitFor({ state: 'visible' });
    await this.locate.othersCourses.click();
  }
    async clickProgrammingCourses() {
    await this.locate.programmingCourses.waitFor({ state: 'visible' });
    await this.locate.programmingCourses.click();
  } 
    async clickEnglishMediumALevelCourses() {
    await this.locate.englishMediumALevelCourses.waitFor({ state: 'visible' });
    await this.locate.englishMediumALevelCourses.click();
  } 
    async clickEnglishMediumOLevelCourses() {
    await this.locate.englishMediumOLevelCourses.waitFor({ state: 'visible' });
    await this.locate.englishMediumOLevelCourses.click();
  } 
    async clickPersonalSkillsDevelopmentCourses() {
    await this.locate.personalSkillsDevelopmentCourses.waitFor({ state: 'visible' });
    await this.locate.personalSkillsDevelopmentCourses.click();
  }


}
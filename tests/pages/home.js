import homeObjects from '../pageObjects/homeObjects.js';
export default class Home {
  constructor(page) {
    this.page = page;
    this.locate = new homeObjects(page);
  }
  async clickHumBurger() {
    await this.locate.humBurger.waitFor({ state: 'visible' });
    await this.locate.humBurger.click();
  }
    async clickHomePage() { 
    await this.locate.homePage.waitFor({ state: 'visible' });
    await this.locate.homePage.click();
  }     
    async clickSkillsPage() {
    await this.locate.skillsPage.waitFor({ state: 'visible' });
    await this.locate.skillsPage.click();
  }
    async clickCoursesPage() {
    await this.locate.coursesPage.waitFor({ state: 'visible' });
    await this.locate.coursesPage.click();
  }
    async clickLiveCouresesPage() {
    await this.locate.liveCouresesPage.waitFor({ state: 'visible' });
    await this.locate.liveCouresesPage.click();
  }     
    async clickIntershipsPage() {
    await this.locate.intershipsPage.waitFor({ state: 'visible' });
    await this.locate.intershipsPage.click();
  }
    async clickAboutUsPage() {
    await this.locate.aboutUsPage.waitFor({ state: 'visible' });
    await this.locate.aboutUsPage.click();
    
  
    }
    async clickCrossHumBurger() {
    await this.locate.humBurgerClose.waitFor({ state: 'visible' });
    await this.locate.humBurgerClose.click();
  }

    
}
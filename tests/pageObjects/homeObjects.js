export default class HomeObjects {
  constructor(page) {
    this.page = page;
     this.humBurger = page.locator("//i[contains(@class, 'fa-bars') and contains(@class, 'white')]");
    this.homePage = page.locator("//a[@href='../ilearnx/index.php' and text()='Home']");
    this.skillsPage = page.locator("//a[normalize-space(text())='Skills']");
    // Select the first nav bar/hum manu then in list "Courses" link
    this.coursesPage = page.locator("//nav[@class='right_menu_togle']//a[@href='./view/courses.php' and normalize-space(text())='Courses']");
    this.liveCouresesPage = page.locator("//nav[@class='right_menu_togle']//a[normalize-space(text())='Live Courses']");
    this.intershipsPage = page.locator("//a[normalize-space(text())='Internships']");
    this.aboutUsPage = page.locator("//a[normalize-space(text())='About Us']");
    this.humBurgerClose = page.locator("//span[@id='nav-close']");
    





  }
}
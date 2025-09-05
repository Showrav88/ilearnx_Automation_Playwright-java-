import searchObjects from "../pageObjects/searchObjects.js";

export default class Search {
  constructor(page) {
    this.page = page;
    this.locate = new searchObjects(page);
  }
  async clickCouresesIcon() {
    await this.locate.coursesIcon. click();
  }
}

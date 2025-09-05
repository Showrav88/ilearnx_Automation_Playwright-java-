export default class SearchObjects {
  constructor(page) {
    this.page = page;
    // this.coursesIcon = page.getByRole('link', { name: 'Courses', exact: true });
    this.coursesIcon = page.locator('#rs-header a[href="./view/courses.php"]');



    // this.coursesIcon = page.getByRole('link', { name: 'Courses' });


  }
}
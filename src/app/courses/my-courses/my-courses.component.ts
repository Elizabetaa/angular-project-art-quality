import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ICourse } from 'src/app/shared/interfaces/ICourse';
import { UserServiceService } from 'src/app/user/user-service.service';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css'],
})
export class MyCoursesComponent {
  courses: ICourse[] | undefined;
  constructor(
    private userService: UserServiceService,
    private http: HttpClient,
    private courseService: CourseServiceService
  ) {
    this.getCoursesByUser();
  }

  getCoursesByUser() {
    this.courseService
      .loadMyCourses(this.userService.user?.email!)
      .subscribe((courses) => (this.courses = courses));
  }
}

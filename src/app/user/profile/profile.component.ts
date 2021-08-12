import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CourseServiceService } from 'src/app/courses/course-service.service';
import { ICourse } from 'src/app/shared/interfaces/ICourse';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
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
  haveCourses(): boolean {
    if (this.courses != undefined) {
      if (this.courses.length == 0) {
        return false;
      }
    }
    return this.courses !== undefined;
  }
  get user(): IUser {
    return this.userService.user!;
  }
}

import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/shared/interfaces/ICourse';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  courses: ICourse[] | undefined;
  show = false;
  constructor(private courseService: CourseServiceService) {
    this.fetchCourses();
  }

  isInThePast(course: ICourse): boolean {
    var now = +new Date();

    var exam = +new Date(course.examDate);

    let isInPast = exam < now;
    return isInPast;
  }

  fetchCourses() {
    this.courseService
      .loadCourses()
      .subscribe((courses) => (this.courses = courses));
  }
}

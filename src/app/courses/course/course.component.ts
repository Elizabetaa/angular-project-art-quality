import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICourse } from 'src/app/shared/interfaces/ICourse';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  course: ICourse | undefined;

  constructor(
    private courseService: CourseServiceService,
    private activatedRoute: ActivatedRoute
  ) {
    this.fetchCourse();
  }
  fetchCourse(): void {
    this.course = undefined;
    const id = this.activatedRoute.snapshot.params.courseId;
    this.courseService
      .loadCourse(id)
      .subscribe((course) => (this.course = course));
  }
 
}

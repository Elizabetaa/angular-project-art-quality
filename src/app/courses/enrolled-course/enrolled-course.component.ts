import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from 'src/app/shared/interfaces/ICourse';
import { UserServiceService } from 'src/app/user/user-service.service';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-enrolled-course',
  templateUrl: './enrolled-course.component.html',
  styleUrls: ['./enrolled-course.component.css']
})
export class EnrolledCourseComponent {
  course: ICourse | undefined;

  constructor(
    private courseService: CourseServiceService,
    private activatedRoute: ActivatedRoute,
    private userService: UserServiceService,
    private http: HttpClient,
    private router: Router,
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
  get isLogged(): boolean {
    return this.userService.isLogged;
  }
 
}

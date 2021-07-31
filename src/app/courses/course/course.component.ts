import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from 'src/app/shared/interfaces/ICourse';
import { UserServiceService } from 'src/app/user/user-service.service';
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
 
  addCourseToUser(id: number):void{
    // this.http.post(`http://localhost:8080/users/addCourse/${id}/${this.userService.user?.email}`);
    console.log(this.userService.user?.email);
    this.http.post(`http://localhost:8080/users/addCourse/${id}`, this.userService.user?.email).subscribe();
    const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/profile';
    this.router.navigate([redirectUrl]);
  }
}

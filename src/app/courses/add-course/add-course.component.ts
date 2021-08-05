import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent  {

  constructor(
    private courseService:CourseServiceService,
    private router: Router,
  ) { }

 
  addCourse(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const { courseName,  weeks,  description,  imageUrl,  examDate} = form.value;
    console.log(form.value)
    this.courseService.addCourse({ courseName,  weeks,  description,  imageUrl,  examDate}).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
 
}

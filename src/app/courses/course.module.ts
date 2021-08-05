import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MyCoursesComponent, AddCourseComponent],
  imports: [CommonModule, CourseRoutingModule, FormsModule],
})
export class CourseModule {}

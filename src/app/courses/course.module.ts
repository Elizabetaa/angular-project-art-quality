import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { EnrolledCourseComponent } from './enrolled-course/enrolled-course.component';

@NgModule({
  declarations: [ AddCourseComponent, EnrolledCourseComponent],
  imports: [CommonModule, CourseRoutingModule, FormsModule],
})
export class CourseModule {}

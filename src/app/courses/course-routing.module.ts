import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';

const routes: Routes = [
  {
    path: 'courses',
    children: [
      {
        path: '',
        component: CoursesComponent
      },
      {
        path: ':courseId',
        component: CourseComponent
      },
    ]
  },
  {
    path: 'myCourse',
    component: MyCoursesComponent,
  },
  {
    path: 'addCourse',
    component: AddCourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}

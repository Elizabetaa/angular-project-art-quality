import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';

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
    path: 'addCourse',
    component: AddCourseComponent,
    canActivate: [AuthActivate],
    data: {
      isAdmin : true,
      authenticationFailureRedirectUrl: '/'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}

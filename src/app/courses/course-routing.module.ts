import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}

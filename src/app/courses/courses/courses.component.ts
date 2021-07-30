import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/shared/interfaces/ICourse';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {
  corses:ICourse[] | undefined;

  constructor(private courseService: CourseServiceService) { 
    this.fetchCourses();
  }
  fetchCourses(){
    this.courseService.loadCourses().subscribe(courses => this.corses = courses);
  }

}

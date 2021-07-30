import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourse } from '../shared/interfaces/ICourse';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private http: HttpClient) { }

  loadCourses(){
    return this.http.get<ICourse[]>(`http://localhost:8080/courses/all`);
  }

  loadCourse(id: number){
    return this.http.get<ICourse>(`http://localhost:8080/courses/${id}`)
  }
  
}

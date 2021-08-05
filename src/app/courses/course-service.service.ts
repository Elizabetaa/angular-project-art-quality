import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourse } from '../shared/interfaces/ICourse';
import { UserServiceService } from '../user/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private http: HttpClient,
    private userService: UserServiceService) { }

  loadCourses(){
    return this.http.get<ICourse[]>(`http://localhost:8080/courses/all`);
  }

  loadCourse(id: number){
    return this.http.get<ICourse>(`http://localhost:8080/courses/${id}`)
  }
  loadMyCourses(email: string){
    return this.http.get<ICourse[]>(`http://localhost:8080/users/getMyCourses/${email}` );
  }
  addCourse(courseData: {  courseName:string,  weeks:number,  description:string,  imageUrl:string,  examDate:Date}) {
    return this.http
      .post(
        `http://localhost:8080/courses/addCourse`,
        JSON.stringify(courseData)
      );
  }

 
}

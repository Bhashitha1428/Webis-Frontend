import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {


  constructor(private http:HttpClient) { }


  getCourses(){
    const course=this.http.get("http://localhost:8080/course/display");
   // console.log(course);
    return course;
  
  }
  addCourse(name,author,duration,content,description){
    return this.http.post('http://localhost:8080/course/store', {
      'name': name,
      'author': author,
      'duration':duration,
      'content':content,
      'description':description
    });
  }
  





}



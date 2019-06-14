import { CourseService } from './../../Servises/course.service';
import { Component, OnInit } from '@angular/core';
  

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
Course:any
  constructor(private _courseService:CourseService) {
    
   }

  ngOnInit() {

    console.log("ng on init")
    this._courseService.getCourses()
    .subscribe(response => {
      this.Course=response;
      console.log(this.Course);
      console.log(this.Course.name);
      console.log(this.Course.duration);
    // this.Course = response["Videos"];
    });
    // console.log(this.videos);
  }

name:String;
author:String;
duration:Number;
content:String;
description:String;

ab(){
 name: this.name;
 author:this.author;
 duration:this.duration;
 content:this.content;
 description:this.description
 this._courseService.addCourse(this.name,this.author,this.duration,this.content,this.description);
console.log(this.name);
console.log(this.author);
console.log(this.duration);
console.log(this.content);
console.log(this.description);
}


}

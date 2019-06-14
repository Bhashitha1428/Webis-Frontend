import { CourseComponent } from './Component/course/course.component';
import { SignComponent } from './Component/sign/sign.component';
import { LoginComponent } from './Component/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignComponent},
  {path:"course",component:CourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

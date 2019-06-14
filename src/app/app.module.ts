import { CourseService } from './Servises/course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { SignComponent } from './Component/sign/sign.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { CourseComponent } from './Component/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignComponent,
    NavBarComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

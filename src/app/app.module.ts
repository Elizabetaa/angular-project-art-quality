import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserRoutingModule } from './user/user-routing.module';
import { FormsModule } from '@angular/forms';
import { CourseComponent } from './courses/course/course.component';
import { CourseModule } from './courses/course.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    CourseComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    HttpClientModule,
    FormsModule,
    CourseModule,
    AppRoutingModule,
    UserRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

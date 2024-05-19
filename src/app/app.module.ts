



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { SoonComponent } from './soon/soon.component';
import { CoursesComponent } from './courses/courses.component';
import { SingelCourseComponent } from './singel-course/singel-course.component';
import { RelatedCoursesComponent } from './shared/related-courses/related-courses.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SoonComponent,
    CoursesComponent,
    SingelCourseComponent,
    RelatedCoursesComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

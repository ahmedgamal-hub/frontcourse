import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SoonComponent } from './soon/soon.component';
import { CoursesComponent } from './courses/courses.component';
import { SingelCourseComponent } from './singel-course/singel-course.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_services/auth.guard';

const routes: Routes = [
   { path: '', component: CoursesComponent ,canActivate:[AuthGuard]  },
   { path: 'soon', component: SoonComponent ,canActivate:[AuthGuard] },
   { path: 'courses', component: CoursesComponent ,canActivate:[AuthGuard] },
   { path: 'course/:name/description/:id', component: SingelCourseComponent ,canActivate:[AuthGuard] },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }

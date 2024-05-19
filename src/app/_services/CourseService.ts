// course.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  //private apiUrl = 'http://localhost:5000'; // Update with your Flask server URL
  private apiUrl = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  recommendCourses(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/recommend?query=${query}`);
  }
}
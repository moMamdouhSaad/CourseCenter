import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import {
  CourseInterface,
  CourseRequestInterface,
  CourseResponseInterface,
} from '../models/CourseInterface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private readonly httpClient: HttpClient) {}

  getAllCourses(): Observable<CourseInterface[]> {
    return this.httpClient
      .get<CourseInterface[]>(environment.apiUrl + '/courses')
      .pipe(map((x) => x.filter((y) => y.id)));
  }

  deleteCourse(id: number): Observable<{}> {
    return this.httpClient.delete<CourseInterface[]>(
      environment.apiUrl + '/courses/' + id
    );
  }

  addCourse(course: CourseRequestInterface): Observable<CourseInterface> {
    return this.httpClient
      .post<CourseResponseInterface>(environment.apiUrl + '/courses/', course)
      .pipe(map((x) => x));
  }

  updateCourse(
    course: CourseInterface,
    id: number
  ): Observable<CourseInterface> {
    return this.httpClient.patch<CourseInterface>(
      environment.apiUrl + '/courses/' + id,
      course
    );
  }
}

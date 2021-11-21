import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CourseInterface } from '../../models/CourseInterface';
import { CourseService } from '../../services/course.service';
import {
  addCourseAction,
  addCourseFailureAction,
  addCourseSuccessAction,
} from '../actions/add-course.actions';

@Injectable()
export class AddCourseEffect {
  addCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCourseAction),
      switchMap(({ request }) => {
        return this.courseService.addCourse(request).pipe(
          map((course: CourseInterface) => {
            return addCourseSuccessAction({ course });
          }),
          catchError(() => {
            return of(addCourseFailureAction());
          })
        );
      })
    )
  );
  constructor(
    private actions$: Actions,
    private readonly courseService: CourseService
  ) {}
}

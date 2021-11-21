import { createAction, props } from '@ngrx/store';
import {
  CourseInterface,
  CourseRequestInterface,
} from '../../models/CourseInterface';
import { CourseActionTypes } from './actionTypes';

export const addCourseAction = createAction(
  CourseActionTypes.ADD_COURSE,
  props<{ request: CourseRequestInterface }>()
);

export const addCourseSuccessAction = createAction(
  CourseActionTypes.ADD_COURSE_SUCCESS,
  props<{ course: CourseInterface }>()
);

export const addCourseFailureAction = createAction(
  CourseActionTypes.ADD_COURSE_FAILURE
);

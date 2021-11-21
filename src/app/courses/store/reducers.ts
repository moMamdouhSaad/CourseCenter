import { Action, createReducer, on } from '@ngrx/store';
import { AddCourseStateInterface } from '../models/CourseInterface';
import { addCourseAction } from './actions/add-course.actions';

const initialState: AddCourseStateInterface = {
  isSubmitting: false,
};

const addCourseReducer = createReducer(
  initialState,
  on(
    addCourseAction,
    (state): AddCourseStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  )
);

export function CourseReducers(state: AddCourseStateInterface, action: Action) {
  return addCourseReducer(state, action);
}

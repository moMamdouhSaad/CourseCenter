import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AddCourseStateInterface } from '../models/CourseInterface';

export const courseFeatureSelector =
  createFeatureSelector<AddCourseStateInterface>('addCourse');

export const isSubmittingSelector = createSelector(
  courseFeatureSelector,
  (state: AddCourseStateInterface) => state.isSubmitting
);

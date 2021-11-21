import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { CourseFormDialogComponent } from './components/course-form-dialog/course-form-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { CourseReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AddCourseEffect } from './store/effects/add-course.effect';

@NgModule({
  declarations: [CoursesComponent, CourseFormDialogComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('addCourse', CourseReducers),
    EffectsModule.forFeature([AddCourseEffect]),
  ],
  providers: [MatDatepickerModule],
})
export class CoursesModule {}

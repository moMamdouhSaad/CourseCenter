import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseFormDialogComponent } from './components/course-form-dialog/course-form-dialog.component';
import {
  CourseInterface,
  CourseRequestInterface,
} from './models/CourseInterface';
import { CourseService } from './services/course.service';
import { addCourseAction } from './store/actions/add-course.actions';
import { isSubmittingSelector } from './store/selectors';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$!: Observable<CourseInterface[]>;
  displayedColumns: string[] = ['id', 'name', 'startDate', 'endDate', 'action'];
  dataSource!: CourseInterface[];
  isSubmitting$!: Observable<boolean>;
  constructor(
    private store: Store,
    private courseService: CourseService,
    public dialog: MatDialog
  ) {
    this.getAllCourses();
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  getAllCourses(): void {
    this.courseService.getAllCourses().subscribe((data) => {
      this.dataSource = data;
    });
  }
  deleteCourseById(id: number) {
    this.courseService
      .deleteCourse(id)
      .subscribe((data) => this.getAllCourses());
  }

  addCourse() {
    const dialogRef = this.dialog.open(CourseFormDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.event == 'submit') {
        console.log(result.data);
        const posted: CourseRequestInterface = {
          createdDate: '',
          endDate: '',
          id: 555,
          name: 'new name',
          startDate: '',
        };
        this.store.dispatch(addCourseAction({ request: posted }));
      }
      this.getAllCourses();
    });
  }

  updateCourse(course: CourseInterface) {
    const dialogRef = this.dialog.open(CourseFormDialogComponent, {
      data: course,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllCourses();
    });
  }
}

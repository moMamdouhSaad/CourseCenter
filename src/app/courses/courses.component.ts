import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseFormDialogComponent } from './components/course-form-dialog/course-form-dialog.component';
import { CourseInterface } from './models/CourseInterface';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
courses$!:Observable<CourseInterface[]>;
displayedColumns: string[] = ['id', 'name', 'startDate', 'endDate','action'];
dataSource!:CourseInterface[];
  constructor(private courseService:CourseService,public dialog: MatDialog) { 

    this.getAllCourses()

  }

  ngOnInit(): void {
  }


  getAllCourses():void{
    this.courseService.getAllCourses().subscribe(data=>{
      this.dataSource = data;
    })
  }
  deleteCourseById(id:number){
    this.courseService.deleteCourse(id).subscribe(data=>this.getAllCourses())
  }

  addCourse(){
    const dialogRef = this.dialog.open(CourseFormDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
    this.getAllCourses()
    });
    
  }

  updateCourse(course:CourseInterface){
    const dialogRef = this.dialog.open(CourseFormDialogComponent,{
      data:course,

    });

    dialogRef.afterClosed().subscribe(result => {
    this.getAllCourses()
    });
    
  }

}

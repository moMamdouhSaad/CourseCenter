import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { StudentFormDialogComponent } from './components/student-form-dialog/student-form-dialog.component';
import { StudentInterface } from './models/StudentInterface';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students$!:Observable<StudentInterface[]>;
  displayedColumns: string[] = ['id', 'name','course', 'grade','action'];
  dataSource!:StudentInterface[];
  constructor(private studentService:StudentService,public dialog: MatDialog) { 

    this.getAllStudents()

  }

  ngOnInit(): void {
  }


  getAllStudents():void{
    this.studentService.getAllStudents().subscribe(data=>{
      console.log(data)
      this.dataSource = data;
    })
  }
  deleteStudentById(id:number){
    this.studentService.deleteStudent(id).subscribe(data=>this.getAllStudents())
  }

  addStudent(){
    const dialogRef = this.dialog.open(StudentFormDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
    this.getAllStudents()
    });
    
  }

  updateStudent(student:StudentInterface){
    const dialogRef = this.dialog.open(StudentFormDialogComponent,{
      data:student,

    });

    dialogRef.afterClosed().subscribe(result => {
    this.getAllStudents()
    });
    
  }

}

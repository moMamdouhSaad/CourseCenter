import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ConfirmationMsgDialogComponent } from './components/confirmation-msg-dialog/confirmation-msg-dialog.component';
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
  dataSource = new MatTableDataSource<any>();

  constructor(private studentService:StudentService,public dialog: MatDialog) { 

    this.getAllStudents()

  }

  ngOnInit(): void {
  }


  getAllStudents():void{
    this.studentService.getAllStudents().subscribe(data=>{
      this.dataSource.data = data;
    })
  }
  deleteStudentById(id:number){
    this.studentService.deleteStudent(id).subscribe(data=>this.getAllStudents())
  }

  deleteConfirmationDialog(id:number) {
    const dialogRef = this.dialog.open(ConfirmationMsgDialogComponent,{
      
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.deleteStudentById(id)
       
      }
    });
  }
  addStudent(){
    const dialogRef = this.dialog.open(StudentFormDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
    this.getAllStudents()
    });
    
  }

  sortByCourse(filterName:any){
    console.log(filterName)
    if(filterName.target.value=='course'){
      this.dataSource.data = this.dataSource.data.sort((a, b) => a.courseId - b.courseId);
      return
    }
    this.getAllStudents()

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

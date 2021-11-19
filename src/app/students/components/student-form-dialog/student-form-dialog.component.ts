import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseInterface } from 'src/app/courses/models/CourseInterface';
import { CourseService } from 'src/app/courses/services/course.service';
import { StudentInterface } from '../../models/StudentInterface';
import { StudentService } from '../../services/student.service';

@Component({
  templateUrl: './student-form-dialog.component.html',
  styleUrls: ['./student-form-dialog.component.scss']
})
export class StudentFormDialogComponent implements OnInit {
  formGroup!:FormGroup;
  courses!:CourseInterface[]
  constructor(private readonly fb:FormBuilder,private readonly studentService:StudentService, public dialogRef: MatDialogRef<StudentFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public studentToUpdate: StudentInterface,
    private readonly courseService:CourseService
    ) {
    
   }

  ngOnInit(): void {
    this.initForm();
    this.courseService.getAllCourses().subscribe(data=>{
      this.courses = data
    })
  }

  initForm():void{
   this.formGroup =  this.fb.group({
     id:[this.studentToUpdate?.id  || new Date().getTime(),[Validators.required]],
     name:[this.studentToUpdate?.name || '',[Validators.required,Validators.maxLength(20)]],
     courseId:[this.studentToUpdate?.courseId ||'',[Validators.required]],
     grade:[this.studentToUpdate?.grade || '',[Validators.required,Validators.maxLength(40)]]

   })
  }
  submitForm(){
    if(!this.studentToUpdate){
      this.studentService.addStudent(this.formGroup.value).subscribe(()=>this.dialogRef.close())
      return
    }
    this.studentService.updateStudent(this.formGroup.value,this.studentToUpdate.id).subscribe(()=>this.dialogRef.close())
  }
}

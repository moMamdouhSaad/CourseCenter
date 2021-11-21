import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseInterface } from '../../models/CourseInterface';
import { CourseService } from '../../services/course.service';

@Component({
  templateUrl: './course-form-dialog.component.html',
  styleUrls: ['./course-form-dialog.component.scss'],
})
export class CourseFormDialogComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private readonly courseService: CourseService,
    public dialogRef: MatDialogRef<CourseFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public courseToUpdate: CourseInterface
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formGroup = this.fb.group({
      id: [
        this.courseToUpdate?.id || new Date().getTime(),
        [Validators.required],
      ],
      name: [this.courseToUpdate?.name || '', [Validators.required]],
      startDate: [this.courseToUpdate?.startDate || '', [Validators.required]],
      endDate: [this.courseToUpdate?.endDate || '', [Validators.required]],
    });
  }
  submitForm() {
    if (!this.courseToUpdate) {
      this.dialogRef.close({ event: 'submit', data: this.formGroup.value });

      // this.courseService.addCourse(this.formGroup.value).subscribe(()=>this.dialogRef.close())
      return;
    }
    this.courseService
      .updateCourse(this.formGroup.value, this.courseToUpdate.id)
      .subscribe(() => this.dialogRef.close());
  }
}

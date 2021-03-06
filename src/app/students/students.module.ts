import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentFormDialogComponent } from './components/student-form-dialog/student-form-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { ConfirmationMsgDialogComponent } from './components/confirmation-msg-dialog/confirmation-msg-dialog.component';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentFormDialogComponent,
    ConfirmationMsgDialogComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatDialogModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }

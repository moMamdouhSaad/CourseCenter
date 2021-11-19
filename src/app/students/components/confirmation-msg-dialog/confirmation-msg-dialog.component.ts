import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './confirmation-msg-dialog.component.html',
  styleUrls: ['./confirmation-msg-dialog.component.scss']
})
export class ConfirmationMsgDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ConfirmationMsgDialogComponent>) { }

  ngOnInit(): void {
  }
  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}

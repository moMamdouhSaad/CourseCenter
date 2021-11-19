import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationMsgDialogComponent } from './confirmation-msg-dialog.component';

describe('ConfirmationMsgDialogComponent', () => {
  let component: ConfirmationMsgDialogComponent;
  let fixture: ComponentFixture<ConfirmationMsgDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationMsgDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationMsgDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

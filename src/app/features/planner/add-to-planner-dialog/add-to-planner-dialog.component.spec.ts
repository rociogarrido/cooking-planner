import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToPlannerDialogComponent } from './add-to-planner-dialog.component';

describe('AddToPlannerDialogComponent', () => {
  let component: AddToPlannerDialogComponent;
  let fixture: ComponentFixture<AddToPlannerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToPlannerDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToPlannerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

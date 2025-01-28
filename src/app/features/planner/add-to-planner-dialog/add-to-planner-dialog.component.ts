import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-to-planner-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './add-to-planner-dialog.component.html',
  styleUrl: './add-to-planner-dialog.component.scss',
})
export class AddToPlannerDialogComponent {
  selectedDate: Date = new Date();

  constructor(
    public dialogRef: MatDialogRef<AddToPlannerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { recipeName: string },
  ) {}

  onConfirm(): void {
    if (this.selectedDate) {
      this.dialogRef.close(this.selectedDate);
    } else {
      console.log('No date selected');
      this.dialogRef.close();
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

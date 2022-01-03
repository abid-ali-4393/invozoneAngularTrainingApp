import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatCustomDialogComponent } from '../../Dialogs/mat-custom-dialog/mat-custom-dialog.component';

@Component({
  selector: 'app-material-practice-form',
  templateUrl: './material-practice-form.component.html',
  styleUrls: ['./material-practice-form.component.scss'],
})
export class MaterialPracticeFormComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar, private matDialog: MatDialog) {}

  openSnackRef = this._snackBar.open('', 'undo');
  openSnackBar(message, action) {
    this.openSnackRef = this._snackBar.open(message, action);
    this.openSnackRef.afterDismissed().subscribe(() => {
      console.log('Open Snackbar was dismissed');
    });

    this.openSnackRef.onAction().subscribe(() => {
      console.log('Open Snackbar action was performed');
    });
  }

  minDate = new Date();
  maxDate = new Date('2022-01-25');

  filterWeekends = (date: Date | null) => {
    console.log(date);
    let day = (date || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  openDialog() {
    console.log('Dialog got open');
    let dialogRef = this.matDialog.open(MatCustomDialogComponent, {
      data: { name: 'Abid Ali', height: '300px', width: '500px' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog Closed Result: ${result}`);
    });
  }

  ngOnInit(): void {}
}

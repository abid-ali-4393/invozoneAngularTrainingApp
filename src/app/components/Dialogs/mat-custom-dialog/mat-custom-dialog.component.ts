import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-custom-dialog',
  templateUrl: './mat-custom-dialog.component.html',
  styleUrls: ['./mat-custom-dialog.component.scss'],
})
export class MatCustomDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }
}

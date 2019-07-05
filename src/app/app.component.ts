import { Component, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AgGridDialogComponent} from './ag-grid-dialog/ag-grid-dialog.component';


@Component({
  selector: 'my-app',
  templateUrl: "./app.component.html"
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AgGridDialogComponent, {
      width: '1000px',
      height: '800px',
    });
  }
}


import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MatDialog} from '@angular/material';
import {NestDialogComponent} from '../nest-dialog/nest-dialog.component';
import {TextChangeService} from '../text-change.service';

@Component({
  selector: 'app-ag-grid-dialog',
  templateUrl: './ag-grid-dialog.component.html',
  styleUrls: ['./ag-grid-dialog.component.css']
})
export class AgGridDialogComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowData: [];
  private items: any[];
  private text;

  ngOnInit(): void {
  }

  constructor(private dialog: MatDialog, private textChangeService: TextChangeService) {
    this.columnDefs = [
      {
        field: "name",
        cellClass: "cell-wrap-text",
        width: 10
      },
      {
        field: "autoA",
        cellClass: "cell-wrap-text",
        autoHeight: true,
        width: 20
      },
      {
        field: "autoB",
        cellClass: "cell-wrap-text",
        autoHeight: true,
        width: 30
      },
      {
        field: "autoC",
        cellClass: "cell-wrap-text",
        autoHeight: true
      }
    ];
    this.defaultColDef = {
      sortable: true,
      resizable: true
    };
    this.items = [
      {
        label: 'Right Click Menu'
      }
    ];

    this.textChangeService.text$.subscribe(value => {
      this.text = value;
    });
  }

  onColumnResized(event) {
    this.gridApi.sizeColumnsToFit();
    //this.gridApi.resetRowHeights();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.restWidth();
    params.api.setRowData(createRowData());
  }

  restWidth() {
    const gridWidth = document.getElementById('ag-grid').parentNode.parentElement.clientWidth;
    this.columnDefs.forEach(column => {
      column.width = column.width * gridWidth / 100;
    });
    this.gridApi.setColumnDefs(this.columnDefs);
  }

  openDialog() {
    this.dialog.open(NestDialogComponent, {
      width: '800px',
      height: '400px',
    });
  }

  isSelected() {
    let checked = false;
    this.textChangeService.checked$.subscribe(value => {
      checked = value;
    });
    return checked;
  }
}

function createRowData() {
  var latinSentence =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  var latinWords = latinSentence.split(" ");
  var rowData = [];
  function generateRandomSentence(row, col) {
    var wordCount = ((row + 1) * (col + 1) * 733 * 19) % latinWords.length;
    var parts = [];
    for (var i = 0; i < wordCount; i++) {
      parts.push(latinWords[i]);
    }
    var sentence = parts.join(" ");
    return sentence + ".";
  }
  for (var i = 0; i < 100; i++) {
    var item = {
      name: "Row " + i,
      autoA: generateRandomSentence(i, 1),
      autoB: generateRandomSentence(i, 2),
      autoC: generateRandomSentence(i, 3)
    };
    rowData.push(item);
  }
  return rowData;

}

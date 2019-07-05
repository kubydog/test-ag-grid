import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
// HttpClient
import { HttpClientModule } from "@angular/common/http";

// ag-grid
import { AgGridModule } from "ag-grid-angular";
import { AppComponent } from "./app.component";
import {ShContextMenuModule} from 'ng2-right-click-menu';
import { AgGridDialogComponent } from './ag-grid-dialog/ag-grid-dialog.component';
import {MatCheckboxModule, MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTreeComponent } from './mat-tree/mat-tree.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { NestDialogComponent } from './nest-dialog/nest-dialog.component';
import { CheckboxCellComponent } from './checkbox-cell/checkbox-cell.component';

@NgModule({
  entryComponents: [
    AgGridDialogComponent,
    NestDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpClientModule,
    AgGridModule.withComponents([]),
    ShContextMenuModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTreeModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [AppComponent, AgGridDialogComponent, MatTreeComponent, NestDialogComponent, CheckboxCellComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

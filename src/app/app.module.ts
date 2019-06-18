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
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  entryComponents: [
    AgGridDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpClientModule,
    AgGridModule.withComponents([]),
    ShContextMenuModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  declarations: [AppComponent, AgGridDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

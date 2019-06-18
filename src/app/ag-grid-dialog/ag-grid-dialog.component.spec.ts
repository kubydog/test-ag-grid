import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridDialogComponent } from './ag-grid-dialog.component';

describe('AgGridDialogComponent', () => {
  let component: AgGridDialogComponent;
  let fixture: ComponentFixture<AgGridDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

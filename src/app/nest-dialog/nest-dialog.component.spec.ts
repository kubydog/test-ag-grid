import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestDialogComponent } from './nest-dialog.component';

describe('NestDialogComponent', () => {
  let component: NestDialogComponent;
  let fixture: ComponentFixture<NestDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

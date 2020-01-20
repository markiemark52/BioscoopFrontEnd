import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageComponent } from './manage.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ManageComponent', () => {
  let component: ManageComponent;
  let fixture: ComponentFixture<ManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

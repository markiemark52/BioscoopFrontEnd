import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailsComponent } from './film-details.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FilmDetailsComponent', () => {
  let component: FilmDetailsComponent;
  let fixture: ComponentFixture<FilmDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDetailsComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

import { async, TestBed } from '@angular/core/testing';

import { FilmsComponent } from './films.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('FilmsComponent', () => {
  let filmsComponent: FilmsComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ FilmsComponent, HttpClient, HttpHandler ],
    })
    .compileComponents();

    filmsComponent = TestBed.get(FilmsComponent);
  }));

  it('should create', () => {
    expect(filmsComponent).toBeTruthy();
  });
});

import { async, TestBed } from '@angular/core/testing';

import { FilmComponent } from './film.component';
import { isUndefined } from 'util';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('FilmComponent', () => {
  let filmComponent: FilmComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ FilmComponent, HttpClient, HttpHandler ],
    })
    .compileComponents();

    filmComponent = TestBed.get(FilmComponent);
  }));

  it('should create', () => {
    expect(filmComponent).toBeTruthy();
  });

  it('Film undefined on startup test', () => {
    expect(isUndefined(filmComponent.film)).toBeTruthy();
  })
});

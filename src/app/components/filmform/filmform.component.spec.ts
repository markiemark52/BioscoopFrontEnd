import { async, TestBed } from '@angular/core/testing';

import { FilmformComponent } from './filmform.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('FilmformComponent', () => {
  let filmformComponent: FilmformComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ FilmformComponent, HttpClient, HttpHandler ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();

    filmformComponent = TestBed.get(FilmformComponent);
  }));

  it('should create', () => {
    expect(filmformComponent).toBeTruthy();
  });
});

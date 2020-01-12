import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmComponent } from './film.component';
import { isUndefined } from 'util';

describe('FilmComponent', () => {
  let component: FilmComponent;
  let fixture: ComponentFixture<FilmComponent>;

beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [],
    declarations: [ FilmComponent ]
  }).compileComponents().then(() => {
    fixture = TestBed.createComponent(FilmComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });
}));

it('Film undefined on startup test', () => {
  expect(isUndefined(component.film)).toBeTruthy();
})



  // let component: FilmComponent;
  // let fixture: ComponentFixture<FilmComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ FilmComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(FilmComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

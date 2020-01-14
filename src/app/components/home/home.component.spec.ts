import { async, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('HomeComponent', () => {
  let homeComponent: HomeComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ HomeComponent, HttpClient, HttpHandler ]
    })
    .compileComponents();

    homeComponent = TestBed.get(HomeComponent);
  }));

  it('should create', () => {
    expect(homeComponent).toBeTruthy();
  });
});

import { async, TestBed } from '@angular/core/testing';

import { NavbarLoginComponent } from './navbar-login.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('NavbarLoginComponent', () => {
  let navbarLoginComponent: NavbarLoginComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ NavbarLoginComponent, HttpClient, HttpHandler ]
    })
    .compileComponents();

    navbarLoginComponent = TestBed.get(NavbarLoginComponent);
  }));

  it('should create', () => {
    expect(navbarLoginComponent).toBeTruthy();
  });
});

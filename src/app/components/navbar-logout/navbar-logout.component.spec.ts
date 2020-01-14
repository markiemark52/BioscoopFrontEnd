import { async, TestBed } from '@angular/core/testing';

import { NavbarLogoutComponent } from './navbar-logout.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('NavbarLogoutComponent', () => {
  let navbarLogoutComponent: NavbarLogoutComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ NavbarLogoutComponent, HttpClient, HttpHandler ]
    })
    .compileComponents();

    navbarLogoutComponent = TestBed.get(NavbarLogoutComponent);
  }));

  it('should create', () => {
    expect(navbarLogoutComponent).toBeTruthy();
  });
});

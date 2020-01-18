import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AuthService, HttpClient, HttpHandler ]
    })
    .compileComponents();

    authService = TestBed.get(AuthService);
  });

  it('should create', () => {
    expect(authService).toBeTruthy();
  });

  it('JwtToken null when user is not logged in', () => {
    if(authService.isLoggedIn()) {
      expect(authService.getJwtToken() != null).toBeTruthy();
    }
    else {
      expect(authService.getJwtToken() == null).toBeTruthy();
    }
  });
});

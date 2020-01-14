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
});

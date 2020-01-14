import { async, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let loginComponent: LoginComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ LoginComponent, HttpClient, HttpHandler ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();

    loginComponent = TestBed.get(LoginComponent);
  }));

  it('should create', () => {
    expect(loginComponent).toBeTruthy();
  });
});

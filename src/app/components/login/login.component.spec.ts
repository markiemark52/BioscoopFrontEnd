import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, FormBuilder } from '@angular/forms';

describe('LoginComponent', () => {
  let loginComponent: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ LoginComponent, HttpClient, HttpHandler, FormBuilder ],
      imports: [ RouterTestingModule, FormsModule ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    loginComponent = TestBed.get(LoginComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    loginComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(loginComponent).toBeTruthy();
  });

  it('form should be invalid on startup', () => {
    expect(loginComponent.loginForm.valid).toBeFalsy();
  });

  it('loginForm.email should be invalid on startup', () => {
    expect(loginComponent.loginForm.controls['email'].valid).toBeFalsy();
  });

  it('loginForm.email should error when input is empty or less than 5 symbols', () => {
    const emailControl = loginComponent.loginForm.controls['email'];
    let errors = emailControl.errors || {};
    expect(errors['required']).toBeTruthy();
    
    emailControl.setValue('four');
    errors = emailControl.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('loginForm.email should be valid after entering a value', () => {
    const emailControl = loginComponent.loginForm.controls['email'];
    emailControl.setValue('test@bioscoop.nl');
    expect(emailControl.valid).toBeTruthy();
  });

  it('loginForm.password should be invalid on startup', () => {
    expect(loginComponent.loginForm.controls['password'].valid).toBeFalsy();
  });

  it('loginForm.password should error when input is empty or less than 5 symbols', () => {
    const passwordControl = loginComponent.loginForm.controls['password'];
    let errors = passwordControl.errors || {};
    expect(errors['required']).toBeTruthy();
    
    passwordControl.setValue('four');
    errors = passwordControl.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('loginForm.password should be valid after entering a value', () => {
    const passwordControl = loginComponent.loginForm.controls['password'];
    passwordControl.setValue('admin');
    expect(passwordControl.valid).toBeTruthy();
  });

  it('loginUser.email should be null on startup', () => {
    expect(loginComponent.loginUser.email == null).toBeTruthy();
  });

  it('loginUser.password should be null on startup', () => {
    expect(loginComponent.loginUser.password == null).toBeTruthy();
  });

  it('loginResponse.email should be null on startup', () => {
    expect(loginComponent.loginResponse.email == null).toBeTruthy();
  });

  it('loginResponse.password should be null on startup', () => {
    expect(loginComponent.loginResponse.password == null).toBeTruthy();
  });

  it('test', async() => {
    const email = loginComponent.loginForm.value.email;
    expect(email.valid).toBeFalsy();
  })
});

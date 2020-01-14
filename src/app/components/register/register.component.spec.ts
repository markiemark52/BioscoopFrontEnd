import { async, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('RegisterComponent', () => {
  let registerComponent: RegisterComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ RegisterComponent, HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, FormsModule ]
    })
    .compileComponents();

    registerComponent = TestBed.get(RegisterComponent);
  }));

  it('should create', () => {
    expect(registerComponent).toBeTruthy();
  });
});

import { async, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('LogoutComponent', () => {
  let logoutComponent: LogoutComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ LogoutComponent, HttpClient, HttpHandler ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();

    logoutComponent = TestBed.get(LogoutComponent);
  }));

  it('should create', () => {
    expect(logoutComponent).toBeTruthy();
  });
});

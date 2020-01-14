import { async, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ProfileComponent', () => {
  let profileComponent: ProfileComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ ProfileComponent, HttpClient, HttpHandler ]
    })
    .compileComponents();

    profileComponent = TestBed.get(ProfileComponent);
  }));

  it('should create', () => {
    expect(profileComponent).toBeTruthy();
  });
});

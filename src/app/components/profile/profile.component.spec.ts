import { async, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmComponent } from '../film/film.component';

describe('ProfileComponent', () => {
  let profileComponent: ProfileComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ ProfileComponent ],
      declarations: [ ProfileComponent, FilmComponent ]
    })
    .compileComponents();

    profileComponent = TestBed.get(ProfileComponent);
  }));

  it('should create', () => {
    expect(profileComponent).toBeTruthy();
  });

  it('should render \'Welcome to your profile!\' in <p> tag', async() => {
    const fixture = TestBed.createComponent(ProfileComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Welcome to your profile!');
  });

  it('should render \'Films submitted by you:\' in <h3> tag', async() => {
    const fixture = TestBed.createComponent(ProfileComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Films submitted by you:');
  });
});

import { async, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmComponent } from '../film/film.component';

describe('HomeComponent', () => {
  let homeComponent: HomeComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ HomeComponent ],
      declarations: [ HomeComponent, FilmComponent ]
    })
    .compileComponents();

    homeComponent = TestBed.get(HomeComponent);
  }));

  it('should create', () => {
    expect(homeComponent).toBeTruthy();
  });

  it('should render \'Bioscoop\' in <h1> tag', async() => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Bioscoop');
  });

  it('should render \'Available films:\' in <h3> tag', async() => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Available films:');
  });
});

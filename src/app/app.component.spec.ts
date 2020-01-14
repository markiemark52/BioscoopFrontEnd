import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppComponent', () => {
  let appComponent: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ AppComponent, HttpClient, HttpHandler ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();

    appComponent = TestBed.get(AppComponent);
  }));

  it('should create', () => {
    expect(appComponent).toBeTruthy();
  });
});

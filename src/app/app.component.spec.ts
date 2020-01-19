import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let appComponent: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ AppComponent ],
      imports: [ RouterTestingModule, HttpClientModule ],
      declarations: [ AppComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    appComponent = TestBed.get(AppComponent);
  }));

  it('should create', () => {
    expect(appComponent).toBeTruthy();
  });

  it('should have as title \'bioscoop\'', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('bioscoop');
  })
});

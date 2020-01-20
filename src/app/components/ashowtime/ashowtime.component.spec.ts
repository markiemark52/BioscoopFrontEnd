import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshowtimeComponent } from './ashowtime.component';

describe('AshowtimeComponent', () => {
  let component: AshowtimeComponent;
  let fixture: ComponentFixture<AshowtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshowtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshowtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

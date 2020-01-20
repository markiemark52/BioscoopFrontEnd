import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriumDetailsComponent } from './auditorium-details.component';

describe('AuditoriumDetailsComponent', () => {
  let component: AuditoriumDetailsComponent;
  let fixture: ComponentFixture<AuditoriumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoriumDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

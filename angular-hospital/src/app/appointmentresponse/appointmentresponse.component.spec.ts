import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentresponseComponent } from './appointmentresponse.component';

describe('AppointmentresponseComponent', () => {
  let component: AppointmentresponseComponent;
  let fixture: ComponentFixture<AppointmentresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentresponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

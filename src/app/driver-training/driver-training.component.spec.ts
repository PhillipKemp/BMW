import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTrainingComponent } from './driver-training.component';

describe('DriverTrainingComponent', () => {
  let component: DriverTrainingComponent;
  let fixture: ComponentFixture<DriverTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighPerformanceDrivingComponent } from './high-performance-driving.component';

describe('HighPerformanceDrivingComponent', () => {
  let component: HighPerformanceDrivingComponent;
  let fixture: ComponentFixture<HighPerformanceDrivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighPerformanceDrivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighPerformanceDrivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

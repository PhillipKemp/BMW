import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedUsedCarsComponent } from './approved-used-cars.component';

describe('ApprovedUsedCarsComponent', () => {
  let component: ApprovedUsedCarsComponent;
  let fixture: ComponentFixture<ApprovedUsedCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedUsedCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedUsedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

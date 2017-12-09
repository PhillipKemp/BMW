import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefensiveDrivingComponent } from './defensive-driving.component';

describe('DefensiveDrivingComponent', () => {
  let component: DefensiveDrivingComponent;
  let fixture: ComponentFixture<DefensiveDrivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefensiveDrivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefensiveDrivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

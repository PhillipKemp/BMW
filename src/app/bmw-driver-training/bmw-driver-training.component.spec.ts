import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmwDriverTrainingComponent } from './bmw-driver-training.component';

describe('BmwDriverTrainingComponent', () => {
  let component: BmwDriverTrainingComponent;
  let fixture: ComponentFixture<BmwDriverTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmwDriverTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmwDriverTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

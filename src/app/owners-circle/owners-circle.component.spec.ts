import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersCircleComponent } from './owners-circle.component';

describe('OwnersCircleComponent', () => {
  let component: OwnersCircleComponent;
  let fixture: ComponentFixture<OwnersCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnersCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

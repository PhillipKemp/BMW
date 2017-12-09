import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollisionAvoidanceComponent } from './collision-avoidance.component';

describe('CollisionAvoidanceComponent', () => {
  let component: CollisionAvoidanceComponent;
  let fixture: ComponentFixture<CollisionAvoidanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollisionAvoidanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollisionAvoidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

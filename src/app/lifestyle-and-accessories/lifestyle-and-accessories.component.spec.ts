import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleAndAccessoriesComponent } from './lifestyle-and-accessories.component';

describe('LifestyleAndAccessoriesComponent', () => {
  let component: LifestyleAndAccessoriesComponent;
  let fixture: ComponentFixture<LifestyleAndAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifestyleAndAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifestyleAndAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

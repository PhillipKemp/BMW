import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToFindUsComponent } from './how-to-find-us.component';

describe('HowToFindUsComponent', () => {
  let component: HowToFindUsComponent;
  let fixture: ComponentFixture<HowToFindUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToFindUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToFindUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

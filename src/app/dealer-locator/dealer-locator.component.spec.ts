import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerLocatorComponent } from './dealer-locator.component';

describe('DealerLocatorComponent', () => {
  let component: DealerLocatorComponent;
  let fixture: ComponentFixture<DealerLocatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerLocatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

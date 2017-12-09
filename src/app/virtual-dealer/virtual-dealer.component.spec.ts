import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualDealerComponent } from './virtual-dealer.component';

describe('VirtualDealerComponent', () => {
  let component: VirtualDealerComponent;
  let fixture: ComponentFixture<VirtualDealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualDealerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

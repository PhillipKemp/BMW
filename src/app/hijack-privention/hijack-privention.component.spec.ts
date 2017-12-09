import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijackPriventionComponent } from './hijack-privention.component';

describe('HijackPriventionComponent', () => {
  let component: HijackPriventionComponent;
  let fixture: ComponentFixture<HijackPriventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijackPriventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijackPriventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

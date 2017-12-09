import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmwFinancialServicesComponent } from './bmw-financial-services.component';

describe('BmwFinancialServicesComponent', () => {
  let component: BmwFinancialServicesComponent;
  let fixture: ComponentFixture<BmwFinancialServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmwFinancialServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmwFinancialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeZ4Component } from './type-z4.component';

describe('TypeZ4Component', () => {
  let component: TypeZ4Component;
  let fixture: ComponentFixture<TypeZ4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeZ4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeZ4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

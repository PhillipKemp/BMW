import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMComponent } from './type-m.component';

describe('TypeMComponent', () => {
  let component: TypeMComponent;
  let fixture: ComponentFixture<TypeMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

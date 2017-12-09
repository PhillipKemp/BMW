import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeXComponent } from './type-x.component';

describe('TypeXComponent', () => {
  let component: TypeXComponent;
  let fixture: ComponentFixture<TypeXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

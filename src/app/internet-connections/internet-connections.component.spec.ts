import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetConnectionsComponent } from './internet-connections.component';

describe('InternetConnectionsComponent', () => {
  let component: InternetConnectionsComponent;
  let fixture: ComponentFixture<InternetConnectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetConnectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

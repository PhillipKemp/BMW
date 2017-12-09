import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAndTeamEventsComponent } from './corporate-and-team-events.component';

describe('CorporateAndTeamEventsComponent', () => {
  let component: CorporateAndTeamEventsComponent;
  let fixture: ComponentFixture<CorporateAndTeamEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateAndTeamEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateAndTeamEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

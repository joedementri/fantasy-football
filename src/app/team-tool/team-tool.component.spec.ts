import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamToolComponent } from './team-tool.component';

describe('TeamToolComponent', () => {
  let component: TeamToolComponent;
  let fixture: ComponentFixture<TeamToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerToolComponent } from './player-tool.component';

describe('PlayerToolComponent', () => {
  let component: PlayerToolComponent;
  let fixture: ComponentFixture<PlayerToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

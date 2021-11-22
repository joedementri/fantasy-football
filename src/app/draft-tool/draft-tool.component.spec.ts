import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftToolComponent } from './draft-tool.component';

describe('DraftToolComponent', () => {
  let component: DraftToolComponent;
  let fixture: ComponentFixture<DraftToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

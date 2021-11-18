import { TestBed } from '@angular/core/testing';

import { ScreenResizeEventService } from './screen-resize-event.service';

describe('ScreenResizeEventService', () => {
  let service: ScreenResizeEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenResizeEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

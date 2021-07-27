import { TestBed } from '@angular/core/testing';

import { TogglemodeService } from './togglemode.service';

describe('TogglemodeService', () => {
  let service: TogglemodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TogglemodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

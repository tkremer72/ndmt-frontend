import { TestBed } from '@angular/core/testing';

import { MileServiceService } from './mile-service.service';

describe('MileServiceService', () => {
  let service: MileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

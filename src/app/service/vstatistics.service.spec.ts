import { TestBed } from '@angular/core/testing';

import { VStatisticsService } from './vstatistics.service';

describe('VStatisticsService', () => {
  let service: VStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

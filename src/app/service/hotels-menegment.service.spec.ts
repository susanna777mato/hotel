import { TestBed } from '@angular/core/testing';

import { HotelsMenegmentService } from './hotels-menegment.service';

describe('HotelsMenegmentService', () => {
  let service: HotelsMenegmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelsMenegmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

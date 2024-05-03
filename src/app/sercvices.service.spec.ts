import { TestBed } from '@angular/core/testing';

import { SercvicesService } from './sercvices.service';

describe('SercvicesService', () => {
  let service: SercvicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SercvicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

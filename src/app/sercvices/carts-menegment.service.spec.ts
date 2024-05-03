import { TestBed } from '@angular/core/testing';

import { CartsMenegmentService } from './carts-menegment.service';

describe('CartsMenegmentService', () => {
  let service: CartsMenegmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartsMenegmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

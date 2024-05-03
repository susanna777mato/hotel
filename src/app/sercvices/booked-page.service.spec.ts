import { TestBed } from '@angular/core/testing';

import { BookedPageService } from './booked-page.service';

describe('BookedPageService', () => {
  let service: BookedPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookedPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

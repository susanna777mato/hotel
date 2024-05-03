import { TestBed } from '@angular/core/testing';

import { PostfiltrService } from './postfiltr.service';

describe('PostfiltrService', () => {
  let service: PostfiltrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostfiltrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

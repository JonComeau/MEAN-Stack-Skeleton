import { TestBed, inject } from '@angular/core/testing';

import { SkeletonService } from './skeleton.service';

describe('SkeletonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkeletonService]
    });
  });

  it('should be created', inject([SkeletonService], (service: SkeletonService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ProductFilterService } from './product-filter.service';

describe('ProductFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductFilterService]
    });
  });

  it('should be created', inject([ProductFilterService], (service: ProductFilterService) => {
    expect(service).toBeTruthy();
  }));
});

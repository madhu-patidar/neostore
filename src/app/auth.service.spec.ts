import { TestBed, inject } from '@angular/core/testing';

import { AuthServiceLocal } from './auth.service';

describe('AuthServiceLocal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthServiceLocal]
    });
  });

  it('should be created', inject([AuthServiceLocal], (service: AuthServiceLocal) => {
    expect(service).toBeTruthy();
  }));
});

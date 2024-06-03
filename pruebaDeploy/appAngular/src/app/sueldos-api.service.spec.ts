import { TestBed } from '@angular/core/testing';

import { SueldosApiService } from './sueldos-api.service';

describe('SueldosApiService', () => {
  let service: SueldosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SueldosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

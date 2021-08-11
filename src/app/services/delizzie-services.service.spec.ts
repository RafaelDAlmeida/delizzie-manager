import { TestBed } from '@angular/core/testing';

import { DelizzieServicesService } from './delizzie-services.service';

describe('DelizzieServicesService', () => {
  let service: DelizzieServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelizzieServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

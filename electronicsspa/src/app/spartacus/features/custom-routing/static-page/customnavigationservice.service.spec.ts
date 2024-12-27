import { TestBed } from '@angular/core/testing';

import { CustomnavigationserviceService } from './customnavigationservice.service';

describe('CustomnavigationserviceService', () => {
  let service: CustomnavigationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomnavigationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

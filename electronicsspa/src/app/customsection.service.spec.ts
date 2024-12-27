import { TestBed } from '@angular/core/testing';

import { CustomsectionService } from './customsection.service';

describe('CustomsectionService', () => {
  let service: CustomsectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomsectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

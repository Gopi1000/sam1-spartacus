import { TestBed } from '@angular/core/testing';

import { HeadernavigationService } from './headernavigation.service';

describe('HeadernavigationService', () => {
  let service: HeadernavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadernavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

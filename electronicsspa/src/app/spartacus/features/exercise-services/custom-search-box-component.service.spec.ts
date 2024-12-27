import { TestBed } from '@angular/core/testing';

import { CustomSearchBoxComponentService } from './custom-search-box-component.service';

describe('CustomSearchBoxComponentService', () => {
  let service: CustomSearchBoxComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomSearchBoxComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

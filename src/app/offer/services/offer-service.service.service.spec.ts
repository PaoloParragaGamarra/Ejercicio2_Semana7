import { TestBed } from '@angular/core/testing';

import { OfferServiceServiceService } from './offer-service.service.service';

describe('OfferServiceServiceService', () => {
  let service: OfferServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

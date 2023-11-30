import { TestBed } from '@angular/core/testing';
import { OfferFacade } from './offer.facade';

describe('OfferFacade', () => {
  let service: OfferFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

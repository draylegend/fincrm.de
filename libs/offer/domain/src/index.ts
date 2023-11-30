import { Provider } from '@angular/core';
import { OfferFacade } from './lib/offer.facade';
import { OfferService } from './lib/offer.service';

export * from './lib/offer.interfaces';
export { OfferFacade, OfferService };
export const offerProviders: Provider[] = [OfferFacade, OfferService];

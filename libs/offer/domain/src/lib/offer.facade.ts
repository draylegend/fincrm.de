import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { OfferService } from './offer.service';

@Injectable()
export class OfferFacade {
  #service = inject(OfferService);
  offers = toSignal(this.#service.offers$, { initialValue: [] });
}

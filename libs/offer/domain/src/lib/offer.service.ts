import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Offer } from './offer.interfaces';

@Injectable()
export class OfferService {
  #http = inject(HttpClient);

  offers$ = this.#http.get<Offer[]>('assets/offers.json');
}

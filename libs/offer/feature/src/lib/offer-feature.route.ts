import { Route } from '@angular/router';
import { offerProviders } from '@draylegend/offer/domain';

export const offerFeatureRoute: Route = {
  path: '',
  loadComponent: () => import('./offer-feature.component'),
  providers: [offerProviders],
};

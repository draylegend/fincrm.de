import { Route } from '@angular/router';

export const offerFeatureRoute: Route = {
  path: '',
  loadComponent: () => import('./offer-feature.component'),
};

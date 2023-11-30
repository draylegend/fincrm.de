import { Routes } from '@angular/router';
import { offerFeatureRoute } from '@draylegend/offer/feature';

export const appRoutes: Routes = [
  offerFeatureRoute,
  { path: '**', redirectTo: offerFeatureRoute.path },
];

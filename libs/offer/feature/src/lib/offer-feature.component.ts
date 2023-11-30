import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { OfferFacade } from '@draylegend/offer/domain';
import {
  AngularComponent,
  JestComponent,
  OfferComponent,
  PlaywrightComponent,
} from '@draylegend/offer/ui';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'main[feature=offer]',
  standalone: true,
  styleUrl: './offer-feature.component.scss',
  templateUrl: './offer-feature.component.html',
  imports: [
    OfferComponent,
    AngularComponent,
    JestComponent,
    PlaywrightComponent,
  ],
})
export default class OfferFeatureComponent {
  facade = inject(OfferFacade);
}

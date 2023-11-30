import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'main[feature=offer]',
  standalone: true,
  styleUrl: './offer-feature.component.scss',
  templateUrl: './offer-feature.component.html',
})
export default class OfferFeatureComponent {}

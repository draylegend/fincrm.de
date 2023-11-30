import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Offer } from '@draylegend/offer/domain';
import { AngularComponent, JestComponent, PlaywrightComponent } from '../icons';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'section[ui=offer]',
  standalone: true,
  templateUrl: './offer.component.html',
  imports: [AngularComponent, JestComponent, PlaywrightComponent],
})
export class OfferComponent {
  @Input({ required: true })
  data!: Offer;

  @Input({ required: true })
  color!: string;
}
